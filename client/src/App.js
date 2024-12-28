import React, { useState, Suspense } from 'react';
import './App.css';
import Login from './Components/login/Login';
import { BrowserRouter, Route, Routes ,Outlet , Navigate} from 'react-router-dom';
import Home from './Components/Home/Home';
import { UserProvider } from './Context/UserContext';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import AdminDashboard from './Admin/AdminDashboard'
//import Men from './Components/Category/Men/Men';
//import Women from './Components/Category/Women/Women';
//import Baby from './Components/Category/Baby/Baby';
import Cart from './Components/Cart/Cart'
import ProductDetails from './Components/Product/ProductDetails';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './Admin/AllProducts/AllProducts';
import EditProduct from './Admin/AllProducts/EditProduct';
import Allcustomers from './Admin/Costomer/Allcustomers';
import AddProduct from './Admin/AddProduct/AddProduct';
import Orders from './Admin/Order/Orders';
import Success from './Components/Payment/Success';
import Cancel from './Components/Payment/Cancel';
//Lazy Loading 
const LazyMen = React.lazy(()=> import('./Components/Category/Men/Men'))
const LazyWomen = React.lazy(()=> import('./Components/Category/Women/Women'))
const LazyBaby = React.lazy(()=> import('./Components/Category/Baby/Baby'))

const PrivateRoute = ({ UserAuth, ...props }) => {
  return UserAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/login' />
  );
};
function App() {
  const [UserAuth, SetUserAuth] = useState(false);

  return (
    <div className="App">
      <ToastContainer />
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login SetUserAuth={SetUserAuth} />} />

          <Route path='/' element={<Home />} />

          <Route path = '/men' element = {
            <Suspense fallback = 'Loading...'>
              <LazyMen/>
            </Suspense>
          } />

          <Route path = '/women' element = {
            <Suspense fallback = 'loading'>
              <LazyWomen/>
            </Suspense>
          } />

          <Route path = '/baby' element = {
            <Suspense fallback = 'Loading'>
              <LazyBaby/>
            </Suspense>
          } />

          <Route path = '/detail/:id' element = {<ProductDetails/>} />
          
          <Route path = '/success' element={<Success/>}/>
          <Route path = '/cancel' element={<Cancel/>}/>

          <Route path='/cart' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/cart' element ={<Cart/>}/>
          </Route>

          <Route path='/addproduct' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/addproduct' element ={<AddProduct/>}/>
          </Route>

          <Route path='/userDashboard' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/userDashboard' element ={<UserDashboard/>}/>
          </Route>

          <Route path='/adminDashboard' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/adminDashboard' element = {<AdminDashboard/>}/>
          </Route>

          <Route path='/allproducts' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/allproducts' element = {<AllProducts/>}/>
          </Route>

          <Route path='/edit/:id' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/edit/:id' element = {<EditProduct/>}/>
          </Route>

          <Route path='/customers' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/customers' element = {<Allcustomers/>}/>
          </Route>

          <Route path='/order' element = {<PrivateRoute UserAuth={UserAuth}/>}>
          <Route path='/order' element = {<Orders/>}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
