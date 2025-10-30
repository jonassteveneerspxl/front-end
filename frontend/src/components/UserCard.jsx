import { Link, useNavigate } from "react-router-dom";

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

export default function UserCard({ user }) {
	const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

	const navigate = useNavigate();

	const handleClick = (e) => {
		if (e.target.closest('a') || e.target.closest('button')) return;
		navigate(`/users/${user.id}`);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			navigate(`/users/${user.id}`);
		}
	};

	return (
		<article className="user-row" role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
			<div className="col name-col">
				<div className="name-main">
					<Link to={`/users/${user.id}`} className="name-link">{name || user.email}</Link>
				</div>
				<div className="email">{user.email}</div>
			</div>

			<div className="col phone-col">{user.phone || "—"}</div>

			<div className="col type-col">
				<TypeBadge type={user.type} />
			</div>

			<div className="col status-col">
				<StatusLabel status={user.status} />
			</div>

			<div className="col company-col">
				<div className="company">{user.companyName || "—"}</div>
			</div>

			<div className="col actions-col"></div>
		</article>
	);
}
