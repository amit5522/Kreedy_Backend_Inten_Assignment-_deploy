import React from 'react'

import {  toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, register } from '../action/useraction';
import Loading from '../Loading/Loading';
const Login_from = () => {

  const dispatch = useDispatch();
  const { loading, user, isAuthenticated, error } = useSelector((state) => state.user);

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [reg, setreg] = useState(false);

  const submitHandlerlogin = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));


  }




  const submitHandlerreg = async (e) => {
    e.preventDefault();
    const info = {
      "name": name,
      "email": email,
      "password": password
    }
    dispatch(register(info));



  }

  const changereg = (e) => {
    e.preventDefault();
    setreg(!reg);
  }

  const errormessge = (e) => toast.error(e, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  useEffect(() => {

    if (error && error !== 'Please Login To Access The Resource') {
      errormessge(error)
    }
  }, [loading, user, isAuthenticated, error])

  return <>
    <div>
      {loading ? <Loading /> :
        <div>
          { reg?<div class="m-4" style={{ width: '50vw' }}>
            <h3 className='bg-secondary text-muted'>Login Form</h3>
            <label for="exampleFormControlInput2" class="form-label">Email address</label>
            <input required type="email" class="form-control" onChange={(e) => setemail(e.target.value)} value={email} id="exampleFormControlInput2" placeholder="Email*" />
            <label for="exampleFormControlInput3" class="form-label">Password</label>
            <input required type="password" class="form-control" onChange={(e) => setpassword(e.target.value)} value={password} id="exampleFormControlInput3" placeholder="password*" />
            <button type="button" class="btn btn-success mt-1" onClick={(e) => submitHandlerlogin(e)} >Login</button>
            <button type="button" class="btn btn-warning m-3" onClick={(e) => changereg(e)} >{"Go On Register Form"}</button>
        </div>
        :
        <div class="m-4" style={{ width: '50vw' }}>
            <h3 className='bg-secondary text-muted'>Registration Form</h3>
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input required min='4' max='20' type="text" class="form-control" onChange={(e) => setname(e.target.value)} value={name} id="exampleFormControlInput1" placeholder="Name*" />
            <label for="exampleFormControlInput2" class="form-label">Email address</label>
            <input required type="email" class="form-control" onChange={(e) => setemail(e.target.value)} value={email} id="exampleFormControlInput2" placeholder="Email*" />
            <label for="exampleFormControlInput3" class="form-label">Password</label>
            <input required type="password" class="form-control" onChange={(e) => setpassword(e.target.value)} value={password} id="exampleFormControlInput3" placeholder="password*" />
            <button type="button" class="btn btn-success mt-1" onClick={(e) => submitHandlerreg(e)} >Register</button>
            <button type="button" class=" btn btn-warning m-3 " onClick={(e) => changereg(e)} >Go On Login Form</button>
          </div>
        }
        </div>
        }
    </div>

  </>
}

export default Login_from