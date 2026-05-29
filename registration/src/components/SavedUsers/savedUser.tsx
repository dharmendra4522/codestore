import type { Employee } from "../../types/employee";

interface SavedUserProps {
  employees: Employee[];
  editingEmployeeId: number | null;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "ER";
}

export default function SavedUser({
  employees,
  editingEmployeeId,
  onEdit,
  onDelete,
}: SavedUserProps) {
  return (
    <section className="panel-card saved-panel">
      <div className="section-heading">
        <h3>Saved Users</h3>
        <span className="user-count">Total Users: {employees.length}</span>
        <p>Showing users from the backend.</p>
      </div>

      <div className="saved-list">
        {employees.length === 0 ? (
          <div className="empty-state">No employees saved yet.</div>
        ) : (
          employees.map((employee) => (
            <article
              key={employee.id}
              className={
                editingEmployeeId === employee.id
                  ? "employee-card active"
                  : "employee-card"
              }
            >
              <div className="card-top">
                <div className="avatar">{getInitials(employee.name)}</div>
                <div className="card-meta">
                  <span>User #{employee.id}</span>
                  <strong>{employee.name}</strong>
                </div>
                <div className="card-actions">
                  <button type="button" className="edit-button" onClick={() => onEdit(employee)}>
                    Edit
                  </button>
                  <button type="button" className="delete-button" onClick={() => onDelete(employee.id)}>
                    Delete
                  </button>
                </div>
              </div>

              <div className="card-details">
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.phone}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Experience:</strong> {employee.experience} year(s)</p>
                <p><strong>Skills:</strong> {employee.skills.join(", ")}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}