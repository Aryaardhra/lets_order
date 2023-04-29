import React, {Component} from "react";
import "../quickSearch/QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const base_url ="https://lets-order.onrender.com";

class QuickSearch extends Component{

  constructor(){
    super()

    this.state = {
      mealType:''
    }
  }

    render(){
        return(
            <div className="container-fluid ">
                <div className="row">
                    <div className="quick_search ">
                    <span className="quick_search_heading ">QuickSearch</span>
                  <p id="sub_heading">Find Restaurant By MealType</p>
                 
                     <QuickDisplay mealData={this.state.mealType}/>
                     </div>
                    
                </div>
            </div>
        )
    }

    componentDidMount(){
      fetch(`${base_url}/mealTypes`,{method:'GET'})
      .then((res) => res.json())
      .then((data) => {
        this.setState({mealType:data})
      })
    }
}

export default QuickSearch;