import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AdminModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const putdata = async () => {
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

    await fetch(`http://localhost:8000/admin/editadmin/${admin_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  };
  const handleinput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...mydata,
      [name]: value,
    });
    // console.log(name, value);
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow(
          // value.admin_id,
          // val.admin_name,
          // val.email_id,
          // val.mobile_no,
          // val.gender,
          // val.password,
          // val.aadhar_no,
          // val.gst_no
        )}
      >
        edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ margin: "20px" }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
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
              <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile_no"
                  value={mydata.mobile_no}
                  onChange={handleinput}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGender">
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

              <Form.Group as={Col} controlId="formGridAadhar">
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
              <Form.Group as={Col} controlId="formGridPan">
                <Form.Label>Pan Card</Form.Label>
                <Form.Control
                  type="text"
                  name="pan_card"
                  value={mydata.pan_card}
                  onChange={handleinput}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGst">
                <Form.Label>Gst No</Form.Label>
                <Form.Control
                  type="text"
                  name="gst_no"
                  value={mydata.gst_no}
                  onChange={handleinput}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={putdata}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AdminModal;
