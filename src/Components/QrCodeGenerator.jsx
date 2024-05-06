import React from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
    const url = window.location.href;
  
  return (
    <>
    <div className="Qr-code-e">
          <QRCode value={url} size={172}  />
    </div>
    <div style={{position:'absolute',top:'-28px',left:'0px',display:'flex'}}>
    </div>
    
    </>
  );
}
