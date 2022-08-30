import "./single.scss"
import React from "react"
import { useLocation } from 'react-router-dom';
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Lists from "../../components/table/Table";
import {extra} from "../../extrasource";


export default function Single(){
    
    const values = useLocation().state
    const value = !values ? {
        id: 1,
        username: "Jane Doe", 
        email: "janedoe@gmail.com",
    }: values;
    const num = value.id;

    
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            Edit
                        </div>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">{value.username}</h1>
                                <div className="detailItem"><span className="itemKey">Email:</span> 
                                <span className="itemValue">{value.email}</span>
                                </div>

                                <div className="detailItem"><span className="itemKey">Phone:</span> 
                                <span className="itemValue">{extra[0][num].phone ? extra[0][num].phone: ""}</span>
                                </div>

                                <div className="detailItem"><span className="itemKey">Address:</span>
                                <span className="itemValue">{extra[0][num].address ? extra[0][num].address: ""}</span>
                                </div>
                                
                                <div className="detailItem"><span className="itemKey">Country:</span>
                                 <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect = {3.5/1} title = "User Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className = "title">Last Transactions</h1>
                    <Lists/>
                </div>
            </div>
        </div>
    );
}