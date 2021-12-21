import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import API from './components/API components/API';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>The Empire</h1>
        </nav>
        <Routes>
          <Route extact path='/' element={<Home />}/>
          <Route extact path='/API' element={<API />}/>
        </Routes>
        
      </BrowserRouter>
   </div>
  )
}

export default App;