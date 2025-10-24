import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import UserCard from "../components/UserCard";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data || []));
  }, []);

  const filtered = users.filter((u) => {
    const fullName = `${u.firstName || ""} ${u.lastName || ""}`.toLowerCase();
    const email = (u.email || "").toLowerCase();
    const q = query.trim().toLowerCase();
    if (q && !(fullName.includes(q) || email.includes(q) || (u.companyName || "").toLowerCase().includes(q))) return false;
    if (typeFilter !== "all" && ((u.type || "").toLowerCase() !== typeFilter)) return false;
    if (statusFilter !== "all" && ((u.status || "").toLowerCase() !== statusFilter)) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="users-page">
      <header className="users-header">
        <h1 className="users-title">Users</h1>
        
      </header>

      <main className="users-list">
        <div className="list-toolbar">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="users-search"
            aria-label="Search users"
          />

          <div className="toolbar-filters">
            <label className="filter-label">Type</label>
            <select className="filter-select" value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}>
              <option value="all">All</option>
              <option value="service">Service</option>
              <option value="connect">Connect</option>
            </select>

            <label className="filter-label">State</label>
            <select className="filter-select" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="deactivated">Deactivated</option>
            </select>

            <label className="filter-label">Company</label>
            <select className="filter-select" value="all" onChange={() => {}}>
              <option value="all">All</option>
            </select>
          </div>
          <div>
            
          </div>
          <div className="users-controls">
          <button className="create-btn">+ Create new</button>
        </div>
        </div>

        <div className="list-scroll">
          <div className="users-list-head">
            <div className="col name-col">Name</div>
            <div className="col phone-col">Phone</div>
            <div className="col type-col">Type</div>
            <div className="col status-col">State</div>
            <div className="col company-col">Company</div>
            <div className="col actions-col"></div>
          </div>

          <div className="users-list-body">
            {pageItems.map((u) => (
              <UserCard key={u.id} user={u} />
            ))}
            {filtered.length === 0 && <div className="no-results">No users found.</div>}
          </div>
        </div>

        <footer className="users-pagination">
          <div className="pagination-controls">
            <button className="page-btn" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const pg = i + 1;
              return (
                <button
                  key={pg}
                  className={`page-num ${pg === page ? 'active' : ''}`}
                  onClick={() => setPage(pg)}
                >
                  {pg}
                </button>
              );
            })}
            <button className="page-btn" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
          </div>
        </footer>
      </main>
    </div>
  );
}
