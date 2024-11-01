// pages/dashboard.js
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <header>Doctor Dashboard</header>
      <nav className="nav-bar">
        <a href="#">Home</a>
        <div className="dropdown">
          <a href="#">Patients</a>
          <div className="dropdown-content">
            <a href="#">Patient Records</a>
            <a href="#">Appointments</a>
            <a href="#">Prescriptions</a>
          </div>
        </div>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </nav>
      <section className="dashboard">
        <h2>Today&apos;s Appointments</h2>{" "}
        {/* Corrected unescaped single quote */}
        {/* Appointment cards */}
        <div className="card">
          <h3>Patient Appointments</h3>
          <div className="appointment">
            <strong>Patient Name:</strong> John Doe
            <br />
            <strong>Time:</strong> 10:00 AM
            <br />
            <strong>Issue:</strong> Chest Pain
          </div>
          {/* Add more appointments */}
        </div>
      </section>
      {/* Chat modal and scripts go here */}
      <footer>&copy; 2024 HealthCare | Privacy Policy | Terms | Contact</footer>
    </div>
  );
}
