import React from 'react'
import TopNavbar from "../components/LandingPage/TopNavbar"
import Contactdetails from "../components/LandingPage/Contactdetails"
import Magazin from '../components/magazine/Magazin'

export default function magazine() {
    return (
       <>
        <TopNavbar/>
         <Magazin/>
         <Contactdetails/>
       </>
    );
}
