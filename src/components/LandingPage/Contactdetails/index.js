import React from 'react';

function index() {
    return (
        <>
            <footer className="lastcontainer">
                <div className=" bg-footer">
                    <div className="row row-content">
                        <div className="col-12 text-center">
                            <div className="logo03">
                                <h1 className="logo02">Magboffin</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 order-sm-last text-center">
                            <div className="">
                                <a href="#"><i className="social-icon fab fa-facebook-f "></i></a>
                                <a href="#"><i className="social-icon fab fa-twitter"></i></a>
                                <a href="#"><i className="social-icon fab fa-instagram"></i></a>
                                <a href="#"><i className="social-icon fas fa-envelope"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 order-sm-last">
                            <div className="text-right">
                                <h4>Contact:</h4>
                                <address>
                                    (+91) 9871105998<br />
                            contact@magboffin.com<br />
                            Gurugram, Haryana, India - 122005
                        </address>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6"></div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12 text-center">
                            <span className="copyright">© 2020 Magboffin. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default index;
