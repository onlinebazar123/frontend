import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function DisplaySubCategory() {
    const [data,setData] = useState([])
    const getData =  async ()=>{
        const res = await axios.get("http://localhost:8000/subcategory/displaysubcategory")
        setData(res.data.response)
        console.log(res.data.response)
       
    }
    useEffect(()=>{
        // e.preventDefault()
        getData()
    },[])
    const navigate = useNavigate()
    const tdStyle = {
      fontFamily:"serif",fontSize:"20px",
      padding:"10px",
      // marginTop:"900px"
    }
    const deleteSubCategory = async(id)=>{
      window.alert("Are You sure You want to delete")
      const res = axios.delete(`http://localhost:8000/subcategory/deletesubcategory/${id}`)
      console.log("subcategory deleted",res)
      getData()
    }
  return (
    <>
    <h4>Sub Categories</h4>
    <div style={{background:"light",padding:"50px"}}>
      
    <Button style={{float:"right", margin:"50px",background:"#2B293C"}} onClick={()=>navigate('/addsubcategory')}><AddIcon/>Add Sub Category</Button>
      
    <div style={{background:"white",padding:"50px"}}>
        <Table>
      <thead style={tdStyle} >
        <tr>
        <th>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </th>
          <th>Category</th>
          <th>Sub Category</th>
          <th>Sub Category Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      
      <tbody>
      {data.map((val,index)=>{
        return(
            <tr style={tdStyle} className='shadow-sm p-3 mb-5'>
           <td>
                <input
                  type="checkbox"
                  className=""
                  style={{ width: " 20px", height: "20px" }}
                />
              </td>
              <td>{val.category_name}</td>
          <td > {val.sub_category_name}</td>
          <td><img className ="rounded-circle bg-white" height="60px" width="60px" src={`http://localhost:8000/${val.sub_category_image}`}/></td>
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
                     onClick={()=>{deleteSubCategory(val.sub_category_id)}}
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
      })}
        
        
      </tbody>
    </Table>

    </div>
    </div>
        
    </>
    
    
  );
}

export default DisplaySubCategory;