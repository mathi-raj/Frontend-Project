import React from 'react'
import { useNavigate } from 'react-router-dom'
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import "../Forgetpass/Forgetpass.css"
import { Input_component } from '../Inputcomponent/Input_component';

export const Forgetpass = () => {
    const Navigate=useNavigate()
  return (
   <>
     <div className='Forgetpageimage' >
    <div className='forget'>
    <div className='forget_page'>
      <div className='Heading02'>
        {/* <AccountCircleSharpIcon sx={{fontSize:"50px",color:"black"}}/> */}
        <div className='logo'></div>
        <h3 className='SubHeading'>Beast Forces Gym</h3>
      </div>
      <h2 className='SubHeading01'>Forgot Your Password ? </h2>
      <p className="Subpara">Enter Your Email below to receive your OTP</p>
      <div className='inputdiv'>
        <EmailRoundedIcon sx={{fontSize:"20px",color:"rgb(151, 136, 136)",marginLeft:"4.5rem",position:"relative",top:"3.6rem"}}/>
        <Input_component type="email"
        placeholder=' Email'/>
      </div>
      <div className='Button02'>
        <button className='But2' onClick={()=>Navigate("/Otppage")}>Send</button>       
      </div>
    </div>
    </div>
    </div>

    
   </>
  )
}
