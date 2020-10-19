import React from 'react';
import Asset23 from "../../../images/Asset23.svg"
import Asset28 from "../../../images/Asset28.svg"
import Image from "../../../images/4208-01-flat-bold-business-plan-template-16x9-4-870x489.jpg"
import AnimatedImage from "../../../images/other elem-01.svg"

function index() {
    return (
        <>
            <div className="container-fluid middlecontainer02">
                <img className="bg-style-1" src={Asset23} alt="" />
                <img className="bg-style-2" src={Asset23} alt="" />
                <img className="bg-style-3" src={Asset28} alt="" />
                <div className="row row-content">
                    <div className="col-12 col-sm-6 text-center">
                        <img className="comp01 comp img-fluid" src={Image} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                        <p className="about01 ">This is a major challenge</p>
                        <p className="des01">Exceptional job of visually and progressively <br />the story of their product in a simple and is <br />digest way. This is a major challenge for my <br />tups, especially when they're introducing an <br />epts to existing markets. People want it.</p>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-sm-6 text-center order-sm-last">
                        <img className="comp02 comp img-fluid" src={Image} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                        <p className="about01">This is a major challenge</p>
                        <p className="des01">Exceptional job of visually and progressively <br />the story of their product in a simple and is <br />digest way. This is a major challenge for my <br />tups, especially when they're introducing an <br />epts to existing markets. People want it.</p>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-sm-6 text-center">
                        <img className="comp03 comp img-fluid" src={Image} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                        <p className="about01 ">This is a major challenge</p>
                        <p className="des01">Exceptional job of visually and progressively <br />the story of their product in a simple and is <br />digest way. This is a major challenge for my <br />tups, especially when they're introducing an <br />epts to existing markets. People want it.</p>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-sm-6 text-center order-sm-last">
                        <img className="comp04 comp img-fluid" src={Image} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                        <p className="about01">This is a major challenge</p>
                        <p className="des01">Exceptional job of visually and progressively <br />the story of their product in a simple and is <br />digest way. This is a major challenge for my <br />tups, especially when they're introducing an <br />epts to existing markets. People want it.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="desc01">We build healthier, happier workplaces.</p>
                        <img className="objects" src={AnimatedImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default index;
