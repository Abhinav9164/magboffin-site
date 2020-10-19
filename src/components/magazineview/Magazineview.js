import React from 'react'
import "./magazineview.css"
import $ from "jquery";
const Magazineview = () => {


    return (
        <>
            <section className="info" id="info">
                <div className="container">
                    <div className=" shadow">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={require("../../assets/images/book2/1.jpg")} className="w-100 book-1" />
                            </div>
                            <div className="col-md-7 mt-3 ">
                                <h3 className="text-dark" id="title">COMPANY PROFILE</h3>
                                <p id="author" className="d-inline">Bilkis Ismail</p>
                                <p id="date" className="d-inline">26 April 2019</p>
                                <p id="size"><i className="fas fa-file "></i> File Size <b>1MB</b></p>
                                {/* <!-- Button --> */}
                                <div className="button">
                                    <a id="read" className="btn btn-primary mt-2 text-white mx-2">Baca PDF  <i className="fas fa-book-reader fa-lg"></i></a>
                                    <a href="pdf/pdf.pdf" className="btn btn-primary mt-2 text-white" download>Unduh PDF <i className="fas fa-download fa-lg"></i></a>
                                </div>
                                {/* <!-- Description --> */}
                                <p id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quo velit consequuntur, iste, impedit dignissimos vitae nesciunt et commodi quos quis iusto est iure tenetur eum amet quas temporibus esse praesentium incidunt sequi ratione. Fuga ab quas itaque enim, molestiae, totam, necessitatibus magni dolores eligendi obcaecati libero omnis iste. Facilis.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Magazineview;