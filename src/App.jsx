import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import SignUp from "./components/signup";

function App() {
  return (
    <div className="app">
      {/* <Sidebar />

      <Feed />

      <Widgets /> */}

      <SignUp />
    </div>
  );
}

export default App;
