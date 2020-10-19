import React from 'react'

function index() {
    return (
        <div className="sidebar" >
            <a href="/" ><h1 className="logo" >Magboffin</h1></a>
            <hr className="line" />
            <ul>
                <li><a href="#"><i className="fas fa-user"></i>@DIVYA 24</a></li>
                <li><a href="#"><i className="fas fa-bookmark"></i>BOOKMARK</a></li>
            </ul>
        </div>
    )
}

export default index
