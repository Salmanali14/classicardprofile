import React,{useState,useEffect} from 'react'
import '../Pages/Theme3.css'
import 'react-phone-number-input/style.css'
import { RiMailSendLine } from "react-icons/ri";
import { BiChat } from "react-icons/bi";
import PhoneInput from 'react-phone-number-input'
import logo from '../../images/logo33.png'
import { IoIosClose } from "react-icons/io";
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { Slide } from '@mui/material'
import profile from '../../images/pro.jpg'
import whatsp from '../../images/whatsapp.png'
import facebook from '../../images/facebook.png'
import discord from '../../images/discord.png'
import cash from '../../images/cash_app.png'
import email from '../../images/email.png'
import facetime from'../../images/facetime.png'
import insta from '../../images/instagram.png'
import map from '../../images/google maps.png'
import img from '../../images/pexels-photo-1535907.jpeg'

export default function Theme3({userData,downloadVcf}) {
    const [userdata, setUserData] = useState({ colors: 'black' });
    let [open1, setopen1] = useState(false)
 
    const [value, setValue] = useState()

    const [emailSelected, setEmailSelected] = useState(true);
    let handleopen1=()=>{
        setopen1(true);
    }
    let hideSlide=()=>{
        setopen1(false);
    }
    const selectlinks = [
        { imgSrc:insta,linkId:1, altname:'Instagram', name:'Instagram' ,instruction:'https://www.instagram.com',placeholder:"Enter username",value:"ahmadqna1" },
        { imgSrc: 'https://img.icons8.com/ios-filled/96/ffffff/tiktok--v1.png',linkId:2,  altname: 'Tiktok', name: 'Tiktok',instruction:'Add your tiktok account  (https://www.tiktok/ahmad.com)',placeholder:"Enter username",value:"ahmadqna1" },
        { imgSrc: 'https://img.icons8.com/material-rounded/96/FFFFFF/facebook-f--v1.png',linkId:3,  altname: 'facebook-f', name: 'Facebook',instruction:'Paste your facebook profile link here.(https://www.facebook.com)',placeholder:"Enter url",value:"hhtps//ahmadqna1" },
      ];
      let returnIcons=(linkId)=>{
        if (linkId===1) {
            return insta
        }else if (linkId===2){
          return 'https://img.icons8.com/ios-filled/96/ffffff/tiktok--v1.png'
        }else if (linkId===3){
          return 'https://img.icons8.com/material-rounded/96/FFFFFF/facebook-f--v1.png'
        }else if (linkId===4){
          return 'https://img.icons8.com/ios-filled/96/ffffff/twitterx--v1.png'
        }else if (linkId===5){
          return 'https://img.icons8.com/ios-filled/96/ffffff/linkedin.png'
            } else if (linkId===6){
              return 'https://img.icons8.com/ios-filled/96/FFFFFF/facebook-messenger.png'
                }else if (linkId===7){
                  return 'https://img.icons8.com/ios-glyphs/96/FFFFFF/discord-logo.png'
                    }
                    else if (linkId===8){
                      return 'https://img.icons8.com/ios-filled/96/ffffff/snapchat--v1.png'
                        }
                        else if (linkId===9){
                          return 'https://img.icons8.com/fluency-systems-filled/96/FFFFFF/phone-disconnected.png'
                            }
                            else if (linkId===10){
                              return 'https://img.icons8.com/material-rounded/96/FFFFFF/user.png'
                                }
                                else if (linkId===11){
                                  return 'https://img.icons8.com/ios-filled/96/FFFFFF/whatsapp--v1.png'
                                    }
                                    else if (linkId===12){
                                      return 'https://img.icons8.com/ios-filled/98/FFFFFF/gmail-new.png'
                                        }
                                        else if (linkId===13){
                                          return 'https://img.icons8.com/material-rounded/96/FFFFFF/new-post.png'
                                            }else if (linkId===14){
                                              return 'https://img.icons8.com/ios-filled/96/ffffff/zoom.png'
                                                }else if (linkId===15){
                                                  return 'https://img.icons8.com/windows/96/FFFFFF/telegram-app.png'
                                                    }else if (linkId===16){
                                                      return 'https://img.icons8.com/ios-filled/96/ffffff/skype.png'
                                                            }else if (linkId===17){
                                                              return 'https://img.icons8.com/ios-filled/96/ffffff/google-play.png'
                                                                }else if (linkId===18){
                                                                  return 'https://img.icons8.com/ios-filled/96/ffffff/apple-app-store--v2.png'
                                                                    }else if (linkId===19){
                                                                      return 'https://img.icons8.com/ios-filled/96/ffffff/paypal.png'
                                                                        }else if (linkId===20){
                                                                          return 'https://img.icons8.com/ios-filled/96/ffffff/cash-app.png'
                                                                            }else if (linkId===21){
                                                                              return 'https://img.icons8.com/ios-filled/96/ffffff/google-logo.png'
                                                                                }else if (linkId===22){
                                                                                  return 'https://img.icons8.com/ios-filled/96/ffffff/youtube-squared.png'
                                                                                    }else if (linkId===23){
                                                                                      return 'https://img.icons8.com/ios-filled/96/ffffff/amazon.png'
                                                                                        }else if (linkId===24){
                                                                                          return 'https://img.icons8.com/ios-filled/96/FFFFFF/facetime.png'
                                                                                            }
    
          }
          function truncateText(text, maxLength) {
            if (text?.length <= maxLength) {
              return text;
            } else {
              return text?.slice(0, maxLength) + '...';
            }
          }
        
  return (
  <>
  <div className='home-main'>
<img src={userData?.profileUrl ? userData?.profileUrl : `https://placehold.co/400x200`} alt="" className='h-[400px] w-[100%] object-cover z-[5]' />
<div className="curve">
    <svg id='svg1'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
    </svg>
    <svg id='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#808080" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
    </svg>
    <svg id='svg3'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
    </svg>
  
</div>
<img src={logo?logo : "https://placehold.co/70x70"} alt="logo" className='rounded-full h-[40px] w-[90px] absolute top-[400px]  right-10 border-2 border-white ' style={{ zIndex: '50' }} />

<div className='h-[107px]  border-l border-dotted   border-#0b6e99 p-2 ml-6 mt-7'>
    <h2 className='font-medium text-2xl' style={userData?.nameColor ? { color: `${userData?.nameColor}` } : { color: '#ffffff' }}>{truncateText(userData?.firstName,20)} {truncateText(userData?.lastName,20)}</h2>
    <h2 className='font-medium mt-2 text-lg' style={userData?.titleColor ? { color: `${userData?.titleColor}` } : { color: '#ffffff' }}>{truncateText(userData?.designation,40)}</h2>
   
    <h2 className=' text-lg text-gray-500 mt-2' >{truncateText(userData?.company,40)}</h2>



</div> 
<div className="w-[100%] flex justify-center items-center flex-col">
<h1 className="w-[90%] mt-3"  style={userData?.aboutTextColor ? { color: `${userData?.aboutTextColor}` } : { color: '#ffffff' }}>{userData?.bio}</h1>
{/* <p className="w-[90%]" style={userdata?.colors ? { color: `${userdata?.colors}` } : { color: '#0b6e99' }}>#Team Persistence</p>*/}
</div>
<div className='ml-6 mt-6'>
    {userData?.links?.map((elm) => {
        return  <div className='flex mt-4 cursor-pointer  items-center'>
            <div onClick={() => window.open(elm.value)} className='h-[30px] w-[30px] rounded-full   flex justify-center items-center ' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#6484a3' }}>
                <img  src={elm.image} alt="" className='h-[20px] w-[20px]' />
                {/* {returnSocialIcons(elm.name)} */}
            </div>
            <h2 style={userData?.linkTextColor ? { color: `${userData?.linkTextColor}` } : { color: '#ffffff' }} onClick={() => window.open(elm.value)} className='text-[14px] text-gray-500 ml-3' >{truncateText(elm?.value,30)}</h2>
        </div>
    })}
</div>
<br />
<br />
<br />
<br />
<br />
<div className='flex justify-center flex-col items-center max-w-[430px] w-[100%] mt-[55px] fixed bottom-0'>
    <div className=' w-[260px] flex justify-center items-center border h-[50px] rounded-[5px]  text-white font-medium cursor-pointer text-lg' style={{ background:userData?.btnBgColor ?  `${userData?.btnBgColor}` :'#ffffff',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff'}  } onClick={handleopen1}>
        <BsFillPersonVcardFill className='mr-2 mt-[2px]' />
        Save Contact
    </div>
<div className="h-[30px] rounded-t-[50px] max-w-[430px] w-[100%] flex justify-center items-center mt-5"  style={{ background:userData?.btnBgColor ?  `${userData?.btnBgColor}` :'#ffffff'}  } >
<p className="w-[90%] flex items-center justify-center text-white text-[15px]" style={{ color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff'}  }>A free digital business card from upgraving</p>
</div>
</div>
<br />
<Slide
in={open1}
direction="up"
timeout={{ appear: 500, enter: 500, exit: 500 }}
>
<div className="slide_main_div">
  <div className="title_and_icon_main">
 
    <div className="close" onClick={hideSlide}>
    <IoIosClose style={{fontSize:"35px"}}/>
    </div>
  </div>
  <div className="flex justify-center items-center max-w-[430px] w-[100%]">
 <div className="absolute h-[100px] w-[100px] flex justify-center items-center shadow-md rounded-[50%] border-1 bg-white border ">
 {emailSelected ?(
 <RiMailSendLine  style={userData?.btnTextColor ? { color: `${userData?.btnTextColor==="white"?"white":userData?.btnTextColor}` } : { color: '#0b6e99' }} fontSize="40px"  />
):(
 <BiChat  style={userData?.btnTextColor ? { color: `${userData?.btnTextColor==="white"?"white":userData?.btnTextColor}` } : { color: '#0b6e99' }} fontSize="40px"  />
)}
 </div>
</div>
<div className="flex justify-center mt-20 w-[100%] items-center">
<div className="w-[70%] flex justify-center items-center h-[40px] rounded-[20px] bg-[#f5f5f5]"><p className="w-[50%] h-[40px] flex justify-center items-center cursor-pointer rounded-[20px] font-bold "  onClick={()=>setEmailSelected(true)} style={emailSelected?{ color: `${userData?.btnTextColor==="white"?"white":userData?.btnTextColor}`,border: ` 2px solid ${userData?.btnBgColor==="white"?"white":userData?.btnBgColor}` }:null}  >Email</p><p className="w-[50%] h-[40px] font-bold flex justify-center cursor-pointer items-center rounded-[20px]" onClick={()=>setEmailSelected(false)} style={!emailSelected?{ color: `${userData?.btnTextColor==="white"?"white":userData?.btnTextColor}`,border: ` 2px solid ${userData?.btnBgColor==="white"?"white":userData?.btnBgColor}` }:null}>Text</p> </div>
</div>
{emailSelected ?(
<div className="flex justify-center mt-10 w-[100%] items-center">
<div className="w-[90%] flex flex-col">
<label className="text-gray-500">Your email</label>
<input type="email" style={{outline:"none",borderTop:"none",borderLeft:"none",borderRight:"none" ,borderBottom:"2px solid",marginTop:"10px"}} />
<button className="flex justify-center items-center w-[100%] h-[40px] mt-10 rounded-[5px] font-bold text-white" style={{ background:userData?.btnBgColor ?  `${userData?.btnBgColor}` :'#ffffff',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff'}  }>
RECEIVE VIA EMAIL</button>
</div>
</div>):( <div className="flex justify-center mt-10 w-[100%] items-center">
<div className="w-[90%] flex flex-col">
<label className="text-gray-500">Your phone number</label>
<PhoneInput

placeholder="Enter phone number"
value={value}
onChange={setValue}/>

<button  className="flex justify-center items-center w-[100%] h-[40px] mt-10 rounded-[5px] font-bold text-white" style={{ background:userData?.btnBgColor ?  `${userData?.btnBgColor}` :'#ffffff',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff'}  }>
RECEIVE VIA TEXT</button>
</div>
 </div> )}
<div className="flex justify-center mt-5 mb-5 w-[100%] items-center">
<div className="w-[60%] flex justify-center items-center">
<div className="h-[1px] w-[40%] bg-[#f5f5f5]"></div><p className="pl-3 pr-3 text-gray-500">OR</p> <div className="h-[1px] w-[40%] bg-[#f5f5f5]"></div>
</div>
</div>
<div className="flex justify-center mb-5 w-[100%] items-center">
<button onClick={downloadVcf} className="flex justify-center items-center w-[90%] h-[40px]  rounded-[5px] font-bold text-white" style={{ background:userData?.btnBgColor ?  `${userData?.btnBgColor}` :'#ffffff',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff'}  }>
ADD TO CONTACTS</button>
</div>
<div className="flex justify-center items-center mb-5 text-gray-500 text-[12px]">We do not sell your data.</div>
</div>
</Slide>
</div >
  </>
  )
}
