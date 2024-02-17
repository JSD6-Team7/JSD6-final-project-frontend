import React from "react";

function FitnessCTA({ headline, buttonText, link }) {
  return (
    <div
      className="cta-container"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg")' /* Proper quotes around URL */,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#45AE3A",
        display: "flex", // Enable flexbox layout
        flexDirection: "column", // Arrange items in a column
        alignItems: "center", // Center items horizontally
      }}
    >
      <h2
        style={{
          color: "white",
        }}
      >
        Fitness success starts here.
      </h2>
      <a
        href="/signup"
        className="cta-button"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "15px 25px 15px",
          border: "none",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          margin: "15px",
        }}
      >
        Sign Up Now
      </a>
    </div>
  );
}

export default FitnessCTA;
