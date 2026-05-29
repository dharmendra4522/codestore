import type { Employee } from "../../types/employee";

interface OverviewPanelProps {
  employees: Employee[];
}

export default function OverviewPanel({ employees }: OverviewPanelProps) {
  const departmentCount = new Set(
    employees.map((employee) => employee.department).filter(Boolean),
  ).size;

  const uniqueSkills = new Set(
    employees.flatMap((employee) => employee.skills),
  ).size;

  return (
    <section className="hero-card">
      <div className="hero-copy">
        <p className="eyebrow">Employee Dashboard</p>
        <h2>Track registrations, edits, and saved users in one place.</h2>
        <p className="hero-text">
          A cleaner snapshot of your current employee data helps you quickly
          see what is already saved and where your team is growing.
        </p>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <span>Total Employees</span>
          <strong>{employees.length}</strong>
        </article>
        <article className="stat-card">
          <span>Departments</span>
          <strong>{departmentCount}</strong>
        </article>
        <article className="stat-card">
          <span>Unique Skills</span>
          <strong>{uniqueSkills}</strong>
        </article>
      </div>
    </section>
  );
}