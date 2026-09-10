import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from "./pages/Dashboard";
import Users from  "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Roles from './pages/Roles';
import UserForm from './pages/UserForm';
import ProductForm from './pages/ProductForm';
import RoleForm from './pages/RoleForm';

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          
          {/* Dashboard Routes */}
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Navigate to={"/dashboard"} replace/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            {/* User Routes */}
            <Route path="/user">
              <Route path="list" element={<Users />} />
              <Route path="form/:id?" element={<UserForm />} />
            </Route>
            {/* Product Routes */}
            <Route path='/product'>
              <Route path='list' element={<Products/>} />
              <Route path='form/:id?' element={<ProductForm/>}/>
            </Route>
            <Route path='/orders' element={<Orders/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/settings' element={<Settings/>} />
            
            {/* Role Routes */}
            <Route path='/role'>
              <Route path='list' element={<Roles/>}/>
              <Route path='form/:id?' element={<RoleForm/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
