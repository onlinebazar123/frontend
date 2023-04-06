
// import Modal from 'react-bootstrap/Modal';
// import React,{useState,useEffect} from "react"
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import formik, { useFormik } from 'formik'
// import { FormSchema } from './UserFormSchema';
// import axios from 'axios';
// import EditIcon from '@mui/icons-material/Edit';
// function MyVerticallyCenteredModal(props){
//   const [data,setData] = useState([])
//   console.log("props id",props.id)
//   let id  = props.id
//     const initialValues ={
//       user_name:"",
//       user_mobile:"",
//       email:"",
//       gender:"",
//       address:"",
//       state:"",
//       city:"",
//       pin_code:"",
//       password:"",
//       status:"",
//       registeron:""
      
      
//     }
//     const loadData = async(id)=>{
//       const res = await axios.get(`http://localhost:8000/registration/userbyid/${id}`)
//       console.log("response loadData",res.data.response)
//       setData(res.data.response)
//     }
//     useEffect(()=>{
//       loadData(id)
//     },[])
   
//     const {values,errors,handleChange,handleSubmit} = useFormik({
//       initialValues:initialValues,
//       validationSchema:FormSchema,
//       onSubmit:(values)=>{
//         console.log("values of onsubmit",values)
//       }
//     })
//     console.log("Formik",errors.email)
//   //  console.log("Array values",data[0].user_id)
  
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
     
//     >
   
//       <Modal.Body id="contained-modal-title-vcenter"  style={{height:"500px"}}>
//       {/* <Form>
//       <Row className="mb-3"> */}
//         {/* <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" name="user_name"  value={data[0].user_name} onChange={handleChange}/>
//         </Form.Group>
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" value={data[0].email}  onChange={handleChange} />
//         </Form.Group>
//      </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Mobile</Form.Label>
//           <Form.Control type="text" name='user_mobile'  value={data[0].user_mobile}  onChange={handleChange}/>
//         </Form.Group>
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Gender</Form.Label>
//           <Form.Control type="text" name ='gender' value={data[0].gender}   onChange={handleChange}/>
//         </Form.Group>
        
//       </Row>
        
//       <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address</Form.Label>
//         <Form.Control placeholder="1234 Main St" name='address' value={data[0].address}  onChange={handleChange} />
//       </Form.Group>

//       {/* <Form.Group className="mb-3" controlId="formGridAddress2">
//         <Form.Label>Address 2</Form.Label>
//         <Form.Control placeholder="Apartment, studio, or floor" />
//       </Form.Group> */}

//       {/* <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control name='city' value={data[0].city} onChange={handleChange}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>State</Form.Label>
//           <Form.Select defaultValue="Choose..."  onChange={handleChange} name='state'>
//             <option>Choose...</option>
//             <option>...</option>
//           </Form.Select>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Pin Code</Form.Label>
//           <Form.Control name='pin_code' value={data[0].pin_code}  onChange={handleChange}/>
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" id="formGridCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form> */} */}
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// }

// function EditUsers(props) {
//   const [modalShow, setModalShow] = useState(false);
//   const btnStyle = {
//     margin:"5px",
//     padding:"10px",
//     height:"50px"
//      }
//   return (
//     <>
//       <Button variant="primary" style={btnStyle}  onClick={() => setModalShow(true)}>
//        <EditIcon />
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         id={props.id}
//       />
//     </>
//   );
// }

// export  default EditUsers;