import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, deleteUser } from "../api/users";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then(res => setUser(res.data));
  }, [id]);

  const handleDelete = async () => {
    await deleteUser(id);
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="page-content">
      <h1 className="title">{user.name}</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={handleDelete}
        className="btn-danger"
      >
        Delete User
      </button>
    </div>
  );
}
