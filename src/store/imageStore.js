import {applyMiddleware, createStore} from 'redux';
import imageSearchReducer from './reducer/imageSearchReducer'
import ImageApiMiddleware from './middleware/imageApiMiddleware';

export const imageStore = createStore(imageSearchReducer ,applyMiddleware(ImageApiMiddleware));