import "./new.scss"
import React from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import {userRows} from "../../datatablesource"


export default function New(props){
    const navigate = useNavigate();
    const [file,setFile] = React.useState("");
    const [formData, setFormData] = React.useState({
            FullName: "", 
            Phone: "", 
            Address: "",
            Email: "",
            Photo: file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",

        }
    )
    
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault();
        props.rowAdder(
            (userRows.length + 1).toString(),
            formData.FullName ? formData.FullName: "",
            formData.Photo ? formData.Photo: "",
            formData.Email ? formData.Email: "",
            true
        );
        navigate('/users');
    }
    
    return(
        <div className = "new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img className = "img" src={
                            file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right"> 
                        <form>
                            <div className="formInput">
                                <label htmlFor = "file">
                                  <div className="car">Image: </div>  
                                  <DriveFolderUploadOutlinedIcon className = "icon"/></label>
                                <input type="file" id = "file" onChange = {(e)=>setFile(e.target.files[0])}style = {{display: "none"}}/>
                            </div>

                            <div className="formInput"> <label>Name and Surname</label>
                                <input type="text" placeholder="John Doe" onChange={handleChange}
                                name="FullName" value={formData.FulllName}/>
                            </div>

                            <div className="formInput"> <label>Phone</label>
                            <input type="text" placeholder="+1 234 567 89" onChange={handleChange}
                                name="Phone" value={formData.Phone}/>
                            </div>

                            <div className="formInput"> <label>Address</label>
                            <input type="text" placeholder="Elton St. 216 New York" onChange={handleChange}
                                name="Address" value={formData.Address}/>
                            </div>

                            <div className="formInput"> <label>Username</label>
                            <input type="text" placeholder="john_doe"/>
                            </div>

                            <div className="formInput"> <label>Email</label>
                            <input type="text" placeholder="john_doe@gmail.com" onChange={handleChange}
                                name="Email" value={formData.Email}/>
                            </div>

                            <div className="formInput"><label>Password</label>
                            <input type="text" placeholder=""/>
                            </div>

                            <div className="formInput"><label>Country</label>
                            <input type="text" placeholder="USA"/></div>

                        <button  onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}