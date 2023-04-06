import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios'
import { Container } from '@mui/system';
import { roleFormSchema } from './RoleFormSchema';
import { Formik ,useFormik} from 'formik';
function RoleForm() {

  // const [role_name,setRollName] =useState("")
  // const [role_id, setRoleId] = useState("")
  const initialValues = {
    role_name:"",
    role_id:""
  }

const { values, errors, handleChange, handleSubmit, touched } = useFormik({
  initialValues: initialValues,
  validationSchema: roleFormSchema,
  onSubmit: (values) => {
    console.log(values, "values");
    uploadData()
  },
});
console.log(errors)
  const uploadData = async ()=>{
   const role_id = values.role_id
   const role_name = values.role_name
   const data = {role_id,role_name}
  const res = await axios.post("http://localhost:8000/role/addrole",data)
  console.log("Response",res)

  

  console.log("api data",res)
  }

  return (
    <>
     <Container  className="shadow-sm p-5 w-50 bg-white rounded "
        style={{ marginTop: "60px" }}>
          <h3 style={{alignItems:"center"}}>Add Roles</h3>
     <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role Id</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="role_id"
                value={values.role_id}
                onChange={handleChange}
              />
             {errors.role_id && touched.role_id ? <Form.Text style={{color:"red"}}>{errors.role_id}</Form.Text>:null} 
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="role_name"
                value={values.role_name}
                onChange={handleChange}
              />
              {errors.role_name && touched.role_name ?  <Form.Text style={{color:"red"}}>{errors.role_name}</Form.Text> :null }
             
            </Form.Group>
          
          </Form>
        
          <Button variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>
       
     </Container>
    
         
     
    </>
  );
}
export default RoleForm;
