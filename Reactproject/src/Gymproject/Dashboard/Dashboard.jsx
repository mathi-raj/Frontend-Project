import React from 'react'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import "./Dashboard.css"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


export const Dashboard = () => {
  const navigate=useNavigate()


  return (
    <>
   
    <div className='Dashboardbackground'>
        <div className='Dashboard_page'>
    <div className='Heading_dashboard'>
        <div className='logo_dashboard'></div>
        <h3 className='sub_headingdashboard'>Beast Forces</h3>
    </div> 
        <div className='Dashboardleft'>
           <div className='DashboardButton'>
            <DashboardRoundedIcon sx={{fontSize:"30px",position:"relative",top:"2.7rem",left:"-1.2rem"}}/>
            <button className='dashboard_Button01' onClick={()=>navigate("/Dashboardcomp")}>Dashboard</button>
            <VisibilityRoundedIcon sx={{fontSize:"30px",position:"relative",top:"2rem",left:"-0.1rem"}}/>
            <button className='dashboard_Button02' onClick={()=>navigate("/Viewregisterpage01")}>View Registered</button>
            <CurrencyRupeeRoundedIcon sx={{fontSize:"30px",position:"relative",top:"2rem",left:"-0.4rem"}}/>
            <button className='dashboard_Button03' onClick={()=>navigate("/PaymentHistory")}>Payment History</button>
            <div className='logoutbutton'>
              <button className='Dashboardlogout' onClick={()=>navigate("/Logout")}><LogoutIcon sx={{fontSize:"17px",position:"relative",top:"2px",left:"-4px"}}/>Logout</button>
            </div>
           </div>
        </div>
    </div>    
    </div>
    <div className='outletdashboard'>
       <Outlet/>
    </div>


     
    </>
  )
}
