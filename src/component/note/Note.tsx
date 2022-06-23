import './Note.css';
import React from "react";

export default function Note(props:{value:number}){
   return(
       <React.Fragment>
           <h1>Note{props.value}</h1>

       </React.Fragment>
   )
}