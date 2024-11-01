"use client";
// pages/booking.js
import React, { useState } from "react";

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Orthopedist",
    city: "Chennai",
    experience: "10 years",
    workplace: "Apollo Hospitals",
  },
  {
    name: "Dr. Meena Iyer",
    specialization: "Cardiologist",
    city: "Bangalore",
    experience: "8 years",
    workplace: "Fortis Hospital",
  },
  {
    name: "Dr. Arun Sharma",
    specialization: "Orthopedist",
    city: "Bangalore",
    experience: "12 years",
    workplace: "Manipal Hospital",
  },
  {
    name: "Dr. Lakshmi Menon",
    specialization: "Cardiologist",
    city: "Chennai",
    experience: "7 years",
    workplace: "Global Hospitals",
  },
];

export default function Booking() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  function filterDoctors() {
    const city = document.getElementById("city").value;
    const specialization = document.getElementById("specialization").value;

    setFilteredDoctors(
      doctors.filter(
        (doctor) =>
          (!city || doctor.city === city) &&
          (!specialization || doctor.specialization === specialization)
      )
    );
  }

  return (
    <div>
      <header className="header">
        <h1>Doctato</h1>
        <a href="dashboard">Back to Home</a>
      </header>
      <div className="container">
        <h2>Book an Appointment</h2>
        <div className="filter-bar">
          <select id="city" onChange={filterDoctors}>
            <option value="">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <select id="specialization" onChange={filterDoctors}>
            <option value="">Select Specialization</option>
            <option value="Orthopedist">Orthopedist</option>
            <option value="Cardiologist">Cardiologist</option>
          </select>
        </div>
        <div id="doctor-list" className="doctor-list">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p>Specialization: {doctor.specialization}</p>
                  <p>City: {doctor.city}</p>
                  <p>Experience: {doctor.experience}</p>
                  <p>Workplace: {doctor.workplace}</p>
                </div>
                <div>
                  <button className="profile-button">View Profile</button>
                  <button className="book-button">Book Appointment</button>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors found for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}
