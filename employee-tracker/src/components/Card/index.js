import React from "react";

function Card(props) {
  return (
    <div className="card">
        Name: {props.title} + {props.first} + {props.last}
        Gender: {props.gender}
    </div>
  );
}

export default Card;
