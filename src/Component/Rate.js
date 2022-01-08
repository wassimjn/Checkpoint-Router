import ReactStars from "react-rating-stars-component";
import React from "react";

 function Rate({rate,setRate}){
    const ratingChanged = (rate) => {
        setRate(rate)
        console.log(rate)
      };
       
      return(
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          disabled ={true}
        
          
        />
       
      
      )  
 }

 export default Rate
