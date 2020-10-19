import React from 'react'
import TopNavbar from "../components/LandingPage/TopNavbar"
import Contactdetails from "../components/LandingPage/Contactdetails"
import Magazineview from '../components/magazineview/Magazineview'

 const magazineview = () => {
    return (
       <>
         <TopNavbar/>
         <br/><b/><br/><br/><br/><br/>
         <Magazineview/>
         <br/><b/><br/><br/><br/><br/>
         <Contactdetails/>
       </>
    );
}
export default magazineview;
