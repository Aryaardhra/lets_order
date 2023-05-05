import React,{Component} from "react";

class MenuDetails extends Component{
    orderId = []
 
    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) =>{
        if (orders){
            return orders.map((item,index) => {
                return(
                    <b key ={index}>{item} &nbsp;</b>
                )
            })
           
        }
    }


    renderMenu = ({menudata}) => {
       // console.log(menudata)
        if(menudata){
           // console.log(menudata)
            return menudata.map((item) => {
               // console.log(menudata)
               
                return(
                    
                    <div key = {item.menu_id}>
                        <div>
                            <div className="col-md-7">
                                <b>{item.menu_id}</b> &nbsp;
                                <img src= {item.menu_image} 
                                alt= {item.menu_name}
                                style={{width:80, height:80}}/> &nbsp;
                                {item.menu_name} - Rs.{item.menu_price}
                            </div>
                            <div className="col-md-4 order_buttons">
                                <button className="btn btn-success"
                                onClick={() => {this.placeOrder(item.menu_id)}}
                                 >
                                <span className="glyphicon glyphicon-plus">+</span>
                                </button>&nbsp;
                                <button className="btn btn-danger"
                                onClick={() => {this.removeOrder(item.menu_id)}}
                                >
                                <span className="glyphicon glyphicon-minus">-</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    }
    render(){
        return(
            <div className="container-fluid">
                <div className="col-md-12 title_">
                    <h4>Item Added</h4>
                    <p>Item Number {this.renderCart(this.orderId)} Added</p>
                </div>
                <div className="col-md-12 menu_box ">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDetails;