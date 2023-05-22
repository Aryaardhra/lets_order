import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Listing from "./components/listing/Listing";
import Details from "./components/details/Details";
import PlaceOrder from "./components/orders/PlaceOrder";
import ViewOrder from "./components/orders/ViewOrder";

const App = () =>{
  return(
    <BrowserRouter>
    <Header/>
   <Route exact path = "/" component = {Home}/>
   <Route  path = "/listing/:mealId" component = {Listing}/> 
   <Route  path = "/details" component = {Details}/>
   <Route  path="/viewBooking" component = {ViewOrder}/>
   <Route  path = "/PlaceOrder/:restName" component={PlaceOrder}/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;