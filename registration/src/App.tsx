import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import OverviewPanel from "./components/OverviewPanel/overview";
import RegistrationForm from "./components/RegistrationForm/registration";
import SavedUser from "./components/SavedUsers/savedUser";

import {
  deleteEmployee,
  getEmployees,
} from "./services/employeeService";
import type { Employee } from "./types/employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const fetchEmployees = async () => {
    try{
      const response = await getEmployees();
      setEmployees(response.data);
    }
    catch(error){
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    void fetchEmployees();
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
    <>
      <Header />
      <div className="App">
        <OverviewPanel employees={employees} />
        <div className="app-content">
          <RegistrationForm
            fetchEmployees={fetchEmployees}
            editingEmployee={editingEmployee}
            onCancelEdit={() => setEditingEmployee(null)}
          />
          <SavedUser
            employees={employees}
            editingEmployeeId={editingEmployee?.id ?? null}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
          />
        </div>
      </div>
    </>
  );
}

export default App;
