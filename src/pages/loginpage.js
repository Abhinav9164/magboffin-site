import React from "react";
import TopNavbar from "../components/LandingPage/TopNavbar";
import Login from "../components/Login";
import Contactdetails from "../components/LandingPage/Contactdetails";

function landingpage() {
  return (
    <div className="loginpage">
      <TopNavbar />
      <Login />
      <Contactdetails />
    </div>
  );
}

export default landingpage;
