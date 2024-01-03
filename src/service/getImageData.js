import axios from "axios";
import { useEffect, useState } from "react";

const GetImageData = async (searchText, useSearch) => {
  let data = [];
  const [details, setDetails] = useState([]);

  if(!useSearch){
    return {}
  }

  const url =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search";
  await axios
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

      let srcUrl = "";
      data = [];
      imageData.map((image) => {
        srcUrl =
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
    })
    .catch((err) => {
      console.log(err);
    });
    console.log("Data==>",data)

  return { [searchText]: data };
};

export default GetImageData;
