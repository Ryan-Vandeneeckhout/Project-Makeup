import './App.css';
import HomePage from './pages/Home';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import API from './components/API components/API';
import NavigationTop from './components/Navigation/NavigationTop';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavigationTop/>
        <Routes>
          <Route extact path='/' element={<HomePage />}/>
          <Route extact path='/API' element={<API />} />
          <Route path="/:itemid" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App;