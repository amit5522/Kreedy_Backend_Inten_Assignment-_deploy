
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Login/Login_from';
import {useSelector,useDispatch} from'react-redux'
import { loadUser } from './action/useraction';
import UserDetails from './userDetails/UserDetails';


function App() {

  const dispatch =useDispatch();
  const{isAuthenticated} = useSelector((state)=>state.user);
   useEffect(()=>{
         dispatch(loadUser());
        
   },[dispatch])
 
  
 return<>
    {!isAuthenticated?<Login/>:<UserDetails/>}
     <ToastContainer/>
     
   
  </>
}

export default App;
