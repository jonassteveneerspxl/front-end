import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, deleteUser } from "../api/users";

function TypeBadge({ type }) {
  const t = (type || "").toLowerCase();
  const label = t === "service" ? "Service" : t === "connect" ? "Connect" : (type || "");
  const cls = t === "service" ? "badge badge-service" : "badge badge-connect";
  return <div className={cls}>{label}</div>;
}

function StatusLabel({ status }) {
  const s = (status || "").toLowerCase();
  let cls = "status status-default";
  if (s === "deactivated" || s === "deactive") cls = "status status-deactivated";
  if (s === "inactive") cls = "status status-inactive";
  if (s === "active") cls = "status status-active";
  return <div className={cls}>{(status || "").charAt(0).toUpperCase() + (status || "").slice(1)}</div>;
}

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then(res => setUser(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (!confirm('Delete this user?')) return;
    await deleteUser(id);
    navigate("/");
  };

  if (!user) return <p style={{ padding: 20 }}>Loading...</p>;

  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();
  const initials = (user.firstName || "").charAt(0).toUpperCase() + (user.lastName || "").charAt(0).toUpperCase();

  return (
    <div className="users-page" style={{ maxWidth: 1100 }}>
      <header className="users-header detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div className="avatar">{initials || 'U'}</div>
          <div>
            <h1 className="users-title">{fullName || user.email}</h1>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}>
              <TypeBadge type={user.type} />
              <StatusLabel status={user.status} />
              {user.companyName && <div className="company small">{user.companyName}</div>}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/" className="btn-ghost">Back</Link>
          <button onClick={handleDelete} className="btn-danger">Delete user</button>
        </div>
      </header>

      <main className="detail-main">
        <section className="detail-cards">
          <div className="detail-card">
            <div className="card-header">
              <h3>Personal information</h3>
              <button className="btn-edit">Edit</button>
            </div>

            <div className="card-body">
              <div className="card-row">
                <div className="field">
                  <div className="field-label">First name</div>
                  <div className="field-value">{user.firstName || '—'}</div>
                </div>
                <div className="field">
                  <div className="field-label">Last Name</div>
                  <div className="field-value">{user.lastName || '—'}</div>
                </div>
              </div>

              <div className="card-row">
                <div className="field">
                  <div className="field-label">Email</div>
                  <div className="field-value">{user.email || '—'}</div>
                </div>
                <div className="field">
                  <div className="field-label">Phone</div>
                  <div className="field-value">{user.phone || '—'}</div>
                </div>
              </div>

              <div className="card-row single">
                <div className="field">
                  <div className="field-label">Bio</div>
                  <div className="field-value">{user.bio || '—'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <div className="card-header">
              <h3>Company</h3>
              <button className="btn-edit">Edit</button>
            </div>

            <div className="card-body">
              <div className="card-row">
                <div className="field">
                  <div className="field-label">Name</div>
                  <div className="field-value">{user.companyName || '—'}</div>
                </div>
                <div className="field">
                  <div className="field-label">City</div>
                  <div className="field-value">{user.city || '—'}</div>
                </div>
              </div>

              <div className="card-row">
                <div className="field">
                  <div className="field-label">County</div>
                  <div className="field-value">{user.country || '—'}</div>
                </div>
                <div className="field">
                  <div className="field-label">Postal code</div>
                  <div className="field-value">{user.postalCode || user.postal || '—'}</div>
                </div>
              </div>

              <div className="card-row single">
                <div className="field">
                  <div className="field-label">Street</div>
                  <div className="field-value">{user.address || '—'}</div>
                </div>
              </div>

              <div className="card-row single">
                <div className="field">
                  <div className="field-label">VAT</div>
                  <div className="field-value">{user.vatNumber || '—'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
