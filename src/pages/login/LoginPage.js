import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import App from '../App';
import {Link,useNavigate} from 'react-router-dom'

function LoginPage() {
    const [data,setdata] = useState({})
    const [uname,setUname] = useState("")
    const [pass,setPass] = useState("")
    const [status,setStatus] = useState("")
    const navigate=useNavigate();

    const userLogin = async ()=>{
   
        const res = await axios.get(`http://localhost:5000/login?email='${uname}'&password='${pass}'`)
         setdata(res.data.response)
         console.log(res.data.status)
        if(res.data.status === true){
           setStatus(<p style={{color:"blue"}}>User loged in</p>)
           navigate("/home")
        }
        else{
          setStatus(<p style={{color:"red"}}>invalid user</p>)
        }
      
        
    }
   
    const formHandler= (e)=>{
        e.preventDefault();
        userLogin()
    }
     console.log(status)
    


  return (
    <>
  
        <Container style={{marginTop:"50px",background:"lightblue",width:"400px"}} className="shadow p-3 mb-5 bg-lightblue rounded">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={uname} onChange={(e)=>setUname(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={pass} onChange={(e)=>setPass(e.target.value)}/>
      </Form.Group>
      <p>{status}</p>


      
      
     
      <Button variant="primary" type="submit" onClick={formHandler}>
        Submit
      </Button>
      Dont have account  <Link to="/Home">Contact</Link> 
    </Form>
        </Container>
    
   
    </>
    
  );
}

export default LoginPage;

