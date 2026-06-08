import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { login } from "../services/authService";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await login({ email, password });
      console.log("Login successful:", response);
      if (!response || !response.success) {
        throw new Error(response?.message || "Login failed");
      }

      localStorage.setItem("user", JSON.stringify(response.user));
      if(response.authToken){
        localStorage.setItem("authToken", response.authToken);
      }
      // mark as logged in so ProtectRoute can detect authenticated state
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-shell" aria-label="Employee portal sign in">
        <aside className="login-brand-panel">
          <p className="brand-chip">CodeStore Employee Portal</p>
          <h1>Sign in and continue managing your team.</h1>
          <p className="brand-copy">
            Access employee registration, updates, and dashboard insights from
            one secure workspace.
          </p>
        </aside>

        <section className="login-card" aria-label="Login form">
          <header className="card-header">
            <h2>Welcome back</h2>
            <p>Use your work credentials to sign in.</p>
          </header>

          <form className="login-form" noValidate onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              autoComplete="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <div className="form-row">
              <label className="remember-choice" htmlFor="rememberMe">
                <input id="rememberMe" name="rememberMe" type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" onClick={(event) => event.preventDefault()}>
                Forgot password?
              </a>
            </div>
            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="signup-copy">
            New here? <Link to="/">Back to home</Link>
          </p>
        </section>
      </section>
    </main>
  );
}
