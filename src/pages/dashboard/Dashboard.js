import React from 'react';
import Cards from '../../component/Cards';
import Cdata from '../../component/CardData';
import { Chart } from "react-google-charts";
import { Container } from '@mui/system';
import ButtonC from '../../component/buttonComponent/ButtonC';
import AddIcon from '@mui/icons-material/Add';
import Customer from '../customer/Customer';
import { createStyles, Grid, makeStyles, Paper } 
    from '@mui/material';
const Dashboard = () => {
   
  const data = [
    [
      { type: "date", label: "Day" },
      "Average temperature",
      "Average hours of daylight",
    ],
    [new Date(2014, 0), -0.5, 5.7],
    [new Date(2014, 1), 0.4, 8.7],
    [new Date(2014, 2), 0.5, 12],
    [new Date(2014, 3), 2.9, 15.3],
    [new Date(2014, 4), 6.3, 18.6],
    [new Date(2014, 5), 9, 20.9],
    [new Date(2014, 6), 10.6, 19.8],
    [new Date(2014, 7), 10.3, 16.6],
    [new Date(2014, 8), 7.4, 13.3],
    [new Date(2014, 9), 4.4, 9.9],
    [new Date(2014, 10), 1.1, 6.6],
    [new Date(2014, 11), -0.2, 4.5],
  ];
  const piCharData = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
 const pieOptions = {
  pieHole: 0.5,
    title: "My Daily Activities",
    width: 350,
    height: 300,
  };
  
  const options = {
    chart: {
      title: "Average Temperatures and Daylight in Iceland Throughout the Year",
    },
    width: 600,
    height: 500,
   
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: "Temps" },
      1: { axis: "Daylight" },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: "Temps (Celsius)" },
        Daylight: { label: "Daylight" },
      },
    },
  };
  const comboData = [
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];
  
   const comboOptions = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
    width: 900,
    height: 500,
  };
  
    return (
        <>
      <div className='container' >
        
        <div style={{display:"flex",margin:"20px"}}>
        {
          Cdata.map((item)=>{
            return <Cards  icons={item.icons} title={item.title} discription={item.discription}/>
          })
        }
       
      </div>
     <div className="d-flex" style={{margin:"20px"}}>
      <div>
      <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={comboData}
      options={comboOptions}
    />
      </div>
     <div style={{marginLeft:"20px"}}>
     <Chart
      chartType="PieChart"
      data={piCharData}
      options={pieOptions}
      width={"100%"}
      height={"100%"}
    />
   </div>
   <div style={{marginLeft:"20px"}}>
     <Chart
      chartType="PieChart"
      data={piCharData}
      options={pieOptions}
      width={"100%"}
      height={"100%"}
    />
   </div>
    
        </div>
       <div style={{marginTop:"150px"}}>
       <Customer title="Recent Customers"/>
       </div>
      
      
     
    
      
      
   


</div>
       
      

   

           
        </>
    );
}

export default Dashboard;
