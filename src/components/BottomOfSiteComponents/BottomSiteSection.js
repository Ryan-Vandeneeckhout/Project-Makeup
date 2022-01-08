import './BottomSiteSectionContainer.css';
import { Link } from 'react-router-dom';
import React from 'react';

const BottomSiteSectionContainer = () => {

    return (
      <section className="bottomSite">
        <div className="bottomSite-Wrapper">
          <nav className="bottomSiteNav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/API">API</Link>
              </li>
              <li>
                <Link to="/BeautyUnder25">
                  Beauty Under <span className="NavNumberFix">$25</span>
                </Link>
              </li>
              <li>
                <Link to="/StoreCatalogue">Store Catalogue</Link>
              </li>
            </ul>
          </nav>
          <div className="bottomSiteWebsiteTitleContainer">
            <h2>Endless Demands</h2>
          </div>
          <div className="iconList">
            <p>Icon 1</p>
            <p>Icon 2</p>
            <p>Icon 3</p>
          </div>
        </div>
        <div className='credits'>
          <p>Created At Juno College of Technology by Ryan Van Den Eeckhout</p>
          </div>
      </section>
    );
    
}

export default BottomSiteSectionContainer