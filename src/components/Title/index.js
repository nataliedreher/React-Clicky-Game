import React from "react";
import "./style.css";

function Title(props) {
  return (
      <nav className="navbar">
      <ul>
        <li><a className="navlink" href="/">Clicky Game</a></li>
        <li>{props.message}</li>
        <li>Score: {props.score} | Top Score: {props.highScore}</li>
      </ul>
      </nav>
  )
}

export default Title;
