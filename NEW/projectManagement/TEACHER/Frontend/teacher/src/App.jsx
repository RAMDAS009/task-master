import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import TSidebar from "./components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TSidebar />
    </>
  );
}

export default App;
