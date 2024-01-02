import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from "react-redux";
import { categories } from "../../constants/searchConstants";
import GetImageData from "../../service/getImageData";

const Gallery = (props) => {
  let category = props.category;
  let imageData;
  let storeData = useSelector (state=>state?.data);
  if(categories.includes(category)){
    imageData = storeData;
  }else{
   imageData =  GetImageData(category);
  }
  
  
  


  return (
    <div>
      <div>
        <h2 style={
          {
            display: "flex",
            justifyContent: "center"
          }
        }>{category}</h2>
      </div>
      <div>{imageData && imageData[category] && 
      <ImageList  cols={4}>
      {imageData[category]?.map((item, index) => (
        <ImageListItem key={index}>
          <img
          style={{width:250, height:200, paddingLeft:40, paddingBottom: 10}}
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>}
      
      </div>
    </div>
    
  );
};

export default Gallery;
