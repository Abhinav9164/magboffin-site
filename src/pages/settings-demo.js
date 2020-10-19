import React from "react";
import "../styles/settings-demo.css";
import Navbar from "../components/Dashboard/DashboardTopNavbar";

function Settings() {
  return (
    <div className="body">
      <div class="wrapper container">
        <div class="sidebar ">
          <a href="/">
            <h1 class="logo" >Magboffin</h1>
          </a>
          <hr class="line" />
          <ul>
            <li class="actives">
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="main_content ">
          <div class="row">
            <Navbar />
            <div class="col-12 col-sm-12">
              <div class="row row-content">
                <div class="col-sm-12 col-md-12">
                  <div class="details container ">
                    <form class="">
                      <div class="form-group row">
                        <label for="firstname" class="col-12 col-form-label">
                          First Name
                      </label>
                        <div class="col-12">
                          <input
                            type="text"
                            class="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="lastname" class="col-12 col-form-label">
                          Last Name
                      </label>
                        <div class="col-12">
                          <input
                            type="text"
                            class="form-control"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="emailid" class="col-12 col-form-label">
                          Email
                      </label>
                        <div class="col-12">
                          <input
                            type="email"
                            class="form-control"
                            id="emailid"
                            name="emailid"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="row gender">
                        <div class="col-12">
                          <h6>Gender</h6>
                        </div>
                        <div class="col-8">
                          <select class="custom-select form-control" id="gender2">
                            <option selected></option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                          </select>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="designation" class="col-12 col-form-label">
                          Designation{" "}
                        </label>
                        <div class="col-12">
                          <input
                            type="text"
                            class="form-control"
                            id="designation"
                            name="designation"
                            placeholder="designation"
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <div class="col-12">
                          <button type="submit" class="btn btn-color">
                            submit
                        </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
