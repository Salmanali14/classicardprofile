import React,{useState} from 'react'
import { RiQrCodeFill } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import logo from "../images/logo33.png";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

import { Modal, Box, IconButton, TextField, Button, Typography } from '@mui/material';
import QrCodeGenerator from './QrCodeGenerator';

export default function Logo({userData}) {
  const [open, setOpen] = useState(false);
  const [qr, setQr] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQr(false);
  };
  const handleOpenQr = () => {
    setQr(true);
  };
  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        console.log("URL copied to clipboard:", url);
      
      })
      .catch((error) => {
        console.error("Error copying URL to clipboard:", error);
      });
  };

  return (
   <>
   <div className='w-[100%] flex  flex-col '>
   <div className='w-[100%] flex justify-between '>
   <div></div> <div></div> <div className='flex w-[20%] justify-evenly mt-5' ><GoShareAndroid onClick={handleOpen} style={{fontSize:"25px"}} /> <RiQrCodeFill onClick={handleOpenQr} style={{fontSize:"25px"}} /></div>
   </div>
   <div className='w-[100%] flex justify-center mt-10 mb-[100px]'><img width={150} src={logo}/></div>
   </div>
   <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="add-link-modal-title"
   aria-describedby="add-link-modal-description"
 >
   <Box
     sx={{
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width: 340,
       bgcolor: 'white',
       borderRadius: '5px',
       background: '#FFF',
       outline: 'none',
       boxShadow: 24,
       maxHeight: "90vh",
       overflowY: "auto",
       '&::-webkit-scrollbar': {
         display: 'none',
       },
     }}
   >
     <IconButton
       aria-label="close"
       onClick={handleClose}
       sx={{
         position: 'absolute',
         top: 10,
         right: 0,
         width: '35px',
        height: '24px',
        color:"white"
    
       }}
     >
   <IoClose/>
     </IconButton>
     <div className='w-[100%] flex justify-center bg-[#111016] h-[400px] '>
     <div className='w-[90%] flex mt-[50px] flex-col items-center '>
<h1 className='text-white text-[12px]'>Copy and send the URL to share my Bussiness Card</h1>
<button className='flex justify-center items-center w-[110px]  h-[40px] bg-[#18b580] mt-5' onClick={copyUrlToClipboard} style={{ backgroundColor:userData?.btnStyle === 1 || userData?.btnStyle === 2 ?  `${userData?.btnBgColor}` :'transparent',border:userData?.btnStyle === 3 || userData?.btnStyle === 4 ?  `1px solid ${userData?.btnBgColor}` :'transparent',color:userData?.btnTextColor ?  `${userData?.btnTextColor}` :'#ffffff' ,
borderRadius: 
  userData?.btnStyle === 2 ? "10px" :
  userData?.btnStyle === 3 ? "20px" :
  userData?.btnStyle === 4 ? "40px" : '',}  }><IoCopyOutline  className='mr-1'/>Copy URL</button>
     </div>
     </div>
   </Box>
 </Modal>
 <Modal
 open={qr}
 onClose={handleClose}
 aria-labelledby="add-link-modal-title"
 aria-describedby="add-link-modal-description"
>
 <Box
   sx={{
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 340,
     bgcolor: 'white',
     borderRadius: '5px',
     background: '#FFF',
     outline: 'none',
     boxShadow: 24,
     maxHeight: "90vh",
     overflowY: "auto",
     '&::-webkit-scrollbar': {
       display: 'none',
     },
   }}
 >
   <IconButton
     aria-label="close"
     onClick={handleClose}
     sx={{
       position: 'absolute',
       top: 10,
       right: 0,
       width: '35px',
      height: '24px',
      color:"white"
  
     }}
   >
 <IoClose/>
   </IconButton>
   <div className='w-[100%] flex justify-center bg-[#111016] h-[400px] '>
   <div className='w-[90%] flex mt-[50px] flex-col items-center '>
   <div className='border-[20px] rounded-[5px] border-white'><QrCodeGenerator/>
   </div>
<h1 className='text-white text-[13px] font-bold mt-5'>Scan the QR Code</h1>
<p className='text-white text-[12px] mt-5'>to view my Bussiness Card on another device</p>
   </div>
   </div>
 </Box>
</Modal>
   </>
  )
}
