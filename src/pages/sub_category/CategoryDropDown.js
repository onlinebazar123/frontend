import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import axios from "axios";
import AddSubCategory from "./AddSubCategory";
import AddSubCategory from "./AddSubCategory";
function CategoryDropDown(props) {
  const [show, setShow] = useState(false);

  const [option, setOption] = useState("");
  const [sortValue, setSortValue] = useState("");
 

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/category/viewcategory");
    setOption(res.data.Response);

  };
console.log(option,"category data")
 
 

  useState(() => {
    getData()
  }, []);
  return (
    <>
      {/* <AddSubCategory/> */}
              
                
                      
                 
    </>
  );
}
export default CategoryDropDown;
