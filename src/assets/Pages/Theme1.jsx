import React, { useEffect, useState } from 'react'
import profile from '../../images/profile.png'
import whatsp from '../../images/whatsapp.png'
import facebook from '../../images/facebook.png'
import discord from '../../images/discord.png'
import cash from '../../images/cash_app.png'
import email from '../../images/email.png'
import facetime from'../../images/facetime.png'
import insta from '../../images/instagram.png'
import map from '../../images/google maps.png'
import logoblack from'../../images/logoblack.jpeg'
import { IoMdContacts } from 'react-icons/io'
import { Modal, Box, IconButton, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import man from '../../images/man.jpg'
import man1 from '../../images/man1.jpg'
import man2 from '../../images/man2.jpg'
import Share from './Share'
import VisibilityIcon from '@mui/icons-material/Visibility';

import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Theme1({userData,downloadVcf,sendUserData,handleClose,handleshare,isModalOpen,handleCloseshare}) {
  const [selectedImage, setSelectedImage] = useState(null);
    const images = [whatsp, facebook, discord, cash, email, facetime, insta, map];
    function truncateText(text, maxLength) {
      if (text?.length <= maxLength) {
        return text;
      } else {
        return text?.slice(0, maxLength) + '...';
      }
    }
    const [loading, setLoading] = useState([]);
    useEffect(() => {
      // Simulate a 2-second loading time
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
    
      return () => clearTimeout(timeout);
    }, []);
    const [imageData, setImageData] = useState("");
    const [likesData, setLikesData] = useState({});
    const [modalopen, setModalopen] = useState(false);
    const [idnew, setIdnew] = useState("");
    const handleLike = async (id, isModal) => {
      try {
        const response = await axios.get(`https://apis.classic.co/api/like_image/${id}`);
        const likes = response?.data?.likes;
        
        setImageData(likes); // Update state with the new like count
    
        // Update the like count in the DOM for all elements with the specific class
        const elementsToUpdate = document.querySelectorAll(`.like-${id}`);
        elementsToUpdate.forEach(element => {
          element.innerHTML = likes;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
 
  let {userid} = useParams();
  const handleClick = async (image) => {
    const res = await axios.get(`https://apis.classic.co/api/get_user/${userid}`).then(res=> {
      console.log(res)
      setSelectedImage(res?.data?.data);
      setModalopen(true);
      setIdnew(image?.id);
    })
    .catch(error => {
      console.error('Error fetching image data:', error);
    });
  };

  const hanclose= ()=>{
    setModalopen(false)
  }
  console.log(idnew)
  return (
<>
<div className='w-[100%] bg-[#1762a5] relative flex items-center flex-col' style={!userData?.customTheme  ? {background:`${userData?.backgroundColor}`} : { backgroundImage: `url(${userData.customTheme})`,backgroundRepeat:"no-repeat",objectFit:"cover",backgroundSize:"cover" }}>
<div className=' flex justify-center items-center w-[100%]'>
<div className='w-[150px] h-[150px] rounded-[50%] relative'>
<img style={{width:"150px",height:"150px",borderRadius:"50%",position:"absolute",top:"50px",objectFit:"cover"}} src={userData?.profileUrl}/>
{userData?.verifyUser===1 && (<img width="20" height="20" style={{position:"absolute",top:"165px",left:"120px"}}s src="https://img.icons8.com/color/96/verified-badge.png" alt="verified-badge"/>)}
</div>
</div>
<h1 className='mt-[60px] text-[25px]' style={userData?.nameColor ? { color: `${userData?.nameColor}` } : { color: '#ffffff' }}>{truncateText(userData?.firstName,20)} {truncateText(userData?.lastName,20)}</h1>
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
<p className='text-[12px] w-[90%] text-white text-center'  style={userData?.nameColor ? { color: `${userData?.nameColor}` } : { color: '#ffffff' }}>{userData?.bio}</p>
<div className='flex justify-evenly items-center flex-wrap mt-4 mb-4 gap-5 w-[80%]'>
  {userData?.links?.map((image, index) => (
    <div onClick={() => sendUserData(userData.id,image.id,"social")}>
    <div onClick={() => window.open(image.value)} key={index} className=' w-[60px] h-[50px] rounded-[25px] flex justify-center items-center' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#6484a3' }}>
      {image && <img width={25} src={image?.image} alt={`icon-${index}`} />}
    </div>
    </div>
  ))}
</div>
{userData?.custom_links?.map((img, index) => (
  img.image && (
    <div key={index} className="flex items-center justify-center cursor-pointer w-[100%]" onClick={() => sendUserData(userData.id,img.id,"custom")}>
      <div onClick={() => {
        let url = img?.value;
        if (!url.startsWith("https://")) {
          url = "https://" + url;
        }
        window.open(url);
      }} className='w-[90%] bg-[#BA6B96] pl-2 h-[70px] mt-3 rounded-[10px] flex items-center justify-start' style={userData?.linkBgColor ? { background: `${userData?.linkBgColor}` } : { background: '#BA6B96' }}>
        <img style={{borderRadius:"10px",width:"90px",height:"53px",objectFit:"cover"}} src={img.image} alt={`image-${index}`} />
        <h1 className="ml-2  text-[16px]" style={userData?.linkTextColor ? { color: `${userData?.linkTextColor}` } : { color: '#ffffff' }}>{truncateText(img?.name,25)}</h1>
      </div>
    </div>
  )
))}
{userData?.custom_links?.map((img, index) => (
  img.image ==="" && (
    <div key={index} className="flex items-center justify-center w-[100%] cursor-pointer" onClick={() => sendUserData(userData.id,img.id,"custom")}>
      <div onClick={() => {
        let url = img?.value;
        if (!url.startsWith("https://")) {
          url = "https://" + url;
        }
        window.open(url);
      }}  className='w-[90%] h-[60px] bg-[#18b580] flex justify-center items-center  text-[18px] mt-3  ' style={{ backgroundColor:userData?.btnStyle === 1 || userData?.btnStyle === 2 ?  `${userData?.btnBgColor}` :'transparent',border:userData?.btnStyle === 3 || userData?.btnStyle === 4 ?  `1px solid ${userData?.btnBgColor}` :'transparent',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff' ,
      borderRadius: 
        userData?.btnStyle === 2 ? "10px" :
        userData?.btnStyle === 3 ? "20px" :
        userData?.btnStyle === 4 ? "40px" : '',}  }>
      
        <h1 className="ml-2  text-[16px]" style={userData?.btnTextColor ? { color: `${userData?.btnTextColor}` } : { color: '#ffffff' }}>{truncateText(img?.name,30)}</h1>
      </div>
    </div>
  )
))}


{userData?.galleryImage?.length > 0 && (
  <>
    <div className="flex items-center justify-center mt-5  bg-slate-800 text text-white mb-4 w-[150px] h-[50px] text-[20px] rounded-[50px]">Gallery</div>
    <div className="image-grid">
      {userData?.galleryImage?.map((image) => (
        <div key={image.id} className="image-container w-[33%] ">
        <div className="w-[100%] h-[100%] flex justify-center   relative">
          <img
            src={image?.image}
           
            onClick={() => handleClick(image)}
          />
          <div className="absolute bottom-3  h-[30px] rounded-[30px] flex justify-between items-center w-[88%] bg-slate-400 bg-opacity-50 text-black"> <IconButton className="text-black" onClick={() => handleLike(image?.id,false)}>
          <FavoriteIcon style={{ color: "black", fontSize: "14px" }} />
          <p className={`ml-1 text-[14px] like-${image?.id}`}>{image?.likes}</p>
          
        </IconButton>  <VisibilityIcon style={{color:"black" ,fontSize:"15px"}} onClick={() => handleClick(image)}/>  <IconButton onClick={handleshare}>
        <ShareIcon style={{color:"black" ,fontSize:"14px"}} />
      </IconButton></div>
  
          </div>
        </div>
      ))}
      <Modal
      open={modalopen}
      onClose={hanclose}
      aria-labelledby="image-modal"
      aria-describedby="image-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 340,
          bgcolor: 'white',
          borderRadius: '10px',
          background: '#FFF',
          outline: 'none',
          boxShadow: 24,
          maxHeight: "500px",
          height:"450px",                overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={hanclose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 18,
            width: '20px',
            height: '20px',
            background: '#ECECEC',
          }}
        >
          <CloseIcon />
        </IconButton>
        {selectedImage?.galleryImage?.filter(image => image?.id === idnew)
          .map(image => (
            <div key={image?.id} className="flex justify-center items-center flex-col">
              <h3 className="mt-2 mb-2 font-bold">{image?.caption}</h3>
              <img style={{ maxHeight: "300px", maxWidth: "340px", objectFit: "contain" }} src={image?.image}  />
              <div className="like-share-icons w-[100%] flex justify-around">
                <IconButton className="text-black" onClick={() => handleLike(image?.id, false)}>
                  <FavoriteIcon style={{ color: "black", }} />
                  <p className={`ml-1 text-[16px] like-${image?.id}`}>{image?.likes}</p>
                </IconButton>
                <IconButton onClick={handleshare}>
                  <ShareIcon style={{ color: "black" }} />
                </IconButton>
              </div>
            </div>
          ))}
      </Box>
    </Modal>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 340,
            bgcolor: 'white',
            borderRadius: '10px',
            background: '#FFF',
            outline: 'none',
            boxShadow: 24,
            maxHeight: "600px",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseshare}
            sx={{
              position: 'absolute',
              top: 8,
              right: 18,
              width: '20px',
              height: '20px',
              background: '#ECECEC',
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex justify-center items-center mt-5 w-[100%]">
            <Share />
          </div>
        </Box>
      </Modal>
    </div>
  </>
)}
<button onClick={downloadVcf} className='w-[90%] h-[60px] bg-[#18b580] flex justify-center items-center  text-[18px] mt-4  ' style={{ backgroundColor:userData?.btnStyle === 1 || userData?.btnStyle === 2 ?  `${userData?.btnBgColor}` :'transparent',border:userData?.btnStyle === 3 || userData?.btnStyle === 4 ?  `1px solid ${userData?.btnBgColor}` :'transparent',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff' ,
borderRadius: 
  userData?.btnStyle === 2 ? "10px" :
  userData?.btnStyle === 3 ? "20px" :
  userData?.btnStyle === 4 ? "40px" : '',}  }><IoMdContacts className='mr-[5px]'  />Save Contact</button>
  <br></br>
</div>

</>
  )
}
