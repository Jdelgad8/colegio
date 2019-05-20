import React from 'react';
import './header.css';

function Header(props) {
  return (
    <section className="Header">
      <div className="Center">
        <h1 className="white-title">
          {props.children}
        </h1>
      </div>
    </section>
  )
}

export default Header;