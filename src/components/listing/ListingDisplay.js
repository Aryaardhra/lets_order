import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
               return listData.map((item) => {
                return(
                    <div className="item" key = {item._id}>
                        <div className="row">
                            <div className="">
                                <img src = {item.restaurant_thumb} className="Image"
                                alt = {item.restaurant_name}/>
                            </div>
                            <div className="">
                                <div className=" hotel_name">
                                    <Link to = {`/details?restId=${item._id}`}>
                                        {item.restaurant_name}
                                    </Link>
                                    <div className="city_name"> {item.address} </div>
                                    <div className="city_name"> {item.rating_text} </div>
                                    <div className="city_name"> Rs.{item.cost} </div>                
                                </div>
                            </div>
                        </div>
                    </div>
                )
               })
            }else{
                return(
                    <div>
                        <h2> No Data Found For Filter </h2>
                    </div>
                )
            }
            
        }else{
            return(
                <div>
                    <Loading/>
                </div>
            )
        }
    }

    return(
        <div id = "content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;