import "./registration.css";
import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../../services/employeeService";
import type {
  Employee,
  EmployeeFormErrors,
  EmployeeFormValues,
} from "../../types/employee";

const blankForm: EmployeeFormValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  department: "",
  experience: "",
  skills: [],
};

const departmentOptions = [
  "IT",
  "Engineering",
  "HR",
  "Sales",
  "Marketing",
  "Finance",
];
const skillOptions = ["React", "TypeScript", "Node.js", "CSS", "JavaScript"];

interface RegistrationFormProps {
  fetchEmployees?: () => Promise<void>;
  editingEmployee?: Employee | null;
  onCancelEdit?: () => void;
}

function validateForm(form: EmployeeFormValues): EmployeeFormErrors {
  const errors: EmployeeFormErrors = {};

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

  if (form.experience === "") {
    errors.experience = "Experience is required.";
  } else {
    const experienceValue = Number(form.experience);
    if (
      Number.isNaN(experienceValue) ||
      experienceValue < 0 ||
      experienceValue > 50
    ) {
      errors.experience = "Experience must be between 0 and 50.";
    }
  }

  if (form.skills.length === 0) {
    errors.skills = "Please select at least one skill.";
  }

  return errors;
}

export default function RegistrationForm({
  fetchEmployees,
  editingEmployee,
  onCancelEdit,
}: RegistrationFormProps) {
  const [form, setForm] = useState<EmployeeFormValues>(() =>
    editingEmployee
      ? {
          name: editingEmployee.name,
          email: editingEmployee.email,
          password: editingEmployee.password,
          phone: editingEmployee.phone,
          department: editingEmployee.department,
          experience: String(editingEmployee.experience),
          skills: [...editingEmployee.skills],
        }
      : blankForm,
  );
  const [errors, setErrors] = useState<EmployeeFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>(() =>
    editingEmployee ? `Editing employee #${editingEmployee.id}` : "",
  );

  useEffect(() => {
    (async () => {
      await Promise.resolve();

      setErrors({});

      if (editingEmployee) {
        setForm({
          name: editingEmployee.name,
          email: editingEmployee.email,
          password: editingEmployee.password ?? "",
          phone: editingEmployee.phone,
          department: editingEmployee.department,
          experience: String(editingEmployee.experience),
          skills: [...editingEmployee.skills],
        });
        setMessage(`Editing employee #${editingEmployee.id}`);
      } else {
        setForm(blankForm);
        setMessage("");
      }
    })();
  }, [editingEmployee]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name as keyof EmployeeFormValues]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name as keyof EmployeeFormErrors];
      return nextErrors;
    });

    setMessage("");
  };

  const toggleSkill = (skill: string) => {
    setForm((current) => ({
      ...current,
      skills: current.skills.includes(skill)
        ? current.skills.filter((selected) => selected !== skill)
        : [...current.skills, skill],
    }));

    setErrors((current) => {
      if (!current.skills) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors.skills;
      return nextErrors;
    });

    setMessage("");
  };

  const resetForm = () => {
    setForm(blankForm);
    setErrors({});
    setMessage("");
    onCancelEdit?.();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      phone: form.phone.trim(),
      department: form.department,
      experience: Number(form.experience),
      skills: [...form.skills],
    };

    try {
      if (editingEmployee) {
        await updateEmployee(editingEmployee.id, payload);
      } else {
        await createEmployee(payload);
      }

      if (fetchEmployees) {
        await fetchEmployees();
      }
      setForm(blankForm);
      setErrors({});
      setMessage(
        editingEmployee
          ? "Employee updated successfully."
          : "Employee saved successfully.",
      );
      onCancelEdit?.();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panel-card">
      <div className="section-heading">
        <h3>Registration Form</h3>
        <p>Fill the details and submit the employee record.</p>
      </div>

      <form
        key={editingEmployee ? editingEmployee.id : "new"}
        className="employee-form"
        onSubmit={handleSubmit}
      >
        <label>
          <span>Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className={errors.name ? "input error" : "input"}
          />
          {errors.name ? <em>{errors.name}</em> : null}
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className={errors.email ? "input error" : "input"}
          />
          {errors.email ? <em>{errors.email}</em> : null}
        </label>

        <label>
          <span>Password</span>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
            className={errors.password ? "input error" : "input"}
          />
          {errors.password ? <em>{errors.password}</em> : null}
        </label>

        <label>
          <span>Phone</span>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            maxLength={10}
            inputMode="numeric"
            className={errors.phone ? "input error" : "input"}
          />
          {errors.phone ? <em>{errors.phone}</em> : null}
        </label>

        <div className="inline-grid">
          <label>
            <span>Department</span>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className={errors.department ? "input error" : "input"}
            >
              <option value="">Select department</option>
              {departmentOptions.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
            {errors.department ? <em>{errors.department}</em> : null}
          </label>

          <label>
            <span>Experience (years)</span>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="Enter experience"
              type="number"
              min={0}
              max={50}
              className={errors.experience ? "input error" : "input"}
            />
            {errors.experience ? <em>{errors.experience}</em> : null}
          </label>
        </div>

        <fieldset>
          <legend>Choose skills (at least one)</legend>
          <div className="skill-wrap">
            {skillOptions.map((skill) => (
              <label key={skill} className="skill-pill">
                <div className="skill-content">
                  <input
                    type="checkbox"
                    checked={form.skills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                  />
                  <span>{skill}</span>
                </div>
              </label>
            ))}
          </div>
          {errors.skills ? <em>{errors.skills}</em> : null}
        </fieldset>

        {message ? (
          <div
            className={
              message.includes("successfully") ? "notice success" : "notice"
            }
          >
            {message}
          </div>
        ) : null}

        <div className="form-actions">
          {editingEmployee ? (
            <button
              type="button"
              className="secondary-button"
              onClick={resetForm}
            >
              Cancel
            </button>
          ) : null}
          <button type="submit" className="primary-button" disabled={loading}>
            {loading ? "Saving..." : editingEmployee ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
