import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./order.scss"

export default function Order(){
    return(
        <div className = "view">
        <Sidebar/>
        <div className="viewContainer">
            <Navbar/>
            <h1 className="coming">Coming Soon</h1>
        </div>
        </div>
    )
    
}