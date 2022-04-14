import './App.css';
import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import MainPage from './components/MainPage/MainPage';
import MyProducts from './components/MyProducts/MyProducts';
import SubCategories from './components/SubCategories/SubCategories';
import ShowAllSubProducts from './components/ShowAllSubProducts/ShowAllSubProducts';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [])
  
  const checkAuth = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/refresh`, {withCredentials: true})
      localStorage.setItem('token', response.data.accessToken);
      dispatch({type: 'SET_USER', payload: response.data.user});

      
    } catch (e) {
      console.log(e.response?.data?.message);
    } 
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/' element={ <MainPage /> } />
        
        <Route path='/signin' element={ <SignIn /> } />
        <Route path='/profile/:id' element={< Profile/> } /> 
        <Route path='/cart/:id' element={< ShoppingCart/> } /> 
        <Route path='/category/:id' element={< SubCategories/> } /> 
        <Route path='profile/myProducts' element={ <MyProducts /> }/>
        <Route path='/sub/:id' element={ <ShowAllSubProducts /> }/>
        {/* {user.email? <Route path='/' element={ <Game /> } /> : <Route path='/' element={ <SignIn /> } />} */}
      </Routes>
    </div>

  );
}

export default App;
