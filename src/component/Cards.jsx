import React from "react";
import Cdata from "./CardData";



import { Avatar, Card } from "antd";
import { fontFamily, fontSize } from "@mui/system";
const { Meta } = Card;
// console.log(Cdata)
const Cards = (props) => (
  <Card
    style={{
      width: 300,
      marginLeft: 20,
      padding:20,
      fontFamily:"sans-serif",
      fontSize:20,
      background:"linear-gradient(40deg, blue 50%, red )",
      height:"150px",
    
    }}
  >
    <Meta
      
     
      avatar={props.icons}
      title={props.title}
      description={props.discription}
    />
  </Card>
);
export default Cards;
