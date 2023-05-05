import React, { Component } from 'react';
import "../carousel/Carousel.css";

const base_url ="https://lets-order.onrender.com";

class Carousel extends Component {
  constructor(){
    super()
    this.state={
      location:'',
      restData:''
    }
  }
  renderCity = (data) => {
    if(data){
      return data.map((item)=>{
        return(
          <option value={item.state_id} key={item.state_id}>
            {item.state}
          </option>
        )
      })
    }
  }

  renderRest = (data) =>{
    if(data){
      return data.map((item)=>{
        return(
          <option value={item.restaurant_id} key={item.restaurant_id}>
            {item.restaurant_name} | {item.address}
          </option>
        )
      })
    }
  }
    handleCity = (e) => {
      let stateId = e.target.value;
      fetch(`${base_url}/restaurants?stateId=${stateId}`,{method:'GET'})
      .then((res)=> res.json())
      .then((data) => {
        this.setState({restData:data})
      })
    }
  
  render(){
  return (
    <>
    <div className="img_slide">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
        <div className="carousel-item active">
           <img src="https://i.ibb.co/YTmhP0J/HD-wallpaper-indian-restaurant-san-francisco-deccan-house-sf-north-indian-food.jpg" 
           className="img" 
           alt="..."
           />
        <div className="carousel-caption ">
        <div id ="logo ">
           <img  id ="imglogo" src="https://i.ibb.co/HNzMfXW/lets-order-logo-header-food-ordering-commision-free-1-e1600758931443.png"
           alt="background img"
           />
        </div>  
        <h5>Search Place Near To You</h5>
        <div className="search">
        <div className="box_2">
           <select 
            onChange={this.handleCity}
            className="form-select form-select-sm" 
            aria-label=".form-select-sm example"
           >
           <option >Select City</option>
           {this.renderCity(this.state.location)}
           </select>
         </div>
       <div className="box_2">
          <select 
            className="form-select form-select-sm " 
            aria-label=".form-select-sm example"
            >
           <option >Select Restaurants</option>
           {this.renderRest(this.state.restData)}
         </select>
       </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}
componentDidMount(){

    fetch(`${base_url}/location`,{method:'GET'})
    .then((res)=> res.json())
    .then((data) => {
      this.setState({location:data})
    })
    .catch((err) => {
      console.log(err)
    })
}
}

export default Carousel; 