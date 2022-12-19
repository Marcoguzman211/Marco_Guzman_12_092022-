import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

/**
 *
 * @returns {JSX.Element} main app commponent containing the navbar, sidebar and dashboard
 */
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
