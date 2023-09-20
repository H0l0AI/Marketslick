import React from "react";
import { Link } from "react-router-dom";
import webgunLogo from "../images/webgunLogo.jpg";
import { BsInputCursorText } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";


const LoginPage = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      className="LandingPage-Container"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        backgroundImage: `radial-gradient(circle at 0 0,#ff6600bb 0,rgba(95,213,182,0) 30%),linear-gradient(180deg,#ff660063 -10%,rgba(121,223,255,0) 70%),radial-gradient(circle at 95% 0,#ff6600 0,rgba(95,213,182,0) 20%)`,
      }}
    >
      <div
        className="LandingPage-Wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <img
            src={webgunLogo}
            style={{ width: isMobile ? "20%" : "7%", borderRadius: "50%" }}
          />
          <h1 style={{ fontSize: isMobile ? "25px" : "40px" }}>WebGun</h1>
        </div>
        <h1
          style={{
            fontSize: isMobile ? "40px" : "60px",
            textAlign: "center",
            margin: 0,
          }}
        >
          Get your business online for {isMobile ? " " : <br />} only
          $9 per week
        </h1>
        <p style={{ fontSize: "22px", textAlign: "center", marginTop: "40px" }}>
          Take your business to the lext level. Simply input your information
          and in less than a minute <br />
          your website is complete!
        </p>
        <button
          style={{
              color:'black',
            marginTop: "40px",
            border: "2px solid #ff6600",
            width: '15rem',
            height: "50px",
            borderRadius: "30px",
            background: "transparent",
            cursor: "pointer",
            fontSize: "1.3rem",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#ff66003b")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
          onClick={() => {
            window.location.href = "/builder";
          }}
        >
          Start Building Now!
        </button>
        <img
          src={webgunLogo}
          style={{
            width: isMobile ? "50%" : "20%",
            margin: "50px",
            borderRadius: "50%",
          }}
        />
        <div
          className="3-step-process"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "25px" : "50px",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            width: "100%",
          }}
        >
          <div
            className="step-1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              height: "100%",
              // border: "2px solid  #ff6600",
            }}
          >
            {" "}
            <BsInputCursorText size={60} color={"#cb5b43"} />
            <h3>1. Input all the information.</h3>
            <p>
              Simply input all the information about your business through out
              builder tool.{" "}
            </p>
          </div>
          <div
            className="step-1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              height: "100%",
              // border: "2px solid  #ff6600",
            }}
          >
            <CgWebsite size={60} color={"#cb5b43"} />
            <h3>2. Website gets created.</h3>
            <p>
              Your website gets created in less than a minute right before your
              eyes.
            </p>
          </div>
          <div
            className="step-1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              height: "100%",
              // border: "2px solid  #ff6600",
            }}
          >
            <BsCartCheck size={60} color={"#cb5b43"} />
            <h3>3. Revise and Subscribe.</h3>
            <p>
              Finally subscribe to our affordable $9/week plan and watch
              your business thrive online.
            </p>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid #ff6600",
            width: "90%",
            marginTop: "50px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
