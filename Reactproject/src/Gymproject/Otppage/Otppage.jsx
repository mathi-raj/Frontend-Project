import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Input_component } from '../Inputcomponent/Input_component'
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import "../Otppage/Otppage.css"

export const Otppage = () => {
    const Navigate=useNavigate()
  return (
    <>
       <div className='Otppageimage'>
    <div className='otppage'>
    <div className='Otp_page'>
      <div className='Heading03'>
        {/* <AccountCircleSharpIcon sx={{fontSize:"50px",color:"black"}}/> */}
        <div className='logo'></div>
        <h3 className='SubHeadingOtp'>Beast Forces Gym</h3>
      </div>
      <h2 className='SubHeadingOtp01'>Enter Your OTP </h2>
      <p className="Subpara01">_ _ _ _ _ _ </p>
      <div className='Button03'>
       <button className='But3' onClick={()=>Navigate("/Resetpass")}>Send</button>
      </div>
      <p className='Subpara02'> Resend the OTP </p>
      <div>  
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
