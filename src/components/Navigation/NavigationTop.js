import { Link } from 'react-router-dom';
import React from 'react';
import './NavigationTop.css'
import Themechanger  from './Themechanger'; 

const NavigationTop = () => {
  
  let count = 0; 

  return (
    <nav className='upperSite' id="upperSite">
        <ul>
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/API">API</Link></li>
          <li ><Link to="/BeautyUnder25">Beauty Under <span className='NavNumberFix'>$25</span></Link></li>    
          <li ><Link to="/StoreCatalogue">Store Catalogue</Link></li>
        <Themechanger count={count}/>
        </ul>
    </nav>
    );
  };
  
  export default NavigationTop;