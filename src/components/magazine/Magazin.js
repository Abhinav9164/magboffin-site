import React from 'react'


import "./magazin.css"
import Magazin1 from './Magazin1';

const Magazin = () => {
    return (
        <>

            <br /><br /><br /><br /><br /><br />

            <div className="bookshelf">
                <Magazin1 />

                <img src={require("../../assets/images/shelf_wood.png")} className="shelf-img" />
            </div>
            <br />
            <div className="bookshelf">
                <Magazin1 />
                <img src={require("../../assets/images/shelf_glass.png")} className="shelf-img" />
            </div>
            <div className="bookshelf">
                <Magazin1 />
                <img src={require("../../assets/images/shelf_metal.png")} className="shelf-img" />
            </div>
            {/* <-- pagination --> */}
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
}
export default Magazin;