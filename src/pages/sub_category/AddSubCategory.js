import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';


function AddSubCategory() {
  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [options,setOptions] = useState([])
  const [sortValue,setSortValue] = useState("")
  const [catId,setCatId] = useState("")
  const addImage = (e)=>{setImage(e.target.files[0])}
  const submitData = async ()=>{
    const formdata = new FormData()
    formdata.append("category_id",sortValue)
    formdata.append("sub_category_name",name)
    formdata.append("sub_category_image",image)
    console.log(formdata)
    const config = {
      headers:{
      "Content-Type" :"multipart/form-data"
    }}
    const api = await axios.post("http://localhost:8000/subcategory/addsubcategory",formdata,config)
    
    console.log(api)
    setSortValue("")
  }
  const loadCategory = async () => {
    const resp = await axios.get("http://localhost:8000/category/viewcategory");
    console.log(resp)
    setOptions(resp.data.response);

  };
  useEffect(()=>{
    loadCategory()
  },[])
  console.log("Category id",catId)
 console.log(options)
 console.log("sort value",sortValue)
  return (
    <>
     <h4>Add Subcategory</h4>
     <Container className="shadow-sm p-5  bg-white rounded" style={{marginTop:"80px"}}>
      <Container style={{width:"100%"}}>
      <Form>
     
      <Row>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
        <select
                class="form-select"
                aria-label="Default select example"
                value={sortValue}
                onChange={(e) => {
                  setSortValue(e.target.value);
                }}
              >
                <option selected>Open this select menu</option>
                {options &&
                  options.map((item, index) => {
                    return (
                        <>
                        <option value={item.category_id} key={index}>
                        {item.category_name}
                      </option>
                      {/* <option>  </option> */}
                      {/* {setCatId(item.category_id)} */}
                    
                        </>
                      
                    );
                  })}
                  
              </select>
        {/* <Form.Control type="text"  onChange={(e)=>setName(e.target.value)}/> */}
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sub Category Name</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
        </Col>
        
       
      </Row>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sub Category Image</Form.Label>
        <Form.Control  type="file"  onChange={addImage} />
      </Form.Group>
   
    
     <Container className='d-grid  vertical-center w-50 p-4'><Button  size ="lg" width="20px" onClick={submitData}>
        Submit
      </Button></Container>
   
      
      {/* <Button variant="primary" onClick={submitData}>
        Submit
      </Button> */}
    </Form>
     
    

      </Container>
     
      </Container>
      
  
    </>
    
  );
}

export default AddSubCategory;