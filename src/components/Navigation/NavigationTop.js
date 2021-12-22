import { Link } from 'react-router-dom';
import './NavigationTop.css'

const NavigationTop = () => {
     
    return (
    <nav className='upperSite' id="upperSite">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/API">API</Link></li>
          <li><Link to="/BeautyUnder25">Beauty Under $25</Link></li>    
          <li><Link to="/StoreCatalogue">Store Catalogue</Link></li>
        </ul>
    </nav>
    );
  };
  
  export default NavigationTop;