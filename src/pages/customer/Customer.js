import React, { useEffect, useState } from "react";
import axios from "axios";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import Icon from "@mui/material/Icon";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import "./customer.css";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "react-bootstrap/Pagination";
import ToggleSwitch from "../sellers/ToggleSwitch";
const Customer = (props) => {
  const [userData, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);
  const [pageLimit] = useState(4);
  const sortOptions = ["name", "email", "registoron", "status"];
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userData.slice(indexOfFirstPost, indexOfLastPost);
  console.log("This is current posts", currentPosts);
  const getUser = async () => {
    const res = await axios.get("http://localhost:8000/user/userview");
    await setData(res.data.response);
    // console.log(res)
  };
  console.log(userData);
  useEffect(() => {
    getUser();
  }, []);
  const totalPosts = userData.length;
  console.log("user data length outer",userData.length)
  const tdStyle = {
    fontFamily: "serif",
    fontSize: "20px",
    padding: "25px",
  };
  console.log(query);
  const handleSearch = async () => {
    const response = await axios.get(
      `http://localhost:8000/user/getuserbyname/${query}`
    );
    console.log(response.data.result);
    setData(response.data.result);
  };
  const handlePrivew = () => {
    getUser();
  };
  const handleFilter = async (status) => {
    const response = await axios.get(
      `http://localhost:8000/user/status/${status}`
    );
    setData(response.data.result);
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
          <Pagination style={{ color: "blue", justifyContent: "center" }}>
          
            {
                 pageNumber.map((number)=>{
                  return(
                    <>
                    
                     <Pagination.Item onClick={()=>paginate(number)}>{number}</Pagination.Item>
                   
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
      
      <Container
        className="styles"
        style={{ background: "white", padding: "50px", marginTop: "50px" }}
      >
        {/* <Button onClick={(e) => handleFilter("Active")}>Active</Button>
        <Button onClick={(e) => handleFilter("Deactive")}>Deactive</Button> */}
        <h4>{props.title}</h4>
        <div
          className="form-outline d-flex"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Start typing to search for customer"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button color="white" onClick={handleSearch}>
            <SearchIcon />
          </Button>
          <Button onClick={handlePrivew}>Preview</Button>
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
              <th scope="col">Email</th>
              <th scope="col">Reistoron</th>
              <th scope="col">Staus</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {userData.length == 0 ? (
              <td>
                <h2>Result not Found</h2>
              </td>
            ) : (
              currentPosts.map((val, index) => {
                return (
                  <tr key={val.id} style={tdStyle}>
                    <td>
                      <input
                        type="checkbox"
                        className=""
                        style={{ width: " 20px", height: "20px" }}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.registeron}</td>

                    <td><ToggleSwitch /></td>

                    <td>
                      <Button
                        clasName="style"
                        type="button"
                        style={{ background: "#2B293C" }}
                      >
                        <ModeEditOutlineSharpIcon color="white" />
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        <div>{renderPagination(postPerPage,totalPosts)}</div>
      
        {/* <select
          class="form-select"
          aria-label="Default select example"
          value={sortValue}
          onChange={(e) => {
            setSortValue(e.target.value);
          }}
        >
          <option selected>Open this select menu</option>
          {sortOptions.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select> */}
      </Container>
    </>
  );
};

export default Customer;
