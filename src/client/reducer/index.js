import { combineReducers } from 'redux';
import flights from './flights';
import hotels from './hotels';
import dashBoard from './dashBoard';


const reducers = combineReducers({ dashBoard, flights, hotels });

export default reducers;
