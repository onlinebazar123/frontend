import React from 'react';

const RenderPagination = (totalPage,PostPerpage) => {
    const Page = []
    for(var i =0;i< Math.ceil(totalPage/PostPerpage);i++){
         Page.push(i)
    }
    return (
        <div>
            {
                Page.map((number)=>{
                    <li>{number}</li>
                })
            }
        </div>
    );
}

export default RenderPagination;
