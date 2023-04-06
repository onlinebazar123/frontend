import Table from 'react-bootstrap/Table';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import DeleteIcon from '@mui/icons-material/Delete';
import Post from '../../component/pgginatition/Post';
import "./category.css"
function DisplayCategory() {


  const navigate = useNavigate()
    const [categoryData,setCategoryData] = useState([])
    const getData = async()=>{
   
        const api_data = await axios.get("http://localhost:8000/category/viewcategory")
        setCategoryData(api_data.data.response)
     
        // console.log(api_data)
    }
    useEffect(()=>{
       getData()},[])
       console.log(categoryData)
       const tdStyle = {
        fontFamily:"serif",fontSize:"20px",
        // padding:"5px"
      }
 
      const deleteCateory = async (id)=>{
        window.alert("Are you sure you want to delete!!")
        await axios.delete(`http://localhost:8000/category/deletecategory/${id}`)
        getData()
      }
  return (
    <>
    <h4>Categories</h4>
     
   
    <div style={{background:"light",padding:"50px"}}>
    <Button className='styled' style={{float:"right", margin:"50px",background:"#2B293C"}} onClick={()=>navigate('/addcategory')}><AddIcon/>Add Category</Button>
      <div style={{background:"white",padding:"50px"}} >
      <Table   hover >
      
      <thead style={tdStyle}>
        
        <tr>
        <th>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </th>
         
          <th>Category Name</th>
          <th>Category Image</th>
          <th>Actions</th>
         
        </tr>
      </thead>
      <tbody>
        {categoryData.map((ele,index)=>{
          return( 
          <tr style={tdStyle} className='shadow-sm p-3 mb-5' key={ele.category_id}>
            <td>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </td>
           
            <td>{ele.category_name}</td>
            <td><img  className ="rounded-circle bg-white" height="60px" width="60px" src={`http://localhost:8000/${ele.category_image}`}/></td>
            <td>
          <Button
                      className="style"
                      type="button"
                      style={{ background: "#2B293C" }}
                    >
                      <ModeEditOutlineSharpIcon color="white" />
                    </Button>
                    <Button
                    variant="danger"
                      style={{ margin: "10px"}}
                     onClick={()=>{deleteCateory(ele.category_id)}}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      style={{ margin: "10px" }}
                    
                    >
                      <RemoveRedEyeIcon />
                    </Button>
                    </td>
            
          </tr>)
        })}
       
       
      </tbody>
    </Table>
      </div>
      </div>
      
  
   
   
    </>
    
  );
}

export default DisplayCategory;