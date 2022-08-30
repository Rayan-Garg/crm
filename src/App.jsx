import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import Home from "./pages/home/Home";
import View from "./pages/view/View.jsx";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Order from './pages/order/Order';

function App() {
  let rowHold = {
    id: "",
    username: "",
    img: "",
    email: "",
  }

  function rowAdder(id, username, img, email,first){
      rowHold.id = id;
      rowHold.username = username;
      rowHold.img = img;
      rowHold.email = email;
  }
  return (
    <div className = "app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="view" element={<View/>} />
            <Route path="orders" element={<Order/>} />
            <Route path="users">
              <Route index element={<List rowHold = {rowHold}/>} />
              <Route path="test" element={<Single />} />
              <Route path="new"
                element={<New rowAdder = {rowAdder}/>}
              /> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;