import { setImageData } from "../action/imageSearchAction"
import axios from "axios"

const ImageApiMiddleware = (store) => (next) => (action) => {

    const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";

    switch(action.type) {
        case 'GET_IMAGE_DATA':
         
          next(action)
          axios.get(url, {
            params: {
              api_key: process.env.REACT_APP_SECRET_NAME,
              text: action.text,
              per_page: 24,
              format: "json",
              nojsoncallback: 1,
            },
          })
      .then(res => {
        let imageData = res.data.photos.photo;

        let srcUrl = '';
         let data = [];
         imageData.map((image) => {
          srcUrl = 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg';
          let dataObj = {
            img: srcUrl,
            title: action.text
        }
        data.push(dataObj);
         })

        store.dispatch(setImageData(data,action.text))
      })
      .catch(err => {
        console.log(err);
      })
      
          break;
     
        default: next(action)
      }
}

export default ImageApiMiddleware;
