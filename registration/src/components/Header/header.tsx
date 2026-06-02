import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const loggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };

  const handleLogin = () => {
    if (loggedIn()) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="topbar">
      <div className="brand-mark" aria-hidden="true">
        ER
      </div>
      <div className="brand-copy">
        <h1>Employee Registration</h1>
        <p>Add, edit and manage employees</p>
        {loggedIn() ? <p>Welcome back, {localStorage.getItem("user")}</p> : null}
      </div>
      {/* Login button */}
      <button className="login-btn" onClick={handleLogin}>
        {loggedIn() ? "Logout" : "Login"}
      </button>
    </header>
  );
}
