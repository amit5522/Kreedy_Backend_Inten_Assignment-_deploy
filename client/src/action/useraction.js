

import {
    LOGIN_REQUEST, 
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL}
    from '../constant/user_constant'

import axios from 'axios';



//Login user
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json"
          },
          withCredentials: true
        }
  
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/login`,
        { email, password },
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  // Register user
  export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
      const { data } = await axios.post(`http://localhost:8000/api/v1/register`, userData,config);
      console.log(data);
      console.log(data);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json"
          },
          withCredentials: true
        }
  
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/me`,config
       
      );
      
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };



  //Logout user
export const logout = () => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
            }
  
      
  
       await axios.get(`http://localhost:8000/api/v1/logout`,config);
  
      dispatch({ type: LOGOUT_SUCCESS});
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };