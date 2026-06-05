import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import OverviewPanel from "../components/OverviewPanel/overview";
import RegistrationForm from "../components/RegistrationForm/registration";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types/employee";

export function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployeesData = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEmployeesData();
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <OverviewPanel employees={employees} />
        <div className="app-content">
          <RegistrationForm fetchEmployees={fetchEmployeesData}/>
        </div>
      </div>
    </div>
  );
}
