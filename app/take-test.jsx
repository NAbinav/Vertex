// pages/take-test.js
import React from "react";

export default function TakeTest() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">Doctato</div>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="#profile">Profile</a>
          <button className="logout">
            <a href="/signin">Logout</a>
          </button>
        </nav>
      </header>

      {/* Intro Section */}
      <section className="intro">
        <h1>Take a Medical Test</h1>
        <p>
          Choose from a variety of tests below. Each test provides detailed
          instructions and real-time results once completed.
        </p>
      </section>

      {/* Test Options Section */}
      <section className="test-options">
        <div className="test-category">
          <h2>IoT-Based Hardware Tests</h2>
          <div className="test-card">
            <div className="icon">🩺</div>
            <h3>Lung Capacity Test</h3>
            <p>Check your lung capacity with accurate hardware support.</p>
            <button className="start-test">Start Test</button>
          </div>
          <div className="test-card">
            <div className="icon">❤️</div>
            <h3>Pulse and O2 Monitoring</h3>
            <p>Monitor your oxygen levels and pulse rate with IoT sensors.</p>
            <button className="start-test">Start Test</button>
          </div>
        </div>
        <div className="test-category">
          <h2>ML Models</h2>
          <div className="test-card">
            <div className="icon">🌿</div>
            <h3>Skin Disease Detection</h3>
            <p>Analyze skin for potential diseases using AI algorithms.</p>
            <button className="start-test">Start Test</button>
          </div>
          <div className="test-card">
            <div className="icon">👤</div>
            <h3>Face Skin Analysis</h3>
            <p>
              Detect acne and other conditions through facial skin analysis.
            </p>
            <button className="start-test">Start Test</button>
          </div>
        </div>
      </section>

      {/* Real-Time Results Section */}
      <section className="real-time-results">
        <div className="result-card">
          <h3>Oxygen Level</h3>
          <p>95%</p>
        </div>
        <div className="result-card">
          <h3>Pulse Rate</h3>
          <p>80 BPM</p>
        </div>
      </section>

      {/* Test History Section */}
      <section className="test-history">
        <h2>Previous Test Results</h2>
        <div className="history-card">
          <p>Test Date: 10/25/2024</p>
          <p>Oxygen Level: 95%</p>
          <p>Pulse Rate: 78 BPM</p>
          <button>Download PDF</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; 2024 Doctato | <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#terms">Terms</a> | <a href="#contact">Contact</a>
        </p>
      </footer>
    </div>
  );
}
