import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Datatable from "../../components/datatable/Datatable";
import "./list.scss";

export default function List(props) {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable id = {props.rowHold.id} username = {props.rowHold.username}  img = {props.rowHold.img}  
                email  = {props.rowHold.email}/>
            </div>
        </div>
    )
}