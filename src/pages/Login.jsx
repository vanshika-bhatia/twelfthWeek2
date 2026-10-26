
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/notes", { replace: true });
  }

  return (
    <div>
      <h1>Fundoo Notes</h1>
      <p>Sign in to access your notes.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
