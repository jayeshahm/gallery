import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { setImageData } from "../store/action/imageSearchAction";



const GetImageData = (searchText) => {
  let data = [];

  const dispatch = useDispatch();

    const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";

    axios.get(url, {
      params: {
        api_key: process.env.REACT_APP_SECRET_NAME,
        text: searchText,
        per_page: 24,
        format: "json",
        nojsoncallback: 1,
      },
    }).then((response)=>{
        let imageData = response.data.photos.photo;

        let srcUrl = '';
       

        imageData.map((image) => {
        srcUrl = 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg'
        let dataObj = {
            img: srcUrl,
            title: searchText
        }
        if(!data.some(el => el.img === dataObj.img)){
          data.push(dataObj);
        }
        
        })
    }).catch((error)=>{
        console.log(error);
    })
  
  return data;
};

export default GetImageData;
