import React from "react";
import trainMainImg  from "../../assets/TrainImages/HeroTrain.jpg"

const TrainHero = ()=>{
    return(
        <div className='h-full flex items-center justify-between w-full flex-col lg:flex-row bg-cover'
             style={{backgroundImage:`url(${trainMainImg})`}}
        >
        <div className='p-8 pt-28 md:p-24 md:pt-36 lg:p-36'>
            <h2 className='text-3xl md:text-5xl  font-extrabold uppercase  text-[#41A4FF]'>
                Easily Book your<br/>Train Tickets online<br/>with 
            </h2>
            <h1 className='text-3xl md:text-5xl font-extrabold uppercase text-[#DEEFFF] py-4'>
                Travely
            </h1>
            <p className='text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-white text-justify '>Traveling by train is one of the most scenic and convenient ways to explore Goa and its surrounding areas. Whether you are arriving in Goa or planning to visit its picturesque towns and cities, the train network offers a comfortable and affordable option for your journey.Exploring Goa by train offers a unique perspective of the region's scenic landscapes and vibrant culture. Whether you're traveling within Goa or arriving from another part of India, the railway network provides a reliable and enjoyable travel experience. Book your train tickets today and embark on a memorable journey through the heart of Goa!</p>
        </div>        
    </div> 
    )
}


export default TrainHero;