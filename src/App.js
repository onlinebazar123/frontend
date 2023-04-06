import "./App.css";

// import AdminHome from "./AdminHome";
import React from 'react';
import {Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Offers from "./pages/offers/Offers";
import Sidebar from "./component/Sidebar";
import Orders from "./pages/orders/Orders";
import Sellers from "./pages/sellers/Sellers";
import Statics from "./pages/statics/Statics";
import Reviews from "./pages/reviews/Reviews";
import Transaction from "./pages/transaction/Transaction";
import Settings from "./pages/settings/Settings";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admins/Admin";
import Category from "./pages/category/AddCategory";
import Notification from "./pages/notification/Notification";
import AdminForm from "./pages/admins/AdminForm";
import AddCategory from "./pages/category/AddCategory";
// import AdminLogin from "./pages/admin_login/admin_login";
import UserLoginForm from "./component/UserLoginForm";
import DisplayCategory from "./pages/category/DisplayCategory";
import AdminLogin from "./pages/admins/AdminLogin";
// import Sidebar2 from "./component/Sidebar2"
import AddSubCategory from "./pages/sub_category/AddSubCategory";
import DisplaySubCategory from './pages/sub_category/DisplaySubCategory'
import Signup from './pages/signup/Signup'
import RoleForm from "./pages/role/RoleForm";
import DisplayRoles from "./pages/role/DisplayRoles";
import DisplayUsers from "./pages/AdminUsers/DisplayUsers"; 
import Addusers from "./pages/AdminUsers/Addusers";
import ShowAllDetails from "./pages/sellers/ShowAllDetails";
import AddSellers from "./pages/sellers/EditSellers";
function App() {
  return (
    <>
       {/* <AdminHome/> */}
       <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/role" element={<RoleForm/>} /> */}
            <Route path="/displayroles" element={<DisplayRoles/>} />
            <Route path="/adds" element={<DisplayRoles/>} />
            <Route path="/addroles" element={<RoleForm />} />
            <Route path="/shopalldetails" element={<ShowAllDetails/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/adminusers" element={<DisplayUsers />} />
            <Route path="/addadmin" element={<AdminForm />} />
            <Route path="/addadminusers" element={<Addusers />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<AdminLogin/>} />
            <Route path="/addcategory" element={<AddCategory/>} />
            <Route path="/displaycategory" element={<DisplayCategory/>} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/category" element={<Category />} />
            <Route path='/subcategory' element={<DisplaySubCategory/> }/>
            <Route path="/addsubcategory" element={<AddSubCategory/>}/>
            <Route path="/customer" element={<Customer />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Sidebar>
    </>
  );
}

export default App;
