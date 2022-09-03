import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios';

const AddEdit = () => {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [contact,setContact]=useState('');
const location =useLocation();
const navigate=useNavigate();


  const  handleSubmit = async()=>{
    const res = await axios.post(`http://localhost:5000/user`,{
      name:name,
      email:email,
      contact:contact
    });
    if(res.status ===200){
      console.log(res.data);
      toast("User Created")
      navigate('/')
    }
  }

  const updateUser=async()=>{
    const res=await axios.put(`http://localhost:5000/user/${location.state.userData.id}`,{
      name:name,
      email:email,
      contact:contact
    });
    if(res.status ===200){
      console.log(res.data);
      toast("User Updated")
      navigate('/')
    }
  }

  return (
    <div>
      <h2>{location.pathname==="/add"? 'Add User': 'View/Update User Details' }</h2>
        <div>
          <label>Name : </label>
          <input placeholder='Enter Name' type={'text'} value={name} onChange={((e)=>{setName(e.target.value)})}  />
        </div>
        <div>
          <label>Email : </label>
          <input placeholder='Enter Email' type={'email'} value={ email} onChange={((e)=>{setEmail(e.target.value)})}/>
        </div>
        <div>
          <label>Contact : </label>
          <input placeholder='Enter Contact' type={'tel'} value={contact} onChange={((e)=>{setContact(e.target.value)})}/>
        </div>
        <button type='submit' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default AddEdit