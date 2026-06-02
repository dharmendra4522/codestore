import "./overview.css";
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
    <section className="overview-panel">
      <div className="overview-copy">
        <p className="overview-kicker">Employee Dashboard</p>
        <h2>Track registrations, edits, and saved users in one place.</h2>
        <p className="overview-text">
          A cleaner snapshot of your current employee data helps you quickly
          see what is already saved and where your team is growing.
        </p>
      </div>

      <div className="overview-stats">
        <article className="overview-stat-card">
          <span>Total Employees</span>
          <strong>{employees.length}</strong>
        </article>
        <article className="overview-stat-card">
          <span>Departments</span>
          <strong>{departmentCount}</strong>
        </article>
        <article className="overview-stat-card">
          <span>Unique Skills</span>
          <strong>{uniqueSkills}</strong>
        </article>
      </div>
    </section>
  );
}