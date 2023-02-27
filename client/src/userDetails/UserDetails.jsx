import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../action/useraction';
import {toast} from'react-toastify'
import Loading from '../Loading/Loading';
const UserDetails = () => {

    const dispatch =useDispatch();
    const {user,loading}=useSelector((state)=>state.user);
    const notify = () => toast.success("Logout Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       
     const logoutHandler =async(e)=>{
        e.preventDefault();
        dispatch(logout())
        notify();
     }
    let date=new Date(user.createdAt);
    
  return <>{
    loading?<Loading/>:
    <div className='m-4'>

      <p><b>Name :</b><span className='text-success'>{user.name}</span> </p>
      <p><b>Email :</b> <span className='text-success'>{user.email}</span></p>
      <p><b>Registration Date : </b> <span className='text-success'>{date.toString().substring(0,3)+" "+date.toLocaleDateString()+" "+date.toLocaleTimeString() }</span></p>
      <button className='btn btn-danger mt-2' onClick={(e)=>logoutHandler(e)}>Logout</button>
  </div>
  }
  
  </>
}

export default UserDetails