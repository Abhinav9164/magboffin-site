import React from "react";
import TopNavbar from "../components/LandingPage/TopNavbar"
import InitialView from "../components/LandingPage/InitialView"
import Categories from "../components/LandingPage/Categories"
import SamplesView from "../components/LandingPage/SamplesView"
import Contactdetails from "../components/LandingPage/Contactdetails"


function landingpage() {
  return (
    <div>

      <header className="jumbotron">
        <div className="bg">
          <TopNavbar />
          <InitialView />
        </div>
      </header>
      <div className="container middlecontainer01">
        <div className="row row-content">
          <div className="col-12 col-sm-12">
            <div className="text-center">
              <p className="letus">Let us know your interest.</p>
            </div>
          </div>
        </div>
        <Categories />
      </div>
      <SamplesView />
      <Contactdetails />
    </div>
  );
}

export default landingpage;
