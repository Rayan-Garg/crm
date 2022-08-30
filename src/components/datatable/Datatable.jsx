import "./datatable.scss";
import { DataGrid} from '@mui/x-data-grid';
import {userColumns, userRows,userExtra} from "../../datatablesource"
import { Link } from "react-router-dom";
import React from "react";


export default function Datatable(props){
  const addedRow= [
    {
      id: props.id ? props.id: 1,
      username: props.username ? props.username: "Snow",
      img: props.img ? props.img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: props.email ? props.email: "1snow@gmail.com",
      age: "-",
    }]
    

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <Link to= "/users/test" state= {{
                id: params.row.id,
                username: params.row.username ? params.row.username: "", 
                email: params.row.email ? params.row.email: ""
              }} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
              </Link>
            <div className="deleteButton"> Delete </div>
          </div>
        );
      },
    },
  ];
  
    return(
        <div className="datatable">
          <div className="datatableTitle">
            User List
          <Link to="/users/new" style={{ textDecoration: "none" }} className = "link">
            Add New
          </Link>
          </div>
            <DataGrid
                rows={userRows.concat(addedRow)}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

