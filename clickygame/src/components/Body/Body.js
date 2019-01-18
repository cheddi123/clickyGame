import React from "react";
import "./style.css"


const Body = props => (
    <div
         value={props.id}
        onClick={() => props.handleClick(props.id)}>

        <div >
            <img className="img"  alt="" src={props.photo} />
        </div>

   </div>
)

export default Body