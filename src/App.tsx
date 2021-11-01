import React from "react";
import Header from "./components/header";
import UserCards from "./components/userCards";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="container">
        <UserCards />
      </div>
    </div>
  );
}

export default App;
