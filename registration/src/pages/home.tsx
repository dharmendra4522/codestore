import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import OverviewPanel from "../components/OverviewPanel/overview";
import RegistrationForm from "../components/RegistrationForm/registration";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types/employee";

export function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  // const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // const fetchEmployees = async () => {
  //   try {
  //     const response = await getEmployees();
  //     setEmployees(response.data);
  //   } catch (error) {
  //     console.error("Error fetching employees:", error);
  //   }
  // };

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const response = await getEmployees();
        if (mounted) setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <OverviewPanel employees={employees} />
        <div className="app-content">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
