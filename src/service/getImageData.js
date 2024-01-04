import axios from "axios";
import { useEffect, useState } from "react";

const GetImageData = (searchText, useSearch) => {
  let data = [];

  const [details, setDetails] = useState([])

   async function fetchData(searchText){
    const url =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search";
   return await axios
    .get(url, {
      params: {
        api_key: process.env.REACT_APP_SECRET_NAME,
        text: searchText,
        per_page: 24,
        format: "json",
        nojsoncallback: 1,
      },
    })
    .then((res) => {
      // successfully received data, dispatch a new action with our data
      let imageData = res.data.photos.photo;

      
      let data = [];
      imageData.map((image) => {
        let srcUrl =
          "https://farm" +
          image.farm +
          ".staticflickr.com/" +
          image.server +
          "/" +
          image.id +
          "_" +
          image.secret +
          ".jpg";
        let dataObj = {
          img: srcUrl,
          title: searchText,
        };
        data.push(dataObj);
      });
      return data;
      
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(()=>{
    if(!useSearch){
      setDetails([])
    }else{
     fetchData(searchText).then((res) => {setDetails(res)})
    }
  },[searchText])

  return { [searchText]: details };
};

export default GetImageData;
