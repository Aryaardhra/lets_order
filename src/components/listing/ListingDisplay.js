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
                        <div className="container">
                           <div className="img_section ">
                            <img src={item.restaurant_thumb}  className="rounded-start" alt="lunch"/>
                           </div>
                           <div className="info_section">
                           <div className="res_heading">
                              <Link to = {`/details?restId=${item.restaurant_id}`}>
                                 {item.restaurant_name}
                              </Link>
                           </div>
                           <div className="res_details">
                              {item.address}&nbsp;
                             <p>{item.rating_text}</p>
                             <p>{item.cost}</p>
                           </div>
              
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