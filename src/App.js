import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound';
import MyProfile from './Pages/MyProfile';
import AddReview from './Pages/AddReview';
import MyOrder from './Pages/MyOrder';

function App() {
  return (
    <div className="App px-12">


      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        {/* <Route path="/purchase" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}
        ></Route> */}
        <Route path="/purchase/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}
        ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='add-review' element={<AddReview></AddReview>}></Route>
          <Route path='my-order' element={<MyOrder></MyOrder>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
