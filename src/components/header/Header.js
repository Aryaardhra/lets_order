import React from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
         <header className="header bg-info">
          <div className= "container-fluid ">
            <div className=" row g-0 ">
            <div className="  col-lg-2 col-md-3 col-sm-4 col-xs-6">
            <span 
            style={{fontSize:'30px', color:"white",paddingTop:"25px"}}>
            Let's Order
            </span>
            </div>
            <div id="social">
            <Link to = "/" className="btn btn-outline-dark">Home</Link>&nbsp;
            <Link to="/" className="btn btn-outline-success">
            <span className="glyphicon glyphicon-log-in"></span>LogIn
            </Link>&nbsp;
            <Link to="/" className="btn btn-outline-danger">
            <span className="glyphicon glyphicon-user"></span>SignUp
            </Link>
           </div>
           </div>
          </div>
     </header>
        </>
    )
}

export default Header;