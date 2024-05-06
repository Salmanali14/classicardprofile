import React from 'react'
import profile from '../../images/profile.png'
import whatsp from '../../images/whatsapp.png'
import facebook from '../../images/facebook.png'
import discord from '../../images/discord.png'
import cash from '../../images/cash_app.png'
import email from '../../images/email.png'
import facetime from'../../images/facetime.png'
import logoblack from'../../images/logoblack.jpeg'
import insta from '../../images/instagram.png'
import map from '../../images/google maps.png'
import img from '../../images/pexels-photo-1535907.jpeg'
import ReactPlayer from 'react-player'
import { IoMdContacts } from 'react-icons/io'
export default function Theme2({userData,downloadVcf,sendUserData}) {
    const images = [whatsp, facebook, discord, cash, email, facetime, insta, map];
    const dataArray = [img, img];
    const selectedLink = userData && userData?.links?.find(link => link?.linkId === 13);
console.log(selectedLink)
    // Extract the value from the selectedLink
    const videoUrl = selectedLink ? selectedLink.value : '';
    function truncateText(text, maxLength) {
      if (text?.length <= maxLength) {
        return text;
      } else {
        return text?.slice(0, maxLength) + '...';
      }
    }
  return (
<>
<div className='w-[100%] bg-gradient-to-b from-top-purple to-bottom-purple relative flex items-center flex-col ' style={!userData?.customTheme  ? {background:`${userData?.backgroundColor}`} : { backgroundImage: `url(${userData.customTheme})`,backgroundRepeat:"no-repeat",objectFit:"cover",backgroundSize:"cover" }} >
<div className=' flex justify-center items-center w-[100%]'>
<div className='w-[150px] h-[150px] rounded-[50%] relative'>
<img style={{width:"150px",height:"150px",borderRadius:"50%",position:"absolute",top:"50px",objectFit:"cover"}} src={userData?.profileUrl}/>
{userData?.verifyUser===1 && (<img width="20" height="20" style={{position:"absolute",top:"165px",left:"120px"}}s src="https://img.icons8.com/color/96/verified-badge.png" alt="verified-badge"/>)}
</div>
</div>
<h1 className='mt-[60px] text-white text-[25px] ' style={userData?.nameColor ? { color: `${userData?.nameColor}` } : { color: '#ffffff' }}>{truncateText(userData?.firstName,20)} {truncateText(userData?.lastName,20)}</h1>
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
<p className='text-[12px] w-[90%] text-white text-center' style={userData?.aboutTextColor ? { color: `${userData?.aboutTextColor}` } : { color: '#ffffff' }}>{userData?.bio}</p>
<div className='flex justify-evenly items-center flex-wrap mt-8 gap-5 w-[80%]'>
  {userData?.links?.map((image, index) => (
    <div onClick={() => sendUserData(userData.id,image.id,"social")}>
    <div  onClick={() => window.open(image.value)} key={index} className='bg-[#BA6B96] w-[70px] h-[55px] rounded-[10px] flex justify-center items-center' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#BA6B96' }}>
      {image && <img width={30} src={image.image} alt={`icon-${index}`} />}
    </div>
    </div>
  ))}
</div>

{userData?.custom_links?.map((img, index) => (
  <div key={index} className="flex items-center justify-center w-[100%]" onClick={() => sendUserData(userData.id,img.id,"custom")}>
    {index === 0 && (
      <div onClick={() => {
        let url = img?.value;
        if (!url.startsWith("https://")) {
          url = "https://" + url;
        }
        window.open(url);
      }} className='w-[90%] bg-[#BA6B96] pl-2 h-[70px] mt-3 rounded-[10px] flex items-center justify-start' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#BA6B96' }}>
        <img style={{borderRadius:"10px",width:"90px",height:"60px",objectFit:"cover"}} src={img.image ? img.image : logoblack} alt={`image-${index}`} />
        <h1 className="ml-2  text-[16px]" style={userData?.linkTextColor ? { color: `${userData?.linkTextColor}` } : { color: '#ffffff' }}>{truncateText(img?.name,25)}</h1>
      </div>
    )}
  </div>
))}
{videoUrl && ( 
  <div className='w-[90%] h-[230px] mt-5  flex  overflow-hidden rounded-[10px] '>
                <ReactPlayer
                  className='react-player'
                  url={videoUrl}
                  width='100%'
                  height='230px'
         
                />
              </div>
  )}
 {userData?.custom_links?.map((img, index) => (
  img.image && index !== 0 && (
    <div key={index} className="flex items-center justify-center w-[100%]" onClick={() => sendUserData(userData.id,img.id,"custom")}>
      <div onClick={() => {
        let url = img?.value;
        if (!url.startsWith("https://")) {
          url = "https://" + url;
        }
        window.open(url);
      }} className='w-[90%] bg-[#BA6B96] pl-2 h-[70px] mt-3 rounded-[10px] flex items-center justify-start' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#BA6B96' }}>
        <img style={{borderRadius:"10px",width:"90px",height:"60px",objectFit:"cover"}} src={img.image} alt={`image-${index}`} />
        <h1 className="ml-2  text-[16px]" style={userData?.linkTextColor ? { color: `${userData?.linkTextColor}` } : { color: '#ffffff' }}>{truncateText(img?.name,25)}</h1>
      </div>
    </div>
  )
))}
            <button onClick={downloadVcf} className='w-[90%] h-[50px] bg-[#18b580] flex justify-center items-center  font-[600] mt-10  ' style={{ backgroundColor:userData?.btnStyle === 1 || userData?.btnStyle === 2 ?  `${userData?.btnBgColor}` :'transparent',border:userData?.btnStyle === 3 || userData?.btnStyle === 4 ?  `1px solid ${userData?.btnBgColor}` :'transparent',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff' ,
            borderRadius: 
              userData?.btnStyle === 2 ? "10px" :
              userData?.btnStyle === 3 ? "20px" :
              userData?.btnStyle === 4 ? "40px" : '',}  }><IoMdContacts className='mr-[5px]'  />Save Contact</button>
<br></br>


</div>
</>
  )
}
