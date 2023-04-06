import React from 'react';
const Post = ({posts,loading}) => {
   
    if(loading){
         <h2>Loading....</h2>
    }
 console.log("posts value",posts[0].id)
    return (
     
        <div>
            {/* {

              
                 
                    posts.map((ele,index)=>{
                        return(
                          <li>{ele[index].id}</li>
                        )
                       
                    })
                 
             
             
            } */}
        </div>
    );
}

export default Post;
