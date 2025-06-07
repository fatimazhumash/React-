import React, { useState } from "react";
import "./LogReg.css";
function LogReg() {
  const [page, setPage] = useState("first-page");

  if (page === "first-page") {
    return (
      <div className="container">
        <h2>Login is required.</h2>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
      </div>
    );
  } else if (page === "login") {
    return (
      <div className="container">
        <h2>Welcome to login page</h2>
        <button onClick={() => setPage("first-page")}>Back</button>
      </div>
    );
  } else if (page === "register") {
    return (
      <div className="container">
        <h2>Register Form</h2>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button onClick={() => setPage("first-page")}>Register</button>
      </div>
    );
  }
}

export default LogReg;
