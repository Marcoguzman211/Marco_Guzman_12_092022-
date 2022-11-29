import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
