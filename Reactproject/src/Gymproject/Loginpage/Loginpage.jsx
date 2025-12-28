import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Loginpage/Loginpage.css"
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Input_component } from '../Inputcomponent/Input_component';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';

export const Loginpage = () => {
    const Navigate=useNavigate()
  return (
    <>
    <div className='Loginpageimage'>
    <div className='login'>
    <div className='Login_page'>
      <div className='Heading01'>
        {/* <AccountCircleSharpIcon sx={{fontSize:"50px",color:"black"}}/> */}
        <div className='logo'></div>
        <h3 className='sub_heading'>Beast Forces Gym</h3>
      </div>
      <h2 className='Sub_heading01'>Login</h2>
      <div>
        <EmailRoundedIcon sx={{fontSize:"20px",color:"rgb(151, 136, 136)",marginLeft:"4.5rem",position:"relative",top:"3.6rem"}}/>
        <Input_component type="email"
        placeholder=' Email'/>
       < HttpsRoundedIcon sx={{fontSize:"20px",color:"rgb(151, 136, 136)",marginLeft:"4.5rem",position:"relative",top:"3.6rem"}}/>
         <Input_component type="password"
        placeholder='Password'/>
      </div>
      <div className='forgetpassword'>
        <p onClick={()=>Navigate("/Forgetpass")}>forgetpassword?</p>
      </div>
      <div className='Button01'>
       <button  className="But1" onClick={()=>Navigate("/Dashboardcomp")}>Login</button>
      </div>
    </div>
    </div>
    </div>







    </>
  )
}
