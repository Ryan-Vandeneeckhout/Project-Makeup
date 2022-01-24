import { Link } from 'react-router-dom';
import React from 'react';
import './NavigationTop.css'

const NavigationTop = (props) => {
  
  return (
    <nav className='upperSite' id="upperSite">
      <ul className='ulUppersite'>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/API">Store Catalogue</Link></li>
        <li ><Link to="/AboutPage">About Page</Link></li>
      </ul>
      <button onClick={props.ChangeStateFunction}  className={`themeClick${props.showbox ? " rotating" : " not"}`}>
        <i className={`${props.showbox ? "fas fa-bahai" : "fas fa-times"}`}></i>
      </button>
    </nav>
    
    );
  };
  
  export default NavigationTop;