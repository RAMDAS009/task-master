import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import StudentList from "./pages/StudentList/StudentList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Submissions from "./pages/Submissions/Submissions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="StudentsList" element={<StudentList />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="submittions" element={<Submissions />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
