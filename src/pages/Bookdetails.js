import React from 'react'
import "../styles/Books.css"
import "../assets/css/flipbook.style.css"
import "../assets/css/font-awesome.css"
import "../assets/css/footer.css"
import $ from "jquery";

function Bookdetails() {
  

    return (
        <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
            <nav class="navbar" >
                <div class="container-fluid">
                    <a href="/books"><i class="fas fa-angle-left back-arrow"></i></a>
                </div>
            </nav>
            <div>
                <div class="container">
                    <div class="row" >
                        <div class="col-12">
                            <div class="media">
                                <img src={require("../assets/images/shelf-1.png")} class="d-flex ml-3 align-self-center book" alt="buffet" />
                                <div class="media-body">
                                    <h2>So you wanna download <br />ebook?</h2>
                                    <button class="btn read-btn" id="read" type="button">Read Online</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-content">
                        <div class="col-12 col-sm-12 col-md-8 offset-md-2">
                            <h2>About the Book</h2>
                            <p class="about-book">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookdetails
