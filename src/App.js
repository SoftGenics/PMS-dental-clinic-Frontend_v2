import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import AddDocter from "./Components/Doctors/Add Docter/AddDocter";
import ListOfAllDocter from "./Components/Doctors/ListOfAllDocter/ListOfAllDocter";
import AddPatient from "./Components/Patients/AddPatient/AddPatient";
import PatientsList from "./Components/Patients/PatientsList/PatientsList";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut"
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Add_Doctor" element={<AddDocter />} />
      <Route path="/List_Of_Doctors" element={<ListOfAllDocter />} />
      <Route path="/Add_Patient" element={<AddPatient />} />
      <Route path="/Patients_List" element={<PatientsList />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;
