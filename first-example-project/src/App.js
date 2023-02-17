import { useState, useEffect } from 'react';
import ProductForm from './components/course-form/CourseForm';
import { ProductList } from './components/product list/ProductList'
import { ProductState } from './store/ProductState';
import { Routes,Route,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/admin/login/Login';
import { Cart, cart } from './components/cart/Cart';
import { NavBar } from './components/navbar/NavBar';
import { CartState } from './store/CartState';
import { AuthState } from './store/AuthState';
import { ProtectRoute } from './components/admin/ProtectRoute';
import { Userproduct } from './components/Userproduct';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li><Link to = "/">Product List</Link></li>
          <li><Link to = "/course/add">Add Course</Link></li>
        </ul>
      </nav> */}
      {/* <button className='btn btn-primary' onClick={()=>navigate('product/add')}>Go To Product Add Page</button> */}
      <ProductState>
        <CartState>
          <AuthState>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ProductList/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/admin/login' element={<Login/>}/>
              <Route element={<ProtectRoute/>}>
                <Route path='/admin/product/add' element={<ProductForm/>}/>
                <Route element={<Userproduct/>}/>
              </Route>
            </Routes>
          </AuthState>
        </CartState>
      </ProductState>
    </div>
  );
}

export default App;