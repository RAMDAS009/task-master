import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import TSidebar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import StudentList from "./pages/Student-List/StudentList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
