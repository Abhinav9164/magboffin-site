import React from 'react';
import '../styles/Books.css';
import Sidebar from '../components/Dashboard/DashboardSidebar';
import Navbar from '../components/Dashboard/DashboardTopNavbar';
import Book1 from '../components/books/Book1.js';
import Book2 from '../components/books/Book2.js';
import Book3 from '../components/books/Book3.js';
import Book4 from '../components/books/Book4.js';




function Books() {
    return (
        <div style={{backgroundColor:"black",width:"100%",height:"100vh"}}>
            <div class="wrapper container">
                <Sidebar />
                <div class="main_content">
                    <div class="row">
                        <Navbar />
                        <div class="col-12">
                            <div class="row row-content">
                                <div class="col-sm-12 col-md-12">
                                    <div class="row row-content">
                                        <div class="col-12 text-center">
                                            <h2>ARTIFICIAL INTELLIGENCE</h2>
                                        </div>
                                        <div class="col-12">
                                            <div class="bookshelf">
                                                <div class="covers ">
                                                    <Book1 />
                                                    <Book2 />
                                                    <Book3 />
                                                    <Book4 />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="bookshelf">
                                                <div class="covers">
                                                    <Book1 />
                                                    <Book2 />
                                                    <Book3 />
                                                    <Book4 />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 bottom-bar d-xm-block d-md-none">
                                    <div class="">
                                        <ul class="">
                                            <li class=""><a href="#"><button type="button" class="btn botton-btn subscribe">subscribe</button></a></li>
                                            <li class=""><a href="#"><button type="button" class="btn botton-btn mr-shelf">My shelf</button></a></li>
                                            <li class=""><a href="#"><button type="button" class="btn botton-btn mr-shelf">Bookmark</button></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Books;
