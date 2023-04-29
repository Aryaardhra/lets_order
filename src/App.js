import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Listing from "./components/listing/Listing";
import Details from "./components/details/Details";

const App = () =>{
  return(
    <BrowserRouter>
    <Header/>
   <Route exact path = "/" component = {Home}/>
   <Route exact path = "/listing/:mealId" component = {Listing}/> 
   <Route exact path = "/details" component = {Details}/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;