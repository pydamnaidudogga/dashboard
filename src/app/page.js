"use client";
import { useSession } from "next-auth/react";
import "../styles/home.css";
import Form from "@/app/components/page";
import { useEffect, useState } from "react";
import Dashboard from "./dashboard/Dashboard";
import { useRef } from 'react';
import Image from "next/image";
import BottomArrow from "./../../public/BottomArrow.png"


export default function Home() {
  // const router = useRouter();
  const [isLogin,setIsLogin] = useState(false);
  const session = useSession();

  const scrollRef = useRef(null);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(()=>{
    if(session.status=="authenticated"){
        setIsLogin(true);
        // redirect("/dashboard");
       
        // router.push('/dashboard');
    }else{
      setIsLogin(false);
    }
  },[session.status])

  
    {
     return isLogin ? < Dashboard />: 
    <div id="container">
      <div id="left">
        <h1>Board.</h1>
        <br/>
        <div ref={scrollRef} id="scroll-down-div">
          <button onClick={handleScrollDown} id="scroll-down-button">
            Scroll Down
          </button>
          <br/>
          <Image src={BottomArrow} width={20} onClick={handleScrollDown} alt='Scroll'/>
        </div>
      </div>
      <div id="right">
        <Form/>
      </div>
    </div>
}
  

}
