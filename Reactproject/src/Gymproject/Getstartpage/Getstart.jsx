import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Getstart.css"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';

export const Getstart = () => {
    const Navigate=useNavigate()
  return (
    <>
    {/* <div>Getstart</div> */}
    <div className='Getstartimage'>
       <div className='LogoHeadDiv'>
        {/* <AccountCircleIcon sx={{fontSize:"36px"}}/> */}
        <div className='logo1'></div>
        <div className='Logo_Head'>Beast Forces</div>
       </div>
     <div className='Headingdiv'>
        <div className='Heading'><h1>Get Ready</h1>
    <h3>Shape your body</h3>
        </div>
      <div className='Para'>
       <p className='subpara'> "The harder you work and the more4 prepared you are for something, you're going to be able to presevere through anything"</p>
    <button className="But" onClick={()=>Navigate("/Login_page")}>Getstarted</button>
      </div>
     </div>   

     <div className='onlinelogo'>
      <div className='onlogo'>
        <FacebookIcon sx={{fontSize:"27px",color:"rgba(222, 8, 144, 1)",padding:"4px"}}/>
      </div>
      <div className='onlogo'>
        <GoogleIcon sx={{fontSize:"27px",color:"rgba(222, 8, 144, 1)",padding:"4px"}}/>
      </div>
      <div className='onlogo'>
        <InstagramIcon sx={{fontSize:"27px",color:"rgba(222, 8, 144, 1)",padding:"4px"}}/>
      </div>
      <div className='onlogo'>
        <WhatsAppIcon sx={{fontSize:"27px",color:"rgba(222, 8, 144, 1)",padding:"4px"}}/>
      </div>
     </div>
    </div>
    </>
  )
}
