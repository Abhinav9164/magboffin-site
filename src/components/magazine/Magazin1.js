import React from 'react'
import "./magazin.css"



const Magazin1 = () => {
    return (
        <>
            <div className="covers">
                <div className="thumb book-1">
                    <a to="./home2">
                        <img src={require("../../assets/images/book2/1.jpg")}/>
                    </a>
                </div>
                <div className="thumb book-1">
                    <a to="./vpdf">
                        <img src={require("../../assets/images/book2/1.jpg")}/>
                    </a>
                </div>
                <div className="thumb book-1">
                    <a to="./vpdf">
                        <img src={require("../../assets/images/book2/1.jpg")} />
                    </a>
                </div>
                <div className="thumb book-1">
                    <a to="./vpdf">
                        <img src={require("../../assets/images/book2/1.jpg")} />
                    </a>
                </div>
                <div className="thumb book-1">
                    <a to="./vpdf">
                        <img src={require("../../assets/images/book2/1.jpg")} />
                    </a>
                </div>
            </div>
        </>
    );
}
export default Magazin1;