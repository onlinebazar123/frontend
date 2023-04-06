import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminForm() {

  const [mydata, setData] = useState({
    admin_id: "",
    admin_name: "",
    email_id: "",
    mobile_no: "",
    gender: "",
    password: "",
    aadhar_no: "",
    pan_card: "",
    gst_no: "",
    image: "",
  
  });
  const [roll,setRoll] = useState("")
  const postData = async (e) => {
    e.preventDefault();

    const {
      admin_id,
      admin_name,
      email_id,
      mobile_no,
      gender,
      password,
      aadhar_no,
      pan_card,
      gst_no,
    } = mydata;
    const formData = {
      admin_id,
      admin_name,
      email_id,
      mobile_no,
      gender,
      password,
      aadhar_no,
      pan_card,
      gst_no,
    };

    console.log("form fdata", formData);
    const api = await fetch("http://localhost:8000/admindetails/addadmin", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
      
    }
      
  );
  // console.log("api response",api)
  
  };
  const handleinput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...mydata,
      [name]: value,
    });
  
  };
  
console.log("myData",mydata)
console.log(roll)
  return (
    <>
      <h3>Add Admin</h3>
     
      <div  style={{ background: "white", borderRadius: "5px", margin: "20px",padding:"35px" }}>
      
      <Form style={{ margin: "20px" }}>
        <Row className="mb-3">
        
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{ marginTop: "20px" }}>Name</Form.Label>
            <Form.Control
              type="text"
              name="admin_name"
              value={mydata.admin_name}
              onChange={handleinput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{ marginTop: "20px" }}>Email</Form.Label>
            <Form.Control
              type="email"
              name="email_id"
              value={mydata.email_id}
              onChange={handleinput}
            />
          </Form.Group>
        </Row>
      
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="mobile_no"
              value={mydata.mobile_no}
              onChange={handleinput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              value={mydata.gender}
              onChange={handleinput}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={mydata.password}
              onChange={handleinput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Adhar No</Form.Label>
            <Form.Control
              type="adhar"
              name="aadhar_no"
              value={mydata.aadhar_no}
              onChange={handleinput}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Pan Card</Form.Label>
            <Form.Control
              type="text"
              name="pan_card"
              value={mydata.pan_card}
              onChange={handleinput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Gst No</Form.Label>
            <Form.Control
              type="text"
              name="gst_no"
              value={mydata.gst_no}
              onChange={handleinput}
            />
          </Form.Group>
        </Row>
         <div className=" container d-grid w-25 vertical-center" style={{marginTop:"40px"}}>
         <Button  variant="primary" size ="lg" onClick={postData}>
          Submit
        </Button>
         </div>
        
      </Form>
    
      </div>
      
    </>
  );
}

export default AdminForm;
