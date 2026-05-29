const departmentOptions = [
  "Engineering",
  "HR",
  "Sales",
  "Marketing",
  "Finance",
];

const skillOptions = [
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "Python",
  "SQL",
  "MongoDB",
  "TypeScript",
];

function FieldError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="field-error">{message}</p>;
}

export default function Form({
  form,
  errors,
  loading,
  message,
  onChange,
  onSkillChange,
  onSubmit,
}) {
  return (
    <div>
      <div>
        <h2 className="section-title">Registration Form</h2>
        <p className="section-note">
          Fill the details and submit the employee record.
        </p>
      </div>

      <form onSubmit={onSubmit} className="form">
        <div>
          <label className="label">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Enter name"
            className={`input ${errors.name ? "input-error" : ""}`}
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <label className="label">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter email"
            className={`input ${errors.email ? "input-error" : ""}`}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <label className="label">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="10 digit phone number"
            maxLength="10"
            inputMode="numeric"
            className={`input ${errors.phone ? "input-error" : ""}`}
          />
          <FieldError message={errors.phone} />
        </div>

        <div>
          <label className="label">Department</label>
          <select
            name="department"
            value={form.department}
            onChange={onChange}
            className={`input ${errors.department ? "input-error" : ""}`}
          >
            <option value="">Select department</option>
            {departmentOptions.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          <FieldError message={errors.department} />
        </div>

        <div>
          <label className="label">
            Experience (years)
          </label>
          <input
            name="experience"
            value={form.experience}
            onChange={onChange}
            placeholder="0 to 50"
            type="number"
            min="0"
            max="50"
            step="1"
            className={`input ${errors.experience ? "input-error" : ""}`}
          />
          <FieldError message={errors.experience} />
        </div>

        <div>
          <label className="label">
            Choose skills (at least one)
          </label>
          <div className="skills-list">
            {skillOptions.map((skill) => {
              const checked = form.skills.includes(skill);

              return (
                <label
                  key={skill}
                  className="skill-item"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onSkillChange(skill)}
                    className="checkbox"
                  />
                  {skill}
                </label>
              );
            })}
          </div>
          <FieldError message={errors.skills} />
        </div>

        {/* success/fail message */}
        {message ? (
          <div className={`message ${/saved|success/i.test(message) ? 'success' : 'error'}`}>
            {message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
