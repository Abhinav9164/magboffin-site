import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DataContext } from "../../../context/reducer"
import { LOG_OUT } from "../../../context/types"

function Navbar() {
  const [state, dispatch] = useContext(DataContext);

  let location = useLocation();
  // console.log(location.pathname);

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener('scroll', handleScroll)
    }
  })

  const handleLogout = () => {
    dispatch({
      type: LOG_OUT,
      payload: null
    })
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" style={{ background: scrolled ? "linear-gradient(-32deg,#000033,#00ffff)" : location.pathname === "/" ? "transparent" : "linear-gradient(-32deg,#000033,#00ffff)" }} >
      <div className="container">
        <a className="logo navbar-brand" href="/"><span>Magboffin </span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav pull-sm-left text-center">
            {
              localStorage.getItem('userKey') ?
                null :
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">LOG IN</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">SIGN UP</a>
                  </li>
                </>
            }
            <li className="nav-item">
              <a className="nav-link" href="#cta">SUBSCRIBE</a>
            </li>
            {
              localStorage.getItem('userKey') ?
                <li className="nav-item">
                  <a className="nav-link" onClick={handleLogout} style={{ cursor: "pointer" }} >LOG OUT</a>
                </li>
                : null
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


