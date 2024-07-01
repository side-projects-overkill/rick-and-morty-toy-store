import './App.css';
import ProductDetail from './components/details/ProductDetail';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='app'>
    <Router>
      <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
