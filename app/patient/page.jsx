// pages/patient-signin.js
import React from "react";

export default function PatientSignIn() {
  return (
    <div className="container">
      <div className="flex gap-4 justify-center bg-slate-300 rounded-md py-2 items-center">
        <div className=" text-blue-700 font-medium p-4 cursor-pointer">
          <a href="/signin">Doctor Sign-In</a>
        </div>
        <div className="  bg-white p-4 rounded-lg cursor-pointer">
          Patient Sign-In
        </div>
      </div>
      <form action="/patient-login" method="POST">
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
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" min="1" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" name="weight" min="1" required />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" name="height" min="1" required />
        </div>
        <div className="form-group">
          <label htmlFor="health_issues">Health Issues:</label>
          <textarea
            id="health_issues"
            name="health_issues"
            rows="3"
            placeholder="Briefly describe your health concerns"
          ></textarea>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
