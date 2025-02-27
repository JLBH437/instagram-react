import React from "react";
import NavBar from "./navbar.jsx";
import SideBar from "./sidebar.jsx";
import Body from "./body.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
