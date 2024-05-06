import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Theme1 from './Theme1';
import Theme2 from './Theme2';
import Theme3 from './Theme3';
import VCard from 'vcard-creator';
import Theme4 from './Theme4';
import { useParams } from 'react-router-dom';
import Classic from './Classic';
import Custom from './Custom';
import Defaultprofile from './Defaultprofile';
import man from '../../images/man.jpg'
import man1 from '../../images/man1.jpg'
import man2 from '../../images/man2.jpg'
import man3 from '../../images/man3.jpg'
import man4 from '../../images/man4.jpg'
import man5 from '../../images/man5.jpg'
import man6 from '../../images/man6.jpg'
import { DotLoader } from 'react-spinners';
export default function Home() {
  const [userData, setUserData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  
  const [isModalOpen, setModalOpen] = useState(false);

  const handleshare = () => {
    setModalOpen(true);
  };



  const handleClose = () => {
    setSelectedImage(null);
  };
  const handleCloseshare = () => {
    setModalOpen(false);
  };
  // const handleLike = (id) => {
  //   setImageData(imageData.map((image) =>
  //     image.id === id ? { ...image, likes: image.likes + 1 } : image
  //   ));
  // };


let {userid} = useParams();
const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      setLoading(true);
        await axios.get(`https://apis.classic.co/api/get_user/${userid}`).then((res)=>{
          setLoading(false);
          setUserData(res?.data?.data);
        });
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const sendUserData = async (id,linkid,type) => {
    try {
      const response = await axios.post("https://apis.classic.co/api/link_click", { userid:id,linkid:linkid,type:type });
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let [base64img, setbase64img] = useState("");
          useEffect(() => {
            let cnvrtTo64 = async () => {
              const base64 = await fetch(userData?.profileUrl)
                .then((response) => response.blob())
                .then((blob) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(blob);
                  return new Promise((res) => {
                    reader.onloadend = () => {
                      res(reader.result);
                    };
                  });
                });
              setbase64img(base64);
            };
            cnvrtTo64();
          }, [userData?.profileUrl]);
          console.log(base64img)
          let downloadVcf = async () => {
        
              const myVCard = new VCard()
      
              // Some variables
              const lastname = `${userData?.firstName} ${userData?.lastName}`;
              const firstname = ''
              const additional = ''
              const prefix = ''
              const suffix = ''
      
              myVCard
                  .addName(lastname, firstname, additional, prefix, suffix)
                  .addCompany(userData?.company)
                  .addJobtitle(userData?.designation)
                  .addEmail(userData?.email)
                  .addPhoneNumber(userData?.phone)
                  .addPhoto(base64img.slice(22), "jpeg")
                  userData?.links?.map((elm) => {
                      myVCard.addSocial(
                        elm?.value,
                        elm?.name
                      );
                  });
      
              const vcardData = myVCard.toString();
              const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'myvcard.vcf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
      
          }
          
          
  return (
    <>
    {loading ? (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }} className="loading-screen">
        <DotLoader color="#0b6e99" />
      </div>
    ) : (
    <div className="w-[100%] flex items-center flex-col" style={userData?.font==="Salsa" ? { fontFamily:"Salsa" } : userData?.font==="Inter" ? { fontFamily:"Inter" } :userData?.font==="Merriweather" ? { fontFamily:"Merriweather" } :userData?.font==="DancingScript" ? { fontFamily:"Dancing Script" } :userData?.font==="BebasNeue" ? { fontFamily:"Bebas Neue" } : { fontFamily: 'inter' }}>
    {userData?.bgThemeName==="Linear" ?
    <Theme1 userData={userData} downloadVcf={downloadVcf} 
    sendUserData={sendUserData} 
  
    handleClose={handleClose}

 
 
    isModalOpen={isModalOpen}
    handleshare={handleshare}
    handleCloseshare={handleCloseshare}
    /> :null}
    {userData?.bgThemeName==="Portrait" ?
    <Theme2 userData={userData} downloadVcf={downloadVcf} sendUserData={sendUserData} />:null }
    {userData?.bgThemeName==="Colour" ?
    <Theme3 userData={userData} downloadVcf={downloadVcf} sendUserData={sendUserData} /> :null}
    {userData?.bgThemeName==="colurs" ?
  <Theme4 userData={userData} downloadVcf={downloadVcf} sendUserData={sendUserData} /> :null}
  {userData?.bgThemeName==="Classic" ?
  <Classic userData={userData} downloadVcf={downloadVcf} sendUserData={sendUserData} /> :null}
  {userData?.bgThemeName==="Custom" ?
  <Custom userData={userData} downloadVcf={downloadVcf} sendUserData={sendUserData} /> :null}
  {userData?.bgThemeName==="Default" || !userData?.bgThemeName?
  <Defaultprofile userData={userData} downloadVcf={downloadVcf} sendUserData={sendUserData} /> :null}
  </div>
    )}
    </>
  );
}
