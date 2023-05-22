import React, {Component} from 'react';
import "../orders/PlaceOrder.css";

const url = "https://lets-order.onrender.com/menuItem"

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*10000),
            hotel_name:this.props.match.params.restName,
            name:'Jeff',
            email:'jeff@gmail.com',
            cost:0,
            phone:8357284592,
            address:'U Block hno 38 Gurgaon',
            menuItem:''
        }
    }

    handleChange = (e) => {
       
        this.setState({[e.target.name]:e.target.value})
    }

    placeOrder = ( )=>{
        console.log(this.state)
    }

    render(){
        return(
            <>
            <div className='main'>
                <div className="container">
              <div className=" panel panel-primary">
                 <div className="panel-heading">
                    <h3>Your Order from Rest {this.state.hotel_name}</h3>
                 </div>
                 <div className="panel-body">
                    <div className="row">
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.cost}/>
                        <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input className="form-control" name="name" value={this.state.name}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input className="form-control" name="email" value={this.state.email}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Phone</label>
                            <input className="form-control" name="phone" value={this.state.phone}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Address</label>
                            <input className="form-control" name="address" value={this.state.address}
                            onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12 m-4">
                                <h2>Total Price is Rs.{this.state.cost}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.placeOrder}>
                            Checkout
                        </button>
                    </div>
                 </div>
              </div>
            </div>
            </div>
        
            </>
        )
    }
    componentDidMount(){
       debugger
        let menuItem = sessionStorage.getItem('menu');
        let orderId =[];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return'ok'
        })
        console.log(orderId);
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(orderId)
        })
        .then((res)=> console.log(res.json()))
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export default PlaceOrder;