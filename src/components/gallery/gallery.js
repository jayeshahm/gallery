import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from 'react-redux';

const Gallery = () => {

  const imageData = useSelector (state=>state);

  console.log("Image Data", imageData.data)


  return ( imageData && 
    
    <ImageList sx={{ width: 1, height: 1 }} cols={4}>
      {imageData?.data.map((item, index) => (
        <ImageListItem key={index}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;
