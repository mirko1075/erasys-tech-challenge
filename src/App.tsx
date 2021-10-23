import React from "react";
import Header from "./components/header";
import UserCards from "./components/userCards";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <UserCards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
