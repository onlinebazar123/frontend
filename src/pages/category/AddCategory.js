import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddCategory() {
 const [categoryName,setCategoryName] = useState('')
 const [categoryImage,setCategoryImage]= useState('')
 const addImage = (e)=>{setCategoryImage(e.target.files[0])}
 const submitData = async(e)=>{
  e.preventDefault()
  const form = new FormData()
  form.append("category_name", categoryName)
  form.append("category_image",categoryImage)
  const config = {
    headers:{'Content-Type':'multipart/form-data'}
  }
  const res = await axios.post("http://localhost:8000/category/addcategory",form,config)
  console.log(res)
  
 }
console.log(categoryName)
console.log(categoryImage)
  return (
    <>
    <h4>Add Categories</h4>
    <Container className="shadow-sm p-5  bg-white rounded " style={{marginTop:"80px"}}>
    <Container style={{width:"100%"}}>
    <Form>
      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>setCategoryName(e.target.value)}/>
        </Form.Group>

      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category Image</Form.Label>
        <Form.Control type="file" onChange={addImage}/>
      </Form.Group>
      
      </Col>
      </Row>
      
      
     
     
        <Container className='d-grid  vertical-center w-50 p-4'><Button  size ="lg" width="20px" onClick={submitData}>
        Submit
      </Button></Container>
     
    </Form>
    
    </Container>
     
     </Container>
    </>
    
  );
}

export default AddCategory;
      
      