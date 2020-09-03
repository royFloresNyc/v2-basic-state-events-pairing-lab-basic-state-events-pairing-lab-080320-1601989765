import React from "react";

function DogCard() {
  return (
    <div className="card">
      <span className="content">
        <h2 >{/*Dog name goes here*/}</h2>
        <img alt="" src={""} />
      </span>
      <span className="bark">
        <button>Bark</button>
      </span>
    </div>
  );
}

export default DogCard;
