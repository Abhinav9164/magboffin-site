import React from "react";
import TopNavbar from "../components/LandingPage/TopNavbar";
import Signup from "../components/Signup";
import Contactdetails from "../components/LandingPage/Contactdetails";

function landingpage() {
  return (
    <div className="loginpage">
      <TopNavbar />
      <Signup />
      <Contactdetails />
    </div >
  );
}

export default landingpage;
