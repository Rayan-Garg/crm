import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
import { Link } from "react-router-dom";

export default function Widget({type}){
    let data = {
        title: "User",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlinedIcon/>,
        linked: ""
    };

    const amount = 100;
    const diff = 20;

    switch (type) {
      case "user":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
          linked: "/users",
        };
        break;
        
      case "order":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
          linked: "",
        };
        break;
      case "earning":
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "View net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
          linked: "",
        };
        break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
          linked: "",
        };
        break;
      default:
        break;
    }
  
    return (
        <div className="widget">
          <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"} {amount}
            </span>
            <span className="link">
              <Link to={data.linked} style={{ color: "none", textDecoration: "none" }}>
              {data.link}
              </Link>
              </span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              {diff} %
            </div>
            {data.icon}
          </div>
        </div>
      );
}





