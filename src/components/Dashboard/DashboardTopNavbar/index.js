import React, { useContext } from 'react'
import UserIcon from "../../../assets/icons/Usericon.png"
import { DataContext } from "../../../context/reducer"
import { LOG_OUT } from "../../../context/types"


function DashboardTopNavbar() {
    const [state, dispatch] = useContext(DataContext);

    const handleLogout = () => {
        dispatch({
            type: LOG_OUT,
            payload: null
        })
    }

    return (
        <nav className="navbar nav navbar-expand-sm nav-color navbar-dark">
            <div className="container-fluid">
                <a className=" navbar-brand d-block d-md-none" href="/"><span>Magboffin</span></a>
                <ul className=" navbar-nav justify-content-end ml-auto desktop-nav">
                    <li className="nav-item">
                        <div className="dropedown btn-group">
                            <button className="btn drope dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">catogory</button>
                            <input type="text" className="search" placeholder="&#xF002; Search"
                                style={{ fontFamily: "Arial, FontAwesome" }} />
                            <div className="dropdown-menu dropdown-primary">
                                <a className="dropdown-item" href="#">IOT</a>
                                <a className="dropdown-item" href="#">Artifitial inteligence</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a href="/subscribe"><button type="button" className="btn nav-btn subscribe">subscribe</button></a></li>
                    <li className="nav-item"><a href="/shelf"><button type="button" className="btn nav-btn mr-shelf">My shelf</button></a></li>
                    <li className="nav-item "><a href=""></a><i className="fas fa-bell bell"></i></li>
                    <li className="nav-item "><a href=""></a><img src={UserIcon} className="account" alt="User" /></li>
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v menu" aria-hidden="true"></i></a>
                        <div className="dropdown-menu dropdown-with-icons">
                            <a href="/profile" className="dropdown-item">my profile</a>
                            <a href="" className="dropdown-item">My categories</a>
                            <a href="/setting" className="dropdown-item">settings</a>
                            <a onClick={handleLogout} style={{ cursor: "pointer" }} className="dropdown-item">Logout</a>
                        </div>
                    </li>
                </ul>
                <ul className="phone-nav d-xm-block d-md-none">
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><img src={UserIcon} className="account-icon img-fluid" alt="User" /></a>
                        <div className="dropdown-menu ">
                            <a href="/profile" className="dropdown-item">my profile</a>
                            <a href="" className="dropdown-item">My categories</a>
                            <a href="/setting" className="dropdown-item">settings</a>
                            <a onClick={handleLogout} style={{ cursor: "pointer" }} className="dropdown-item">Logout</a>
                        </div>
                    </li>
                    <li className="nav-item"><i className="fas fa-search icon-search"></i></li>
                    <li className="nav-item "><a href="#"></a><i className="fas fa-bell bell-icon"></i></li>
                </ul>
            </div>
        </nav>
    )
}

export default DashboardTopNavbar
