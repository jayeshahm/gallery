import { setImageData } from "../action/imageSearchAction"
import axios from "axios"

const ImageApiMiddleware = (store) => (next) => (action) => {

    const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";

    switch(action.type) {
        // only catch a specific action
        case 'GET_IMAGE_DATA':
          // continue propagating the action through redux
          // this is our only call to next in this middleware
         
          next(action)
          // fetch data from an API that may take a while to respond
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
        // successfully received data, dispatch a new action with our data
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
     
        // if we don't need to handle this action, we still need to pass it along
        default: next(action)
      }
}

export default ImageApiMiddleware;
