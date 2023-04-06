import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Table } from "react-bootstrap";

function View_propertydes() {
  const [data, setData] = useState([]);
  const [room_id, setRoom_id] = useState([]);
  const [description, setDescription] = useState([]);
  const [status, setStatus] = useState("");
  const [anenities, setAnenities] = useState("");
  const [furnishing_status , setFurnishing_status ] = useState("");
  const [room_rent, setRoom_rent] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (room_id, description, status, anenities,furnishing_status, room_rent) => {
    setRoom_id(room_id);
    setDescription(description);
    setStatus(status);
    setAnenities(anenities);
    setFurnishing_status(furnishing_status)
    setRoom_rent(room_rent);
    setShow(true);
  };
  
  const getData = async () => {
    const res = await fetch("http://localhost:3050/ownerdview");
    const Userdata = await res.json();
    setData(Userdata);
  };

  useEffect(() => {
    getData();
  }, []);
//===============================Delete Api=============================================
  const deleteData = async (room_id) => {
    fetch(`http://localhost:3050/ownerd/${room_id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status == 200) {
        alert("Data deleted Successfully");
      }
    });
    getData();
  };

  // =============================Put Api==================================================
  const submitData = async () => {
    const data1 = {
      room_id,
      description,
      status,
      anenities,
      furnishing_status,
      room_rent,
    };
    const reqData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    };
    fetch(`http://localhost:3050/ownerd/${room_id}`, reqData).then((res) => {
      if (res) {
        console.log("User updated");
        return res.json();
      }
    });
    getData();
    handleClose();
  };

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Room_id</th>
            <th>description</th>
            <th>status</th>
            <th>Anenities</th>
            <th>Furnishing_status</th>
            <th>Room_Rent</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.room_id}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.anenities}</td>
                <td>{item.furnishing_status}</td>
                <td>{item.room_rent}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteData(item.room_id)}>
                    Delete
                  </Button>
                </td>

                <td>
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleShow(
                        item.room_id,
                        item.description,
                        item.status,
                        item.anenities,
                        item.furnishing_status,
                        item.room_rent
                      )
                    }>
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="Cantenar">
        <div class="container px-4">
          <div class="row gx-5">
            <div class="col">
              <div class="">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Room_id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Room_id"
                    value={room_id}
                    onChange={(e) => setRoom_id(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div class="col">
              <div>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4">
          <div className="row gx-5">
            <div className="col">
              <div className="">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col">
              <div className="">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Anenities</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amenities"
                    value={anenities}
                    onChange={(e) => setAnenities(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4">
          <div className="row gx-5">
            <div className="col">
              <div className="">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>furnishing_status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="furnishing_status"
                    value={furnishing_status}
                    onChange={(e) => setFurnishing_status(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col">
              <div className="">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Room_rent</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Room_rent"
                    value={room_rent}
                    onChange={(e) => setRoom_rent(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
         Cancle
          </Button>
          <Button variant="primary" onClick={submitData}>
        Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default View_propertydes;