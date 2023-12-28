import {createStore} from 'redux';
import imageSearchReducer from './reducer/imageSearchReducer'

export const imageStore = createStore(imageSearchReducer);