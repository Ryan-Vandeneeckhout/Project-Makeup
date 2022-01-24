import './App.css';
import HomePage from './pages/HomePage/Home';
import ProductPage from './pages/MakeupProductPage/ProductPage';
import AboutPage from './AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserStoreInputCallAPIAndStoreItemCointainer from './components/API components/Store Components/API';
import NavigationTop from './components/Navigation/NavigationTop';
import BottomSiteSectionContainer from './components/BottomOfSiteComponents/BottomSiteSection';
import PlayPauseMusicButton from './components/Global Buttons/PlayPauseMusicButton';
import ScrollUpButton from './components/Global Buttons/ScrollUpButton';
import SephoaraPage from "./pages/SephoraPage/SephoaraPage"; 
import Themechanger from './components/Navigation/Themechanger';
import { useState } from 'react';

const App = () => {

  let [Showbox, setShowBox] = useState(false);

  const ChangeStateFunction = () => {

    if (Showbox === false) {
      setShowBox(Showbox = true);
    }

    else { 
      setShowBox(Showbox = false)
    }

  }
  
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationTop ChangeStateFunction={ChangeStateFunction} showbox={Showbox} />
        <Themechanger showbox={Showbox}/>
        <Routes>
          <Route extact path='/' element={<HomePage />}/>
          <Route extact path='/API' element={<UserStoreInputCallAPIAndStoreItemCointainer />} />
          <Route extact path='/AboutPage' element={<AboutPage />} />
          <Route path="/:itemid" element={<ProductPage />} />
          <Route path="API/sep/:productscurrentSkuskuId/:productId" element={<SephoaraPage />} />
        </Routes>
        <PlayPauseMusicButton />
        <ScrollUpButton/>
        <BottomSiteSectionContainer />
      </BrowserRouter>
   </div>
  )
}

export default App;