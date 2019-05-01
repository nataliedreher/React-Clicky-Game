import React from "react";
import "./style.css";

function ImageCard(props) {
  return (

      <div className="img-container">
        <img data-clicked={props.clicked} id={props.id} className="char-img" alt={props.name} src={props.image} onClick={props.onClick} />
      </div>

  );
}

export default ImageCard;