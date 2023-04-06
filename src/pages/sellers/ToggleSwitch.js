import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);
  const[status,setStatus] = useState("Deactive")

  const handleChange = val => {
    setChecked(val)
    if(val===true){
        setStatus("Active")
    }
}
console.log("status",status)
console.log(checked)
  return (
    <div style={{margin:"10px"}}>
      
      <ReactSwitch
       checked={checked}
       onChange={handleChange}
        
      />
    </div>
  );
}

export default ToggleSwitch;
