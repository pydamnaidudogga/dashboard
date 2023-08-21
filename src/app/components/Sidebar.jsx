import React, { useState } from 'react'
import "../../styles/sidebar.css"
import dashboard from "./../../../public/dashboard.png";
import transactionIcon from "./../../../public/transaction_icon.png";
import settingsIcon from "./../../../public/setting_icon.png";
import userIcon from "./../../../public/user_icon.png";
import scheduleIcon from "./../../../public/schedule_icon.png"
import Image from 'next/image'
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleoptions = ()=>{
    
        
        if(isOpen){
           
            setIsOpen(false);

        }else{
           
            setIsOpen(true);
        }
        
        
        

    }
  return (
    <div id="main">
        <div className='sidebar-heading-conatainer' >
        <h1 id="sidebar-heading">Board.</h1>
        <h1 onClick={(e)=>handleoptions(e)}  style={{marginTop:'-5px'}}  className='options-button' >...</h1>

        </div>
        
        <div className={` menu  ${isOpen ? 'open' : 'close'}`}>
            <div className="menu-item">
                <Image src={dashboard} width={20} height={20} alt="Dashboard"/>
                <p onClick={(e)=>handleoptions(e)} >Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={transactionIcon} width={20} height={23} alt="transaction"/>
                <p onClick={(e)=>handleoptions(e)} >Transactions</p>
            </div>
            <div className="menu-item">
                <Image src={scheduleIcon} width={20} height={20} alt="Schedule"/>
                <p onClick={(e)=>handleoptions(e)} >Schedules</p>
            </div>
            <div className="menu-item">
                <Image src={userIcon} width={20} height={20} alt="user"/>
                <p onClick={(e)=>handleoptions(e)} >Users</p>
            </div>
            <div className="menu-item">
                <Image src={settingsIcon} width={19} height={20} alt="Settings"/>
                <p onClick={(e)=>handleoptions(e)} >Settings</p>
            </div>
        </div>
        <div className={` footer  ${isOpen ? 'open' : 'close'}`} >
            <p onClick={(e)=>handleoptions(e)} >Help</p>
            <p onClick={(e)=>handleoptions(e)} >Contact</p>
        </div>
    </div>
  )
}

export default Sidebar