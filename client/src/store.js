import{composeWithDevTools} from 'redux-devtools-extension';
import{createStore,combineReducers,applyMiddleware} from'redux';
import thunk from 'redux-thunk'
import { userReducer } from './reducer/user_reducer';


const reducer = combineReducers({
    user:userReducer
})

let initialState={
    
 };
 const middleware =[thunk];
 
 const store =createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
 );
 
 export default store;
 