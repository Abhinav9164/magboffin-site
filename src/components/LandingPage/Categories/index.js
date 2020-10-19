import React from 'react';
// import "./styles"

function index() {
    return (
        <>
            <div className="row">
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn1 btn btns btn-primary" href="#" role="button"><h4 className="text01 texts">A.I / ML</h4></a>
                </div>
                <div className="col-6 col-sm-3 text-center ">
                    <a className=" common btn2 btn btns btn-primary" href="#" role="button"><h4 className="text02 texts">Data <br /> Science</h4></a>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn3 btn btns btn-primary" href="#" role="button"><h4 className="text03 texts">Robotics</h4></a>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn4 btn btns btn-primary" href="#" role="button"><h4 className="text04 texts">Cloud <br /> Computing</h4></a>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn5 btn btns btn-primary" href="#" role="button"><h4 className="text05 texts">Nano <br />Tech</h4></a>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn6 btn btns btn-primary" href="#" role="button"><h4 className="text06 texts">Animation</h4></a>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn7 btn btns btn-primary" href="#" role="button"><h4 className="text07 texts">I.O.T</h4></a>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <a className=" common btn8 btn btns btn-primary" href="#" role="button"><h4 className="text08 texts">Cyber <br /> Security</h4></a>
                </div>
            </div>
        </>
    );
}

export default index;
