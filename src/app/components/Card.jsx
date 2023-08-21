import React from 'react'
import "../../styles/card.css"
import Image from 'next/image'
import revenue from "./../../../public/revenue.png";
import users from "./../../../public/users.png"
import transaction from "./../../../public/transaction.png"
import like from "./../../../public/like.png"

const Card = () => {
    const data = [
        {
            title:"Total Revenues",
            rate:'$ 2,129,430',
            icon:revenue
        },
        {
            title:"Total Transactions",
            rate:'1,520',
            icon:transaction
        },
        {
            title:"Total Likes",
            rate:'9,721',
            icon:like
        },
        {
            title:"Total Users",
            rate:'892',
            icon:users
        }
    ]

    
    


    return(
        <div id='card-div' >

         {
            data.map((data, index)=>(
                
                < CardItem key={index}  data = {data}  />
            ))
         }

        </div>
    )
        
      
    
  
}

const CardItem = ({data})=>{
    return(

        <div className="box">
        <p>{data.title}</p>
        <h2>{data.rate}</h2>
        <Image src={data.icon.src} width={26} height={24} className="card-icon" alt='Card' />
        </div>


    )
    


} 

export default Card