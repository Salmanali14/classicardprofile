import React from 'react'
import ReactPlayer from 'react-player'
import logo from "../images/logo33.png";
import { FaHeart } from "react-icons/fa";

export default function Videlink({userData}) {

  const selectedLink = userData && userData?.links?.find(link => link?.linkId === 13);
  console.log(selectedLink)
      const videoUrl = selectedLink ? selectedLink.value : '';
  return (
   <>
   <div className='w-[100%] flex justify-center ' >
   <div className='flex  flex-col items-center mt-10 w-[90%] '>
   <h1 className='text-white font-bold mb-5'>Free Digital Bussiness Card</h1>
   {videoUrl && (
            <div className='w-[100%] h-[200px] flex justify-center items-center rounded-[10px] overflow-hidden'>
           
              <ReactPlayer
                className='react-player'
                url={videoUrl}
                width='100%'
                height='200px'
              />
            </div>
   )}
        
<div className='w-[100%] bg-black mt-5 h-[370px] rounded-[5px]'>
<div className='flex justify-center items-center w-[100%] mt-5'>
<img className='w-[100px]' src={logo}/>

</div>
<div className='flex justify-center flex-col items-center w-[100%] mt-[20px]'>
<h1 className='text-white text-[15px] font-bold'>Digital Bussiness Card Gernator</h1>
<p className='text-center text-[12px] mt-[20px] text-white w-[95%]'>To create a responsive website homepage using HTML and CSS, follow these simple step-by-step instructions</p>
<h1 className='font-bold text-white text-[20px] mt-[20px]'>Its Free!</h1>
<button className='bg-[#18b580]  h-[40px] w-[40%]  mt-5 ' style={{ backgroundColor:userData?.btnStyle === 1 || userData?.btnStyle === 2 ?  `${userData?.btnBgColor}` :'transparent',border:userData?.btnStyle === 3 || userData?.btnStyle === 4 ?  `1px solid ${userData?.btnBgColor}` :'transparent',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff'  ,
borderRadius: 
  userData?.btnStyle === 2 ? "10px" :
  userData?.btnStyle === 3 ? "20px" :
  userData?.btnStyle === 4 ? "40px" : '',}  } >GET STARTED</button>
</div>
</div>
<h1 className='text-white flex items-center mt-10 mb-5 text-[12px] cursor-pointer'>Create with<FaHeart className='text-red-600 ml-1 mr-1'/> at<p className='underline ml-1'>Classic Card</p></h1>
   </div>
   </div>
   </>
  )
}
