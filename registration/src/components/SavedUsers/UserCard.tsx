import "./savedUser.css";
import type { Employee } from '../../types/employee';

function UserCard({ user, onEdit, onDelete }: { user: Employee; onEdit?: (u: Employee) => void; onDelete?: (id: number) => void }) {
  const details = [
    user.email ? { label: 'Email', value: user.email } : null,
    user.phone ? { label: 'Phone', value: user.phone } : null,
    user.department ? { label: 'Department', value: user.department } : null,
    user.experience ? { label: 'Experience', value: `${user.experience} year(s)` } : null,
    user.skills?.length ? { label: 'Skills', value: user.skills.join(', ') } : null,
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  const initials = user.name
    ? user.name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : `#${String(user.id).slice(-2)}`;

  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="user-avatar" aria-hidden="true">
          {initials}
        </div>
        <div className="user-heading-group">
          <p className="user-id">User #{user.id}</p>
          <h3 className="user-title">{user.name ?? 'Unnamed User'}</h3>
        </div>
        <div className="user-actions">
          <button
            className="btn btn-edit"
            onClick={() => onEdit?.(user)}
            aria-label={`Edit user ${user.id}`}
          >
            Edit
          </button>
          <button
            className="btn btn-delete"
            onClick={() => onDelete?.(user.id)}
            aria-label={`Delete user ${user.id}`}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="user-details">
        {details.length ? (
          details.map((detail) => (
            <p className="user-line" key={detail.label}>
              <strong>{detail.label}:</strong> <span>{detail.value}</span>
            </p>
          ))
        ) : (
          <p className="user-empty-state">No additional details available.</p>
        )}
      </div>
    </div>
  );
}

export default UserCard;
