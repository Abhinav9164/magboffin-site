import React, { Component } from 'react'
import './navbar.css'
import { DataContext } from "../../context/reducer"
import { LOG_OUT } from "../../context/types"


class navbar extends Component {

  static contextType = DataContext

  handleLogout = () => {
    const [state, dispatch] = this.context;
    dispatch({
      type: LOG_OUT,
      payload: null
    })
  }

  render() {

    return (
      <nav class="navbar nav navbar-expand-sm nav-color navbar-dark bg-nav fixed-top">
        <div class="container">
          <a class="logo navbar-brand" href="/"><span style={{ color: "white" }}>Magboffin</span></a>
          <ul class=" navbar-nav justify-content-end ml-auto desktop-nav ">
            <li class="nav-item">
              <div class="dropedown btn-group"><button class="btn drope dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >catogory</button><input type="text" class="search" placeholder="&#xF002; Search" style={{ fontFamily: "Arial, FontAwesome" }} />
                <div class="dropdown-menu dropdown-primary">
                  <a class="dropdown-item" hrefs="#">IOT</a>
                  <a class="dropdown-item" href="#">Artifitial inteligence</a>
                </div>
              </div>
            </li>
            <li class="nav-item"><a href="/subscribe"><button type="button" class="btn nav-btn subscribe">subscribe</button></a></li>
            <li class="nav-item"><a href="/shelf"><button type="button" class="btn nav-btn mr-shelf">My shelf</button></a></li>
            <li class="nav-item "><a href=""></a><i class="fas fa-bell bell"></i></li>
            <li class="nav-item "><a href="" /><img src={require("../../assets/icons/Usericon.png")} class="account" alt="" /></li>
            <li class="dropdown nav-item">
              <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v menu" aria-hidden="true"></i>
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a href="/profile" class="dropdown-item">my profile
                              </a>

                <a href="" class="dropdown-item">My categories
                              </a>
                <a href="/setting" class="dropdown-item">settings
                              </a>
                <a onClick={this.handleLogout} style={{ cursor: "pointer" }} class="dropdown-item">Logout
                            </a>
              </div>
            </li>
          </ul>
          <ul class="phone-nav d-xm-block d-md-none list-unstyled">
            <li class="dropdown nav-item">
              <a href="/" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" /><img src={require("../../assets/icons/Usericon.png")} class="account-icon img-fluid" alt="" />

              <div class="dropdown-menu ">
                <a href="/profile" class="dropdown-item">my profile
                              </a>

                <a href="" class="dropdown-item">My categories
                              </a>
                <a href="/setting" class="dropdown-item">settings
                              </a>
                <a onClick={this.handleLogout} style={{ cursor: "pointer" }} class="dropdown-item">Logout
                            </a>
              </div>
            </li>
            <li class="dropdown nav-item ">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" /><i class="fas fa-cog settings-icon"></i>
              </a>
              <div class="dropdown-menu ">
                <a href="" class="dropdown-item">About
                              </a>

                <a href="" class="dropdown-item">Clients
                              </a>
                <a href="" class="dropdown-item">Services
                              </a>
                <a href="" class="dropdown-item">Contact
                            </a>
              </div>
            </li>
            <li class="nav-item"><i class="fas fa-search icon-search"></i></li>
            <li class="nav-item "><a href="#" /><i class="fas fa-bell bell-icon"></i></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default navbar;