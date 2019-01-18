import React from "react";
import "./style.css"


function Header(props) {
    return (
        <header className="jumbotron bg-info " >{props.children}
            <div className="row text">
                <div className="col-4 "><span>Clicky Game</span></div>
                <div className="col-4"> Click an image to begin  </div>
                <div className="col-4"> <span>Score: {props.count} |</span><span>Top Score :{props.topCount} </span></div>
            </div>

        </header>
    )
}

export default Header