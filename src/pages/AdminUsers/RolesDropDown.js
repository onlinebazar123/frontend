import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import axios from "axios";

function RolesDropDown() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [option, setOption] = useState("");
  const [sortValue, setSortValue] = useState("");
  //   const [role_id, setRoleId] = useState("")

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/role/getrole");
    setOption(res.data.Response);

    setShow(false);
  };
  const btnStyle = {
    margin:"5px",
    padding:"10px",
    height:"50px"
     }
//  const getRoleId = (rolename)=>{
//     console.log(rolename)
//  }
//   console.log(sortValue, "value")

  useState(() => {
    getData();
  }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={btnStyle}>
        Add Role
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Roles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={sortValue}
                onChange={(e) => {
                  setSortValue(e.target.value);
                }}
              >
                <option selected>Open this select menu</option>
                {option &&
                  option.map((item, index) => {
                    return (
                        <>
                        <option value={item.role_name} key={item.role_id}>
                        {item.role_name}
                      </option>
                      {/* {getRoleId(item.role.name)} */}
                        </>
                      
                    );
                  })}
                  
              </select>
            </Form.Group>
          </Form>
        
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={()=>getRoleId(item.role_name)}>Submit</Button> */}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RolesDropDown;
