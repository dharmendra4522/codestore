import { useEffect, useState } from "react";
import Form from "./Form";
import "./App.css";
import { createUser } from "./services/userService";
import { fetchUsers } from "./services/userService";

function makeBlankForm() {
  return {
    name: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    skills: [],
  };
}

function validateForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone is required.";
  } else if (!/^\d{10}$/.test(form.phone.trim())) {
    errors.phone = "Phone must be exactly 10 digits.";
  }

  if (!form.department) {
    errors.department = "Department is required.";
  }

  const experienceValue = Number(form.experience);
  if (form.experience === "") {
    errors.experience = "Experience is required.";
  } else if (
    Number.isNaN(experienceValue) ||
    experienceValue < 0 ||
    experienceValue > 50
  ) {
    errors.experience = "Experience must be between 0 and 50.";
  }

  if (!Array.isArray(form.skills) || form.skills.length === 0) {
    errors.skills = "Please select at least one skill.";
  }

  return errors;
}

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(makeBlankForm());
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[name];
      return nextErrors;
    });

    setMessage("");
  }

  function handleSkillChange(skill) {
    setForm((prev) => {
      const hasSkill = prev.skills.includes(skill);

      return {
        ...prev,
        skills: hasSkill
          ? prev.skills.filter((item) => item !== skill)
          : [...prev.skills, skill],
      };
    });

    setErrors((prev) => {
      if (!prev.skills) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors.skills;
      return nextErrors;
    });

    setMessage("");
  }

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const list = await fetchUsers();
        if (!Array.isArray(list)) return;
        if (mounted) setUsers(list);
      } catch (e) {
        console.warn("Could not load users:", e?.message || e);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const currentErrors = validateForm(form);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const responseData = await createUser(form);

      const savedUser = {
        id: responseData.id ?? Date.now(),
        ...form,
        experience: Number(form.experience),
      };

      setUsers((prev) => [...prev, savedUser]);
      setForm(makeBlankForm());
      setErrors({});
      setMessage("User saved successfully.");
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <div>
            <p className="eyebrow">Part B</p>
            <h1 className="title">Employee Insights Dashboard</h1>
            <p className="subtitle">
              Fill the registration form and see the saved user details below.
            </p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="panel">
            <Form
              form={form}
              errors={errors}
              loading={loading}
              message={message}
              onChange={handleChange}
              onSkillChange={handleSkillChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="panel">
            <h2 className="section-title">Saved Users</h2>
            <p className="section-note">Submitted users are loaded from the API.</p>

            <div className="list">
              {users.length === 0 ? (
                <div className="empty-state">No users saved yet.</div>
              ) : (
                users.map((user) => (
                  <div key={user.id} className="user-card">
                    <div>
                      <h3 className="user-name">{user.name}</h3>
                      <p className="user-email">{user.email}</p>
                      <p className="user-meta">
                        {user.department} • {user.experience} years • {user.phone}
                      </p>
                    </div>

                    <div className="skills">
                      {user.skills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
