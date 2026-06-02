import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import SavedUser from "../components/SavedUsers/savedUser";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import type { Employee } from "../types/employee";
import OverviewPanel from "../components/OverviewPanel/overview";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm/registration";

export function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteEmployee = async (id: number) => {
    const shouldDelete = window.confirm("Delete this employee record?");

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteEmployee(id);
      if (editingEmployee?.id === id) {
        setEditingEmployee(null);
      }
      await fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="App">
        <OverviewPanel employees={employees} />
        <div className="app-content">
          {editingEmployee ? (
            <RegistrationForm
              fetchEmployees={fetchEmployees}
              editingEmployee={editingEmployee}
              onCancelEdit={() => setEditingEmployee(null)}
            />
          ) : null}
          <SavedUser
            employees={employees}
            editingEmployeeId={editingEmployee?.id ?? null}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
          />
        </div>
      </div>
    </div>
  );
}












