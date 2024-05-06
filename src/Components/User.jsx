import React from 'react'
import profile from '../images/profile.png'
import { IoMdContacts } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import logoblack from'../images/logoblack.jpeg'
export default function User({userData,downloadVcf,sendUserData}) {
    const contactItems = [
        { icon: <TbDeviceLandlinePhone />, label: 'Office', classes: 'text-[20px] text-black' },
        { icon: <FaMobileAlt />, label: 'Mobile', classes: 'text-[20px] text-black' },
        { icon: <AiOutlineMail />, label: 'Email', classes: 'text-[20px] text-black' },
        { icon: <TbWorld />, label: 'Website', classes: 'text-[20px] text-black' },
        { icon: <FaRegCalendarAlt />, label: 'Calendar', classes: 'text-[20px] text-black' }
      ];
      function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
          return text;
        } else {
          return text?.slice(0, maxLength) + '...';
        }
      }

  return (
  <>
  <div className='w-[100%] flex justify-center     relative' >
  {userData?.profileUrl &&(
  <div className='absolute top-[-65px] '> <img   style={{width:"130px",height:"130px",borderRadius:"50%",objectFit:"cover"}}  src={userData?.profileUrl}/>
  </div>)}
  <div className='flex  flex-col items-center w-[100%]'>
  <h1 className='text-white mt-20 font-bold' style={userData?.nameColor ? { color: `${userData?.nameColor}` } : { color: '#ffffff' }}>{truncateText(userData?.firstName,20)} {truncateText(userData?.lastName,20)}</h1>
  {userData?.titleStatus===1 &&(
    <h1 className=' text-white text-[15px] mb-1 '  style={userData?.titleColor ? { color: `${userData?.titleColor}` } : { color: '#ffffff' }}>{userData?.designation} </h1>
      )}
      {userData?.educationStatus===1 &&(
        <h1 className='  text-[15px] text-black mb-1 ' >{userData?.education} </h1>
          )}
      {userData?.usernameStatus===1 &&(
        <h1 className='  text-[15px] text-black mb-1 ' >{userData?.username} </h1>
          )}
          {userData?.contactStatus===1 &&(
            <h1 className='  text-[15px] text-black mb-1 ' >{userData?.phone} </h1>
              )}
              <div className="flex justify-center items-center flex-wrap w-[90%]">
              {userData?.featureSkillsStatus === 1 && (
                userData?.featureSkills.map((image, index) => (
                  <div key={index} className="flex justify-center items-center ">
                 <p className="flex justify-center items-center">| {image} |</p>
                  </div>
                ))
              )}
              </div>
  <p className='text-white text-sm  mt-2'>{truncateText(userData?.email,12)} | {truncateText(userData?.username,12)} | {truncateText(userData?.education,18)}</p>
  <p className='text-gray-400 text-[10px] mt-2'>{truncateText(userData?.address,60)}</p>
  <button onClick={downloadVcf} className='w-[90%] h-[40px] bg-[#18b580] flex justify-center items-center  font-[600] mt-10  ' style={{ backgroundColor:userData?.btnStyle === 1 || userData?.btnStyle === 2 ?  `${userData?.btnBgColor}` :'transparent',border:userData?.btnStyle === 3 || userData?.btnStyle === 4 ?  `1px solid ${userData?.btnBgColor}` :'transparent',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff' ,
  borderRadius: 
    userData?.btnStyle === 2 ? "10px" :
    userData?.btnStyle === 3 ? "20px" :
    userData?.btnStyle === 4 ? "40px" : '',}  }><IoMdContacts className='mr-[5px]'  />Save Contact</button>
  <div className='flex w-[100%] justify-evenly flex-wrap items-center mt-5 gap-2'>
       {userData?.links?.map(item => (
        <div className="w-[30%] flex justify-center items-center" onClick={() => sendUserData(userData.id,image.id,"social")}>
         <div  key={item.label}  className='flex justify-center flex-col text-white items-center text-[10px] w-[30%]'>
           <div  onClick={() => window.open(item.value)} className={`w-[40px] h-[40px] rounded-[50%] bg-[#18b580] flex justify-center items-center mb-2 ${item.classes}`} style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#6484a3' }}>
         <div>     <img style={{width:"20px"}} src={item.image}/>  </div>
           </div>
           <p className="cursor-pointer" onClick={() => window.open(item.value)} style={userData?.linkTextColor ? { color: `${userData?.linkTextColor}` } : { background: '#6484a3' }}>{item.name}</p>
         </div>
         </div>
       ))}
     </div>
     {userData?.custom_links?.map((img, index) => (
      <div className="flex items-center justify-center w-[100%] mt-3" onClick={() => sendUserData(userData.id,img.id,"custom")}>
      <div key={index} onClick={() => {
        let url = img?.value;
        if (!url.startsWith("https://")) {
          url = "https://" + url;
        }
        window.open(url);
      }} className='w-[90%] bg-[#BA6B96] pl-2 h-[90px] mt-3 rounded-[10px] flex items-center justify-start' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#BA6B96' }}>
   
        <img style={{borderRadius:"10px",width:"150px",height:"75px",objectFit:"cover"}} src={img.image ? img.image : logoblack} alt={`image-${index}`} />

        <h1 className="ml-2  text-[16px]" style={userData?.linkTextColor ? { color: `${userData?.linkTextColor}` } : { color: '#ffffff' }}>{truncateText(img?.name,25)}</h1>
      </div>
      </div>
    ))}
  </div>
   </div>
  </>
  )
}
