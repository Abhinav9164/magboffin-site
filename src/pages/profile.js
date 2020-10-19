import React from 'react';
import '../styles/profile.css';
import Navbar from '../components/profile-nav/navbar'


function profile() {
    return (
        <div style={{ backgroundColor: "#202533", width: "100%", height: "100vh" }}>
            <Navbar />
            <div class="page-header"></div>
            <div class="container">
                <div class="main main-raised ">
                    <div class="profile-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 mr-auto ml-auto text-center">
                                    <div class="profile">
                                        <div class="image">
                                            <img src={require("../assets/icons/Usericon.png")} alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                                            <button type="button" class="btn btn-edit">Edit profile</button>
                                        </div>

                                        <div class="name">
                                            <h3 class="title user-name">divya 24</h3>
                                            <h6 class="bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                            <ul class="list-unstyled list text-center align-self-center">
                                                <li><a href="" class="btn btn-just-icon btn-link btn-dribbble"><i class="fas fa-map-marker"></i> kerala,india</a></li>
                                                <li><a href="" class="btn btn-just-icon btn-link btn-dribbble"><i class="fas fa-birthday-cake"></i> 11-04-2000</a></li>

                                            </ul>
                                            <div class="row content">
                                                <div class="email col-12 col-sm-6">
                                                    <span>Email</span>
                                                    <h6 class="email">abc@gmail.com</h6>
                                                </div>

                                                <div class="designation col-12 col-sm-6">
                                                    <span>Designation</span>
                                                    <h6 class="designation">Student</h6>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer class="lastcontainer footercolor">
                <div class="container ">
                    <div class="row row-content">
                        <div class="col-12 text-center">
                            <div class="logo03">
                                <h1 class="logo02">Magboffin</h1>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6 order-sm-last text-center">
                            <div class="">
                                <a href="#"><i class="social-icon fab fa-facebook-f "></i></a>
                                <a href="#"><i class="social-icon fab fa-twitter"></i></a>
                                <a href="#"><i class="social-icon fab fa-instagram"></i></a>
                                <a href="#"><i class="social-icon fas fa-envelope"></i></a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6"></div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6 order-sm-last">
                            <div class="text-right">
                                <h4>Contavt:</h4>
                                <address>
                                    (+91) 9871105998<br />
                                contact@magboffin.com <br />
                                Gurugram, Haryana, India - 122005
                            </address>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6"></div>
                    </div>
                    <div class="row row-content">
                        <div class="col-12 text-center">
                            <span class="copyright">© 2020 Magboffin. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default profile;