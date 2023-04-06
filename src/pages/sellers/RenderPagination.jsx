// import React from 'react';
// import Pagination from "react-bootstrap/Pagination";
// const RenderPagination = (props) => {
//     const totalPosts = props.totalPosts;
//     const postPerPage = props.postPerPage
//     const pageNumber = []
//     for( var i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
//         pageNumber.push(i)
//     }
//     return (
//         <>
        
//         {
//             <Pagination>
//                 {
//                  pageNumber.map((number)=>{
//                         return(<>
//                          <Pagination.Item onClick={()=>{paginate(number)}}>{number}</Pagination.Item>
//                         </>)
//                     })
//                 }
          
//             </Pagination>
//         }
      
//         </>
//     );
// }

// export default RenderPagination;
