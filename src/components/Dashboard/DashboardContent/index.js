import React from 'react'
import Posts from "../Blogposts"
import Ad1 from "../../../assets/images/Ad1.png"
import Ad2 from "../../../assets/images/Ad2.png"

function index() {
    return (
        <>
            <div class="col-12 col-sm-12 col-md-8">
                <span class="tag">#posts #techmagazine #welcomeback</span>
                <Posts />
                <Posts />
                <Posts />
            </div>
            <div class="col-12 col-sm-12 col-md-4 text-center">
                <img src={Ad2} class="img img-fluid" alt="Ad" width="300px" height="300px" />
                <img src={Ad1} class="img img-fluid" alt="Ad" width="300px" height="300px" />
            </div>
            <div class="col-12 bottom-bar d-xm-block d-md-none">
                <div>
                    <ul class="text-center">
                        <li class=""><a href="#"><button type="button" class="btn botton-btn subscribe">subscribe</button></a></li>
                        <li class=""><a href="#"><button type="button" class="btn botton-btn mr-shelf">My shelf</button></a></li>
                        <li class=""><a href="#"><button type="button" class="btn botton-btn mr-shelf">Bookmark</button></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default index
