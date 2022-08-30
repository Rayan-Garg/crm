import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Lists from "../../components/table/Table";

export default function Home(){
    return(
        <div className = "home">
            <Sidebar/>
            <div className = "homeContainer">
                <div className="top">
                <Navbar />
                </div>
            <div className="widgets">
                <Widget type = "user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div>
            <div className="charts">
                <Featured/>
                <Chart title = "Last 6 Months (Revenue)" aspect = {2/1}/>
            </div>
            <div className="listContainer">
                <div className="listTitle">
                    Latest Transactions
                </div>
                <Lists/>
            </div>
            </div>
        </div>
    )
}