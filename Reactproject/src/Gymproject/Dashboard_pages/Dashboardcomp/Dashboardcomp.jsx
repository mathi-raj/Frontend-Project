import React from 'react'
import "../Dashboardcomp/Dashboardcomp.css"
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import { Outlet, useNavigate } from 'react-router-dom';
import { Dashboard_Accountpage } from '../Dashboard_Account/Dashboard_Accountpage';

export const Dashboardcomp = () => {
  const Navigate=useNavigate()
  return (
    <>
    <div className='Dashboardregister'>
        <div className='dashboardcomp'>
            <div className='Register'>
                <button className='Registerbutton' onClick={()=>Navigate("/Dashboardregisterform")}>New Register</button>
            </div>
            <div className='Accountpage'>
              <PersonAddAlt1RoundedIcon sx={{fontSize:"30px",position:"relative",top:"-4.6rem",left:"27.4rem"}}/>
                <button className='Accountpagebutton' onClick={()=>Navigate("/Dashboard_Accountpage")}>Accounts are going to expire within 3 days</button>
                <button className='Accountexpiredbutton' onClick={()=>Navigate("/DashboardAcc_Expired")}>Accounts Expired</button>
            </div>
        </div>
        <div className='DashboardAccountpagecomp'>
      {/* <div className='Dashboardaccountcomp'>
        <p className='Dashboardparacomp'> Accounts are going to expired with in 3 days</p>
      </div> */}
    </div>
        <div className='outletdashboardcomp'>
          <Outlet/>
        </div>
    </div>
    </>
  )
}
