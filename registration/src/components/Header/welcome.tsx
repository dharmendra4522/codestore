import "./welcome.css";


function Welcome() {
  return (
    <main className="welcome-page">
      <section className="welcome-content">
        <aside className="welcome-panel" aria-label="Welcome message">
          <h1>Welcome to Employee Management System</h1>
          <p>Please login to access the dashboard and manage your employees.</p>
        </aside>
        <section className="welcome-card" aria-label="Login prompt">
          <h2>Get Started</h2>
          <p>Click the button below to login and continue.</p>
          <button
            className="sign-in-btn"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        </section>
      </section>
    </main>
  );
}

export default Welcome;
