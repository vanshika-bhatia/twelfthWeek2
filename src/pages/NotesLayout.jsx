
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";

export default function NotesLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <h1>Fundoo Notes</h1>

      <nav style={{ display: "flex", gap: "16px" }}>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/archive">Archive</NavLink>
        <NavLink to="/shared">Shared</NavLink>
        <NavLink to="/labels/Personal">Personal Label</NavLink>
        <NavLink to="/collaborate">Collaborate</NavLink>

        <button onClick={handleLogout}>Logout</button>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
