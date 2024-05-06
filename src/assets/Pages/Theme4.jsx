import React from 'react'
import Logo from '../../Components/Logo'
import User from '../../Components/User'
import Videlink from '../../Components/Videlink'
export default function Theme4({userData,downloadVcf,sendUserData}) {
   
  return (
<>
<div className="flex flex-col max-w-[430px]  w-[100%] h-[100vh]  overflow-y-scroll " style={!userData?.customTheme  ? {background:`${userData?.backgroundColor}`} : { backgroundImage: `url(${userData.customTheme})`,backgroundRepeat:"no-repeat",objectFit:"cover",backgroundSize:"cover" }}>
<Logo
userData={userData}
/>
<User
userData={userData}
downloadVcf={downloadVcf}
sendUserData={sendUserData}
/>
<Videlink
userData={userData}
/>
</div>
</>
  )
}
