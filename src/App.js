import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/Navbar";
import { HomePage } from "./Components/Home";
import { Buyproducts } from "./Components/BuyProducts";
import MembersGrid from "./Components/Members";
import Sections from "./Components/Section";
import EventList from "./Components/Event";
import OrganizationEvents from "./Components/other";
import LoginPage from "./Components/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<div>Loading</div>}>
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MembersGrid />} />
            <Route path="/section" element={<Sections />} />
            <Route path="/event" element={<EventList />} />
            <Route path="/other" element={<OrganizationEvents />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
