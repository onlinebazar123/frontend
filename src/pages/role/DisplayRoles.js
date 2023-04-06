import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RoleForm from './RoleForm';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonC from '../../component/buttonComponent/ButtonC';
function DisplayRoles() {
 const [data,setData] = useState([])
 const navigate = useNavigate()
 const loadData = async ()=>{
  const res = await axios.get("http://localhost:8000/role/getrole")
  console.log(res.data.Response)
  setData(res.data.Response)
 }
 useEffect(() => {
  loadData()
 
 }, []);
 const deleteRole = async (id)=>{
  window.alert("Are you sure You want to delete!!")
    await axios.delete(`http://localhost:8000/role/deleterole/${id}`)
    loadData()
 }
 const tdStyle = {
  fontFamily: "serif",
  fontSize: "20px",
  padding: "25px",

};
  return (
    <>
    <Container  style={{ background: "white", padding: "50px", marginTop: "70px" }}>
    <Button style={{float:"right", margin:"20px",background:"#2B293C"}} onClick={()=>navigate("/addroles")}
     ><AddIcon/>Add Roles</Button>
     <Table style={tdStyle} >
     
      <thead >
        <tr>
        <th>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </th>
          <th>Role Id</th>
          <th>Role Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody >
        {
          data.map((item,index)=>{
           return(
            <tr key={item.role_id} className="shadow-sm">
              <td>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </td>
            <td>{item.role_id}</td>
            <td>{item.role_name}</td>
            <td>
          <Button
                      clasName="style"
                      type="button"
                      style={{ background: "#2B293C" }}
                    >
                      <ModeEditOutlineSharpIcon color="white" />
                    </Button>
                    <Button
                    variant="danger"
                      style={{ margin: "10px"}}
                     onClick={()=>{deleteRole(item.role_id)}}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      style={{ margin: "10px" }}
                    
                    >
                      <RemoveRedEyeIcon />
                    </Button>
                    </td>
          </tr>
           )
          })
        }
      
       </tbody>
       </Table>
    </Container>
     
   
    </>
   
  );
}

export default DisplayRoles;