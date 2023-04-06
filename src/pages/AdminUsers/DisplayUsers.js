import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Container, margin } from "@mui/system";
import RolesDropDown from "./RolesDropDown";
import Addusers from "./EditUsers";
import EditUsers from "./EditUsers";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "react-bootstrap/Pagination";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import Modal from "react-bootstrap/Modal";
import moment from 'moment';
const DisplayUsers = () => {
  const [data, setData] = useState([]);
  const [userName,setUserName] = useState("") 
  const [userMobile,setUserMoble] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")
  const [state,setState] = useState("")
  const [pincode,setPincode] = useState("")
  const [city,setCity] = useState("")
  const [status,setStatus] = useState("")
  const [registeron,setRegisteron] = useState("")
  const [roleId,setRoleId] = useState("")
  const[gender,setgender] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userIdData, setUserIdData] = useState([]);
  const [option, setOption] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);
  const totalPosts = data.length;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loadData = async () => {
    const resp = await axios.get("http://localhost:8000/registration/viewuser");
    console.log(resp.data.response);
    setData(resp.data.response);
  };
  useEffect(() => {
    loadData();
   
  }, []);
  const deleteUser = async (id) => {
    window.alert("are you sure you want to delete this user!!");
    const resp = await axios.delete(
      `http://localhost:8000/registration/deleteuser/${id}`
    );
    console.log(resp);
  };
  const getUserById = async (id) => {
    const res = await axios.get(
      `http://localhost:8000/registration/userbyid/${id}`
    );
    // console.log("Id data response", res);
    setUserIdData(res.data.response);
    // console.log("userid data",userIdData[0].user_name)
    const {user_name} = userIdData[0]
    console.log("username of  ",user_name)
    const item = userIdData[0];
    setUserName(user_name)
    setAddress(item.address)
    setEmail(item.email)
    setCity(item.city)
    setPincode(item.pin_code)
    setRoleId(item.roleId)
    setStatus(item.status)
    setState(item.state)
    setgender(item.gender)
    setPassword(item.password)
    // console.log("user id item",item.user_name)

    // let dd = moment.utc('2019-11-03T05:00:00.000Z').format('MM/DD/YYYY')
    //  console.log(dd)
  };
 
//  console.log('hi', userIdData.user_name)
 
  const getRoles = async () => {
    const res = await axios.get("http://localhost:8000/role/getrole");
    setOption(res.data.Response);
  };

  const tdStyle = {
    fontFamily: "serif",
    fontSize: "20px",
    padding: "10px",
  };
  const btnStyle = {
    margin: "10px",
    padding: "8px",
    height: "50px",
  };
  const renderPagination = (postPerPage, totalPosts) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumber.push(i);
    }
   
    return (
      <>
        {
          <Pagination style={{ color: "blue", justifyContent: "center" }}>
            {pageNumber.map((number) => {
              return (
                <>
                  <Pagination.Item onClick={() => paginate(number)}>
                    {number}
                  </Pagination.Item>
                </>
              );
            })}
          </Pagination>
        }
      </>
    );
  };
  const paginate = (number) => setCurrentPage(number);
  
 
   
 
  return (
    <>
      <Container
        className="styles"
        style={{ background: "white", padding: "50px", marginTop: "70px" }}
      >
        <Button
          clasName="style"
          type="button"
          style={{ background: "#2B293C" }}
          onClick={() => navigate("/addadminusers")}
        >
          Add User
        </Button>
        {/* <Addusers title="Add User"/> */}
        <Table style={tdStyle}>
          <thead className="shadow-sm">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pin Code</th>
              <th>RegistereOn</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="shadow-sm">
            {currentPosts.map((item, index) => {
              return (
                <tr key={item.user_id} style={{ margin: "20px" }}>
                  <td> {item.user_name}</td>
                  <td>{item.email}</td>
                  <td>{item.user_mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.pin_code}</td>
              
              
                  <td>{moment.utc(item.registeron).format('DD-MM-YYYY')}</td>
                  <td style={{ display: "flex" }}>
                    {/* <EditUsers id={item.user_id} /> */}
                    <Button
                      clasName="style"
                      type="button"
                      style={btnStyle}
                      onClick={() => getUserById(item.user_id)}
                    >
                      <ModeEditOutlineSharpIcon color="white" />
                    </Button>
                    <Button
                      variant="danger"
                      style={btnStyle}
                      onClick={() => deleteUser(item.user_id)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      style={btnStyle}
                     
                    >
                      <RemoveRedEyeIcon />
                    </Button>
                  
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>{renderPagination(postPerPage, totalPosts)}</div>
      </Container>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    value={userName}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" value={userMobile} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" value={gender} />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" value={roleId} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Addres</Form.Label>
                <Form.Control type="text" value={address} />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" value={city} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" value={state} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" value={pincode} />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default DisplayUsers;
