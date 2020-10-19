import React from 'react'
import "./flipnav.css"
function Flipnav() {
    return (
        <div>
            <div class="containerf">
                <section class="social-iconsf">

                    <div class="flip-containerf" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="frontf">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                            </div>
                            <div class="backf" id="facebook">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="flip-containerf" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="frontf">
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                            </div>
                            <div class="backf" id="google-plus">
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="flip-containerf" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="frontf">
                                <a href="https://twitter.com/ChaiLieb"><i class="fa fa-twitter"></i></a>
                            </div>
                            <div class="backf" id="twitter">
                                <a href="https://twitter.com/ChaiLieb"><i class="fa fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="flip-containerf" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="frontf">
                                <a href="#"><i class="fas fa-download"></i></a>
                            </div>
                            <div class="backf" id="tumblr">
                                <a href="#"><i class="fas fa-download"></i></a>
                            </div>
                        </div>
                    </div>

                   

                    <div class="flip-containerf" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="frontf">
                                <a href="https://www.linkedin.com/in/hannahfreimark/"><i class="fa fa-linkedin"></i></a>
                            </div>
                            <div class="backf" id="linkedin">
                                <a href="https://www.linkedin.com/in/hannahfreimark/"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="flip-containerf" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="frontf">
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="backf" id="pinterest">
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <a href="#" class="close" />
            </div>
        </div>
    )
}

export default Flipnav
