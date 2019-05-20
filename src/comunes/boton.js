import React from 'react';
import './boton.css';

function Boton(props) {
  return (

    <div className="Center">

      <button
        className="boton"
        onClick={props.onClick}
      >
        <h3 className="white-title">
          {props.children}
        </h3>
      </button>
    </div>
  )
}

export default Boton;