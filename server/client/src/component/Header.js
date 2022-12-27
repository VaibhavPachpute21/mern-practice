import React,{useEffect,useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../Header.css'


export default function Header() {
const [activeTab,setActiveTab]=useState("Home");
const location =useLocation();
useEffect(()=>{
    if(location.pathname=="/"){
        setActiveTab("Home")
    }else if(location.pathname=="Add"){
        setActiveTab("Add")
    }
},[location])


    return (
    <div className='Header'>
        <p className='log'>CRUD</p>
        <div className='header-right'>
            <Link to={'/'} > <p className={activeTab=="Home"? 'active':""} onClick={(()=>{setActiveTab("Home");})} >Home</p> </Link>
            <Link to={'/add'} > <p className={activeTab=="Add"? 'active':""} onClick={()=>setActiveTab("Add")} >Add</p> </Link>
        </div>
    </div>
  )
}
