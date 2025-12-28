import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Input_component } from '../Inputcomponent/Input_component'
import "../Resetpage/Resetpass.css"
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';

export const Resetpass = () => {
     const Navigate=useNavigate()
  return (
    <>
     <div className='Resetpassimage'>
    <div className='Reset'>
    <div className='reset_page'>
      <div className='Heading04'>
        {/* <AccountCircleSharpIcon sx={{fontSize:"50px",color:"black"}}/> */}
        <div className='logo'></div>
        <h3 className='subHeadingReset'>Beast Forces Gym</h3>
      </div>
      <h2 className='subHeadingreset01'>Reset Password</h2>
      <p className='subparareset'>Enter your new password below,</p>
      <p className='subparareset'>We are just being extra safe</p>
      <div className='inputboxreset'>
       <HttpsRoundedIcon sx={{fontSize:"20px",color:"rgb(151, 136, 136)",marginLeft:"4.5rem",position:"relative",top:"3.6rem"}}/>
        <Input_component type="password"
        placeholder=' Enter Your password'/>
       <HttpsRoundedIcon sx={{fontSize:"20px",color:"rgb(151, 136, 136)",marginLeft:"4.5rem",position:"relative",top:"3.6rem"}}/>
         <Input_component type="password"
        placeholder='Confirm password'/>
      </div>
      <div className='Button04'>
       <button  className="But4" onClick={()=>Navigate("/Login_page")}>Save</button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
