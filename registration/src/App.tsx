import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { ProtectRoute } from "./routes/protectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectRoute>
                <Dashboard />
              </ProtectRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
