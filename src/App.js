import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './component/layout_website/LayoutPage';
import HomePageWeb from './pages/home/HomePageWeb';
import ShopPageWeb from './pages/shop/ShopPageWeb';
import LoginWebPage from './pages/login/LoginWebPage';
import ProductDetailpage from './pages/productDetail/ProductDetailpage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutPage/>} >
        <Route path='' element={<HomePageWeb/>} />
        <Route path='shop' element={<ShopPageWeb/>} />
        <Route path='product/:id' element={<ProductDetailpage/>} />
        {/* <Route path='/product/:id' element={<ProductDetailpage/>} /> */}
      </Route>
      <Route path='/login' element={<LoginWebPage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
