import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState,useRef } from "react";
import Button from 'react-bootstrap/Button';

import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function Admin() {
  const navigate = useNavigate()
  let inputRef = useRef("")
 
  const [myData, setData] = useState([]);
  
  const getApiData = async () => {
    const res = await axios.get("http://localhost:8000/admindetails/viewadmin");
    console.log(res);

    setData(res.data);

    // const api = await fetch("http://localhost:8000/admin/viewadmin",{
    //   method:"GET"
    // });
    // const res = await api.json()
    //   console.log(res)
    //   setData(res)
  };
  useEffect(() => {
    getApiData();
  }, []);
  // console.log(myData)
  const admin = async (admin_id) => {
    // console.log("user_id" ,admin_id);
    const res = await axios.delete(`http://localhost:8000/admindetails/deleteadmin/${admin_id}`);
    console.log("first",res)
    getApiData()
  };
  const handleShow = (admin_id,
    admin_name,
    email_id,
    mobile_no,
    gender,
    password,
    aadhar_no,
    pan_card,
    gst_no)=>{
      console.log(
        admin_id,
        admin_name,
        email_id,
        mobile_no,
        gender,
        password,
        aadhar_no,
        pan_card,
        gst_no,
      )
    }
    console.log( "useref",inputRef.style.background);
  return (
    <>
   
      <div style={{background:"white",padding:"50px"}} ref={inputRef} >
      <Button style={{background:"#2B293C",float:"right",margin:"20px"}} onClick={()=>navigate('/addadmin')} ><AddIcon/>Add Admin</Button>
        <div>
          <Table style={{background:"white"}}>
            <thead style={{background:"#E6E6FA"}}>
              <tr>
                <th>admin_name</th>
                <th>email_id</th>
                <th>mobile_no</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody >
              {myData.map((val) => {
                return (
                  <tr>
                    <td>{val.admin_name}</td>
                    <td>{val.email_id}</td>
                    <td>{val.mobile_no}</td>
                  <td>
                      <Button
                        style={{background:"#2B293C"}}
                       onClick={()=>admin(val.admin_id)}
                      >
                        <DeleteIcon/>
                      </Button>
                    </td>
                   
                  </tr>
                );
              })}

            </tbody>
          </Table>

        </div>
      </div>
    </>
  );
}

export default Admin;
