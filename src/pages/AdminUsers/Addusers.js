import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormSchema } from "./UserFormSchema";
import formik, { useFormik } from "formik";
import { Container } from "@mui/material";
import { Country, State, City }  from 'country-state-city';
import axios from "axios";
import { responsiveArray } from "antd/es/_util/responsiveObserve";
const Addusers = () => {
  const [options, setOptions] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [state,setState] = useState("")
  const [city,setCity] = useState("")
  const initialValues = {
    user_name: "",
    user_mobile: "",
    email: "",
    gender: "",
    role_id: "",
    address: "",
    state: "",
    city: "",
    pin_code: "",
    registeron: "",
  };
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      // console.log("form values",values)
      postData()
    },
  });
  const getData = async () => {
    const res = await axios.get("http://localhost:8000/role/getrole");
    setOptions(res.data.Response);
  };
  useState(() => {
    getData();
    function getDataOfstate(){
      let setDataOfstate = State.getStatesOfCountry("IN")
      console.log("state",setDataOfstate)
      setState(setDataOfstate)
    } 
    try{
      getDataOfstate()
      const countries = Country.getCountryByCode("IN")
      setCity()
    }
    catch(errors){
      
    }
  }, []);

  const postData = async ()=>{
    const { 
    user_name,
    user_mobile,
    email,
    gender,
    role_id,
    address,
    state,
    city,
    pin_code} = values
    const data = {
    user_name,
    user_mobile,
    email,
    gender,
    role_id,
    address,
    state,
    city,
    pin_code
    }
    const  res = await axios.post("http://localhost:8000/registration/adduser",data)
    console.log("postData response",res)
  }
  
  return (
    <>
      <Container
        className="shadow-sm p-5 w-50 bg-white rounded "
        style={{ marginTop: "60px" }}
      >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                value={values.user_name}
                onChange={handleChange}
              />
              {errors.user_name && touched.user_name ? (
                <Form.Text style={{ color: "red" }}>
                  {errors.user_name}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <Form.Text style={{ color: "red" }}>{errors.email}</Form.Text>
              ) : null}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="user_mobile"
                value={values.user_mobile}
                onChange={handleChange}
              />
              {errors.user_mobile && touched.user_mobile ? (
                <Form.Text style={{ color: "red" }}>
                  {errors.user_mobile}
                </Form.Text>
              ) : null}
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role_id" value={values.role_id} onChange={handleChange}>
                <option disable>Select Role</option>
                {options &&
                  options.map((item, index) => {
                    return (
                    
                        <option value={item.role_id} >
                          {item.role_name}
                        </option>
                      
                    );
                  })}
              </Form.Select>
              {errors.role_id && touched.gender ? (
                <Form.Text style={{ color: "red" }}>{errors.role_id}</Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              />
              {errors.gender && touched.gender ? (
                <Form.Text style={{ color: "red" }}>{errors.gender}</Form.Text>
              ) : null}
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="registeron"
                value={values.registeron}
                onChange={handleChange}
              />
              {errors.registeron && touched.registeron ? (
                <Form.Text style={{ color: "red" }}>{errors.registeron}</Form.Text>
              ) : null}
            </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && touched.address ? (
              <Form.Text style={{ color: "red" }}>{errors.address}</Form.Text>
            ) : null}
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="state"
                value={values.state}
                onChange={handleChange}
              />
              {errors.state && touched.state ? (
                <Form.Text style={{ color: "red" }}>{errors.state}</Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && touched.city ? (
                <Form.Text style={{ color: "red" }}>{errors.city}</Form.Text>
              ) : null}
            </Form.Group>

           

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                name="pin_code"
                value={values.pin_code}
                onChange={handleChange}
              />
              {errors.pin_code && touched.pin_code ? (
                <Form.Text style={{ color: "red" }}>
                  {errors.pin_code}
                </Form.Text>
              ) : null}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Addusers;
