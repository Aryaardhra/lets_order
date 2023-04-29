import React, {Component} from 'react';
import axios from "axios";
import "../listing/Listing.css";
import ListingDisplay from "./ListingDisplay";

const base_url ="https://lets-order.onrender.com";

class Listing extends Component{
    constructor(){
        super()
        this.state ={
            restaurantList:''
        }
    }
    render(){
        return(
           <>
           <div className="row">
            
                <div className="filter border col-md-3 m-5">
                    sfdfd
                </div >
                <div className="listing_out col-md-9">
                < div id="mainListing">
                    
                <ListingDisplay listData = {this.state.restaurantList}/>
                </div>
                </div>
           </div>
        </>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${base_url}/restaurants?mealId=${mealId}`)
        .then((res)=> this.setState({restaurantList:res.data}))
    }
}

export default Listing;