import React, { useEffect, useState } from "react";
import axios from "axios";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import Icon from "@mui/material/Icon";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import ToggleSwitch from "./ToggleSwitch";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShowAllDetails from "./ShowAllDetails";
import { useNavigate } from "react-router-dom";
import AddSellers from "./EditSellers";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import RenderPagination from "./RenderPagination";
import Pagination from "react-bootstrap/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from '@mui/icons-material/Delete';

const Customer = () => {
  const [userData, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [query,setQuery] = useState("")
  const [shopIdData, setShopIdData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(1)
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = userData.slice(indexOfFirstPage,indexOfLastPage)
  const totalPosts = userData.length;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUser = async () => {
    const res = await axios.get("http://localhost:8000/shop/viewshop");
    await setData(res.data.response);
    // console.log(res)
  };
  console.log(userData);
  useEffect(() => {
    getUser();
  }, []);

  const displayDataById = async (id) => {
    let shop_id = id;
    console.log("shop id", shop_id);
    const apiRes = await axios.get(
      `http://localhost:8000/shop/shopbyid/${shop_id}`
    );
    console.log("shop by is data", apiRes);
    setShopIdData(apiRes.data.response);
    handleShow();
  };
  const handleSearch = async ()=>{
    const res = await axios.get(`http://localhost:8000/shop/shoptype/${query}`)
    setData(res.data.response)
    setQuery(" ")
    
  }
 const  deleteShop = async (id)=>{
  window.alert("are you sure you want to delete this Shop!!");
  const deleteData =  await axios.delete(`http://localhost:8000/shop/deleteshop/${id}`)
  // window.alert("are you sure you want to delete")

  console.log(deleteData)
 }
  const tdStyle = {
    fontFamily: "serif",
    fontSize: "20px",
    padding: "25px",
    marginTop: "20px",
    width: "700px",
  };
  const renderPagination = ( postPerPage, totalPosts ) => {
  
  
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumber.push(i);
    }
     console.log("Pagenumber array",pageNumber)
    return (
      <>
       {
          <Pagination style={{color:"blue",justifyContent:"center"}}>
          
            {
                 pageNumber.map((number)=>{
                  return(
                    <>
                    
                     <Pagination.Item   onClick={()=>paginate(number)}>{number}</Pagination.Item>
                   
                    </>
                   
                
                  )
               })
            }
            
          </Pagination>
           
         }
      </>
          
    );
  };
  const paginate = (number)=>setCurrentPage(number)
  return (
    <>
      <h4>Shops</h4>
      <Container
        className="styles"
        style={{ background: "white", padding: "50px", marginTop: "70px" }}
      >
        <div
          className="form-outline d-flex"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Start typing to search for customer"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button color="white" onClick={handleSearch}>
            <SearchIcon />
          </Button>
        </div>
        
        <Table>
          <thead>
            <tr style={tdStyle}>
              <th>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Shop Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Staus</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentPosts.map((val, index) => {
              return (
                <tr
                  style={tdStyle}
                  className="shadow-sm p-3 mb-5  bg-white rounded"
                >
                  <td>
                    <input
                      type="checkbox"
                      className=""
                      style={{ width: " 20px", height: "20px" }}
                    />
                  </td>
                  {/* <td>{index}</td> */}
                  <td>{val.shop_owner}</td>
                  <td>{val.shop_name}</td>
                  <td>{val.email}</td>
                  <td>{val.contact_no}</td>
                
                  <td>{<ToggleSwitch />}</td>

                  <td>
                    <Button
                      clasName="style"
                      type="button"
                      style={{ background: "#2B293C" }}
                    >
                      <ModeEditOutlineSharpIcon color="white" />
                    </Button>
                    <Button
                    variant="danger"
                      style={{ margin: "10px"}}
                      onClick={() => deleteShop(val.shop_id)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      style={{ margin: "10px" }}
                      onClick={() => displayDataById(val.shop_id)}
                    >
                      <RemoveRedEyeIcon />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
       {renderPagination(postPerPage, totalPosts)}
      </Container>

      <Container>
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Body style={{ width: "700px" }}>
            <Table style={tdStyle}>
              <thead>
                <tr>
                  <th>Registration No</th>
                  <th>Shop Type</th>
                  <th>Gst No</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pin Code</th>

                  <th></th>
                </tr>
              </thead>
              <tbody className="shadow-sm">
                {shopIdData.map((ele, index) => {
                  return (
                    <>
                      <tr key={ele.shop_id}>
                        <td>{ele.registration_no}</td>
                        <td>{ele.shop_type}</td>
                        <td>{ele.gst_no}</td>
                        <td>{ele.city}</td>
                        <td>{ele.state}</td>
                        <td>{ele.pin_code}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Customer;
