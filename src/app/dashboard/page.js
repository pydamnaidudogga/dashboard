'use client'
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import "../../styles/dashboard.css";
import Card from '../components/Card';
import BottomCards from '../components/BottomCards';
import BarChart from '../components/Chart';
import {toast} from 'react-toastify';


const Dashboard = () => {
    // const session=useSession();
    

    // useEffect(()=>{
    //   if(session.status=="unauthenticated"){
    //       redirect("/");
    //   }
    // },[session.status])

    // useEffect(()=>{

    //   if(session.status==="authenticated"){
    //     toast('Sign-in Successful', {
    //       position: toast.POSITION.TOP_RIGHT
    //     })
    //   }

    // })


    // useEffect(()=>{
    //   const fetchData = async ()=>{
    //   try {
    //     // Simulating an asynchronous API call
    //     const response = await fetch('https://mushidipalli-back-end.onrender.com/users/all_users', {
    //       method: 'GET'
    //     });

    //     await response.json();

    //   } catch (error) {
    //     console.error(error);     
       
    //   }
    // }

    // fetchData();


    // })
    
    
  return (
      <div id="dashboardContainer">
        <div id="dashboardLeft">
          <Sidebar/>
        </div>
        <div id="dashboardRight">
          <Navbar/>
          <Card/>
          <BarChart/>
          <BottomCards/>
        </div>
      </div>
  );
};

export default Dashboard;
