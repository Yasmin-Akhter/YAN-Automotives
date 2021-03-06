
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import MyProfile from './Pages/MyProfile';
import AddReview from './Pages/AddReview';
import MyOrder from './Pages/MyOrder';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ResetPassword from './Pages/ResetPassword';
import AboutMe from './Pages/AboutMe';
import Users from './Pages/Users';
import ManageOrders from './Pages/ManageOrders';
import ManageProducts from './Pages/ManageProducts';
import AddProduct from './Pages/AddProduct';
import RequireAdmin from './Pages/RequireAdmin';
import Payment from './Payment';

function App() {
  return (
    <div className="App px-12">


      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/purchase/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}
        ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>} ></Route>
        <Route path="/about-me" element={<AboutMe></AboutMe>} ></Route>
        <Route path="/password-reset" element={<ResetPassword></ResetPassword>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='add-review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='my-order' element={<MyOrder></MyOrder>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manage-order' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
