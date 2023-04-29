import React from "react";
import QuickSearch from "../home/quickSearch/QuickSearch";
import  Carousel  from "../home/carousel/Carousel"

const Home = () => {

    return(
        <div>
           <Carousel/>
            <QuickSearch/>
        </div>
    )
}

export default Home;