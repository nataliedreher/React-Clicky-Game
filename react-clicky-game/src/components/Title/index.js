import React from "react";
import "./style.css";

function Title(props) {
  return (
      <nav className="navbar">
      <ul>
        <li><a className="navlink" href="/">Clicky Game</a></li>
        <li>Click on an image to begin</li>
        <li>Score: {props.score} | Top Score: {props.highScore}</li>
      </ul>
      </nav>
  )
  
  
//   <h1 className="title">{props.children}</h1>;
}

export default Title;
