import React from "react";
import './SeasonDisplay.css';
const seasonConfig ={
     'summer': {
          text : "Let's hit the beach :)",
          inconName : 'sun'
     },
     'winter' :{
          text : "burrr it's chilly",
          inconName : 'snowflake'  
     }
}
const getSeason = (lat , month) => {
 if(month > 2 && month <9 ){
     return lat > 0 ? "summer" : 'winter';
 }else{
     return lat > 0 ? "winter" : 'summer';
 }
}

const SeasonDisplay = (props) => {
   const season = getSeason(props.lat , new Date().getMonth());
     const {text , inconName}  =    seasonConfig[season] ;
   
   return <div className={`season-display ${season}`}>
               <i className={`${inconName} icon massive icon-left`}></i>
               <h1>{text}</h1>
               <i className={`${inconName} icon massive icon-right`}></i>               
          </div>
};


export default SeasonDisplay ;