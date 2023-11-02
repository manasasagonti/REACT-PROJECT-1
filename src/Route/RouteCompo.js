import React from "react";

import Home from "../Components/Home";
import Bollywood from "../Components/Bollywood";
import Hollywood from "../Components/Hollywood";
import Technology from "../Components/Technology";
import Food from "../Components/Food";
import Fitness from "../Components/Fitness";
import { BrowserRouter, NavLink , Routes , Route } from "react-router-dom";
import DynamicCompo from "./DynamicCompo";
import CreateStore from "../Store/CreateStore";
import Footer from "./Footer";
import { useState } from "react";

function RouteCompo() {
    let handleNavbar = () => {
        let navName = document.querySelector(".navlinks");
        console.log(navName);
        navName.classList.toggle("activeNav");
    }
    const handleNavLink = () => {
        let navName = document.querySelector(".navlinks");
        const links = document.querySelector(".navitem");
        links.addEventListener(('click'), (e)=>{
            navName.classList.remove("activeNav");   
        })
    }
    return(
    
        <>
            <div className="main-heading">
            <h1 className="heading"><span className="rotate">The</span> Siren</h1>
             <i className="fa-solid fa-bars" onClick= {handleNavbar} ></i>  
            </div>
            <BrowserRouter >
            <div className="navlinks">
            <NavLink to='/' className="navitem" onClick={handleNavLink}  >Home </NavLink>
            <NavLink to='/Bollywood' className="navitem" onClick={handleNavLink}  >Bollywood </NavLink>
            <NavLink to='/Hollywood' className="navitem" onClick={handleNavLink}  >Hollywood </NavLink>
            <NavLink to='/Technology' className="navitem" onClick={handleNavLink} >Technology </NavLink>
            <NavLink to='/Fitness' className="navitem" onClick={handleNavLink}  >Fitness </NavLink>
            <NavLink to='/Food' className="navitem" onClick={handleNavLink} >Food</NavLink>
            </div>
            <CreateStore>
            <Routes  >
                <Route path='/'  element={<Home />}></Route>
                <Route path='/Bollywood'  element={<Bollywood />}></Route>
                <Route path='/Hollywood'  element={<Hollywood />}></Route>
                <Route path='/Technology'   element={<Technology />}></Route>
                <Route path='/Fitness'   element={<Fitness />}></Route>
                <Route path='/Food'   element={<Food />}></Route>
                <Route path="/details/:id" element={<DynamicCompo/>}/>
            </Routes>
            </CreateStore>
            <Footer/> 
            </BrowserRouter>
             
        </>
    )
    
}
export default RouteCompo;