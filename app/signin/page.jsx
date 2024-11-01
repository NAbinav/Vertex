// pages/signin.js
import React from "react";

export default function SignIn() {
  return (
    <div className="container">
      <div className="flex gap-4 justify-center bg-slate-300 rounded-md py-2 items-center">
        <div className="  bg-white p-4 rounded-lg cursor-pointer">
          Doctor Sign-In
        </div>
        <div className=" text-blue-700 font-medium p-4 cursor-pointer">
          <a href="/patient">Patient Sign-In</a>
        </div>
      </div>
      <form action="/doctor-login" method="POST">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">Specialization:</label>
          <select id="specialization" name="specialization" required>
            <option value="">Select Specialization</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="General Medicine">General Medicine</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Years of Experience:</label>
          <input
            type="number"
            id="experience"
            name="experience"
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workplace">Workplace:</label>
          <input
            type="text"
            id="workplace"
            name="workplace"
            placeholder="e.g., Hospital/Clinic Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualifications">Qualifications:</label>
          <textarea
            id="qualifications"
            name="qualifications"
            rows="2"
            placeholder="e.g., MD, PhD, etc."
            required
          ></textarea>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
