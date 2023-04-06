import React from 'react';
import './Button.css'
const ButtonC = (props) => {
    return (
        <div> 
            <h1 className='button' onClick={()=>props.onBtnClick}>{props.icon}{props.text}</h1>
        </div>
    );
}

export default ButtonC;
