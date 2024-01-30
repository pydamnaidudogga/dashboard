import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import bell from "./../../../public/bell.png"
import user from "./../../../public/user.png";
import logout from "./../../../public/logout.png"
import "../../styles/navbar.css"
import { signOut, useSession } from 'next-auth/react';
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  // const session=useSession();
  const [userImage,setUserImage]=useState("")

  // const handleLogout=()=>{
   
  //   signOut("google");
  //   toast.success('Log-out Successful', {
  //     position: toast.POSITION.TOP_RIGHT
  //   })
  // }

  // useEffect(()=>{
  //   if(session.status=="authenticated"){
  //     setUserImage(session.data.user.image)
  //   }
  // },[session.status])

  return (
    <div id="nav-container">
        <ToastContainer  autoClose={1000} />
        <div id="nav-left">
            <h1>Dashboard</h1>
        </div>
        <div id="nav-right">
            <input type="text" placeholder="Search" id="search" />
            <Image src={bell} id="navIcon" width={18} height={20} alt='Alert'/>
            <Image src={logout} id="navIcon" width={22} height={22} alt='Logout'  />
            <div id="user">
            <Image src={userImage?userImage:user} width={30} height={30} id="userImage" alt='user' />
            </div>
        </div>
    </div>
  )
}

export default Navbar