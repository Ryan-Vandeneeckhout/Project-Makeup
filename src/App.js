import './App.css';
import HomePage from './pages/HomePage/Home';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserStoreInputCallAPIAndStoreItemCointainer from './components/API components/Store Components/API';
import NavigationTop from './components/Navigation/NavigationTop';
import BottomSiteSectionContainer from './components/BottomOfSiteComponents/BottomSiteSection';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
      <NavigationTop/>
        <Routes>
          <Route extact path='/' element={<HomePage />}/>
          <Route extact path='/API' element={<UserStoreInputCallAPIAndStoreItemCointainer />} />
          <Route path="/:itemid" element={<ProductPage />} />
          <Route path="/sephora/:productproductId" element={<UserStoreInputCallAPIAndStoreItemCointainer />} />
        </Routes>
        <BottomSiteSectionContainer/>
      </BrowserRouter>
      
   </div>
  )
}

export default App;