import Table from 'react-bootstrap/Table';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Post from '../../component/pgginatition/Post';
import { Container } from '@mui/system';
function Offers() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage]= useState(2)
  const getUser = async () => {
    setLoading(true)
    const res = await axios.get("http://localhost:8000/user/userview");
    await setPosts(res.data.response);
    setLoading(false)
    // console.log(res)
  };
  console.log(posts);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
    <Container>
      <h1>My data</h1>
      <Post posts={posts} loading={loading}/>
    </Container>
     
        
   

    </>
     );
}

export default  Offers;
