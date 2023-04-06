 const renderPagination = ({postperpage,totalPosts})=>{
  const pageNumber = [];
  for(let i = 1;i<= Math.ceil(totalPosts/postPerPage);i++){
    pageNumber.push(i)
  }

    return(

      <Pagination>
        {
          pageNumber.map(number=>{
            return(
              <>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Next />
              </>
             
             
            )
          })
        }
      </Pagination> 
    
    )
  }
 
