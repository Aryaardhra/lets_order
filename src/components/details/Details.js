import React, {Component} from "react";
import "../details/Details.css";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
import MenuDetails from "./MenuDetails";

const base_url ="https://lets-order.onrender.com";

class Details extends Component{

    constructor(props){
        super(props)

        this.state={
            details:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            menuList:'',
            userItem: ''
        }
    }
    proceed = () =>{}

    addToCart = (data) => {
        this.setState({userItem:data})
    }
    render(){
        let {details} = this.state;
        return(
           <>
           <div className="main">
            <div className="tileImage col-md-4">
                <div className="imageClass ">
                    <img src= {details.restaurant_thumb} alt=""/>
                </div>
            </div>
            <div className="tileContent col-md-8">
                <div className="printed">
                    <h1>{details.restaurant_name}</h1>
                    <span id = "cfeedback">231 Customers Rating Average</span>
                    <h4>Old Price <del>Rs.890</del></h4>
                    <h4>Offer Price Rs.{details.cost}</h4>
                    <h2>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h2>
                    <div>
                       <div className="icons">
                         <img src = "https://i.ibb.co/wJvrhYg/veg.png" alt =""/>
                       </div>
                       <div className="icons">
                         <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                       </div>
                    </div>
                </div>
            </div>
            <div className=" tab_details">
                <div className=" tab_info">
                  <Tabs>
                        <TabList>
                            <Tab>About</Tab>
                            <Tab>Contact</Tab>
                        </TabList>
                        <TabPanel>
                            <h2>{details.restaurant_name}</h2>
                            <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <h2>{details.address}</h2>
                            <h3>Contact: {details.contact_number}</h3>
                        </TabPanel>
                 </Tabs>
                </div>
                    <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">
                        Back
                    </Link> &nbsp;
                    <button className='btn btn-success' onClick={this.proceed}>
                        Proceed
                    </button>
            </div>
                    <div className="col-md-12">
                        <center><h2>Menu</h2></center>
                        <MenuDetails menudata={this.state.menuList}
                        finalOrder = {(data) => {this.addToCart(data)}}
                        />
            </div>
            </div>
           </>
        )
    }

     async componentDidMount(){
      
        //debugger
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${base_url}/details/${restId}`);
        let menuResponse = await axios.get(`${base_url}/menu/${restId}`);
        this.setState({details:response.data[0],menuList:menuResponse.data})
    
    }
}

export default Details;

