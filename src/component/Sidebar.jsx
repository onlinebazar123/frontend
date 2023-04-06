import DashboardIcon from "@mui/icons-material/Dashboard";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

import RateReviewSharpIcon from "@mui/icons-material/RateReviewSharp";

import LanguageIcon from "@mui/icons-material/Language";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

import React, { useState } from "react";

import { Breadcrumb, Button, Layout, Menu } from "antd";
import { style } from "@mui/system";
import { Container } from "@mui/material";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const styles = {
   textDecoration: "none",color:"white" ,Text:"bold",
   fontSize:"18px",
  //  marginTop:"20px",
   marginLeft:"15px",
  marginTop:"100px"
}
const iconStyle ={
  color:"white",
  fontSize:"large",
 
}

const items = [
  // getItem(),
  // getItem(),
  getItem(
  
    <NavLink to="/" style={styles}>
      Dashboard
    </NavLink>,
    "1",
    <DashboardIcon style={iconStyle} />
  ),
  // getItem(
  
  //   <NavLink to="/login" style={styles}>
  //    login
  //   </NavLink>,
  //   "2",
  //   <DashboardIcon style={iconStyle} />
  // ),
  // getItem(
  
  //   <NavLink to="/signup" style={styles}>
  //     signup
  //   </NavLink>,
  //   "3",
  //   <DashboardIcon style={iconStyle} />
  // ),
  getItem(
  
    <NavLink to="/displayroles" style={styles}>
      Roles
    </NavLink>,
    "4",
    <VerifiedUserIcon style={iconStyle} />
  ),
  getItem(
  
    <NavLink to="/adminusers" style={styles}>
      Users
    </NavLink>,
    "5",
    <PersonRoundedIcon style={iconStyle}  />
  ),
  
 
  getItem(
    <NavLink style={styles}>Products</NavLink>,
    "sub2",
    <Inventory2Icon style={iconStyle} />,
    [
      // getItem(
        
      //   <NavLink to="/addcategory" style={{ textDecoration: "none",color:"white" }}>
      //     Add Category
      //   </NavLink>,
      //    "3",
       
      // ),
      getItem(
        
        <NavLink to="/displaycategory" style={styles}>
         Category
        </NavLink>,

        "6"
      ),
      getItem(
        <NavLink to="/subcategory" style={styles}>
          Sub Category
        </NavLink>,
        "7"
      ),
    ]
  ),
  
  

  
  getItem(
    <NavLink to="/sellers" style={styles}>
      Sellers
    </NavLink>,
    "8",
    <LanguageIcon style={iconStyle} />
  ),
  getItem(
    <NavLink to="/customer" style={styles}>
      Customer
    </NavLink>,
    "9",
    <PeopleIcon style={iconStyle} />
  ),

  getItem(
    <NavLink to="/offers" style={styles}>
      Hot Offers
    </NavLink>,
    "10",
    <LocalOfferIcon style={iconStyle} />
  ),
  getItem(
    <NavLink to="/reviews" style={styles}>
      Reviews
    </NavLink>,
    "11",
    <RateReviewSharpIcon style={iconStyle}  />
  ),
  getItem(
    <NavLink to="/notification" style={styles}>
      Notificaton
    </NavLink>,
    "12",
    <NotificationsRoundedIcon style={iconStyle} />
  ),
  getItem(
    <NavLink to="/settings" style={styles}>
      Setting
    </NavLink>,
    "13",
    <SettingsIcon style={iconStyle} />
  ),
  getItem(
   
   
      // <Button  color="primary" style={{width:"150px"}}>
      //   Logout
      // </Button>
   
  ),
];

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "200vh",
        background: "white",
        margin: "0px",
       
      }}
    >
      <Sider style={{  margin: 0, width:"30%" }}>
        <h4 style={{margin:"50px",color:"white"}}>Admin</h4>
        {/* <div className="logo" style={{background:"blue"}}  /> */}
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']} mode="inline"
         
         
          items={items}
          
        />
        <div className="text-center">
        {/* <Button   style={{width:"180px",height:"40px",background:"blue",color:"white"}}>
        Logout
      </Button> */}
        </div>
       
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background,justify-content-end"
          style={{
            padding: 0,
            backgroundColor: "white",
            height:"90px"
          }}
        >
           <div style={{float:"right",marginRight:"50px",display:"flex"}}>
          <img style={{float:"right",width:"50px",height:"50px",margin:"20px"}} className ="rounded-circle" src="https://cdn.statusqueen.com/dpimages/thumbnail/whatsapp%20dp%20image6-601.jpg"></img>
           <h6 style={{color:"black",marginTop:"40px"}}>Hii Simran</h6>
           
          </div>
          
         
          {/* <div style={{background:"white",float:"end",marginTop:"80px",height:"80px"}}> */}
            
          {/* </div> */}
          
          
         
        
          {/* <Navbar/> */}
        </Header>

        <Content
          style={{
            margin: "16px",
            
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 1,
              minHeight: 10,
              display: "flex",
            
            }}
          ></div>
          
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "white",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
