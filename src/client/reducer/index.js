import { combineReducers } from 'redux';
import filghts from './flights';
import hotels from './hotels';
import dashBoard from './dashBoard';


const reducers = combineReducers({ revenues, dashBoard, flights, hotels });

export default reducers;
