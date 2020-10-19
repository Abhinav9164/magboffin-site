import React from 'react'
import DashboardSidebar from "../components/Dashboard/DashboardSidebar"
import DashboardTopNavbar from "../components/Dashboard/DashboardTopNavbar"
import DashboardContent from "../components/Dashboard/DashboardContent"
import "../styles/dashboard.css"

function dashboardpage() {
    return (
        <div style={{ backgroundColor: "#131111", width: "100%" }}>
            <div className="wrapper container">
                <DashboardSidebar />
                <div className="main_contents">
                    <div className="row">
                        <DashboardTopNavbar />
                    </div>
                    <div className="col-12 ">
                        <div className="row row-content">
                            <DashboardContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboardpage
