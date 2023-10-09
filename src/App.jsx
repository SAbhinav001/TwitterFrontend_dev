import React, { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./components/signup";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AppContext } from "./context/contextAPI";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={[<Sidebar />, <Feed />, <Widgets />]}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
