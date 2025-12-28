import React from 'react'
import { Dashboardcomp } from '../Dashboardcomp/Dashboardcomp'
import "../Dashboard_Account_Expired/DashboardAcc_Expired.css"
import "../Dashboard_Account/Dashboard_Accountpage.css"
import { useNavigate } from 'react-router-dom'
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import Face3RoundedIcon from '@mui/icons-material/Face3Rounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { Dashboardtable } from '../Dashboardtable/Dashboardtable'

export const DashboardAcc_Expired = () => {
  const Navigate=useNavigate()

  var inter=null;
  function setint(){
    inter=setInterval(() => {
    },1000);
  }
  return (
    <>
    <Dashboardcomp/>
    <div className='DashboardAccountpage'>
      <div className='Dashboardaccexppage'>
        <p className='Dashboardpara'>Accounts Expired</p>
        <div className='dashboardexpiredtable'>
          <table className='dashtable'> 
            {/* <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Joining Date</th>
              <th>Expired</th>
              <th>Renewal</th>
            </tr>
            </thead> */}
            {/* <tbody className='tablebody'>
              <tr>
                <td>1</td>
                <td><Face3RoundedIcon/></td>
                <td>Manju</td>
                <td>9787385347</td>
                <td>30.01.2013</td>
                <td>no</td>
                <td><button className='renewelbutton' onClick={()=>Navigate("/Dashboardpopup")}><RestartAltRoundedIcon sx={{fontSize:"25px",position:"relative",left:"-12px",top:"-7px",color:"black"}}/></button></td>
              </tr>
            </tbody> */}
            <Dashboardtable/>
          </table>
        </div>
      </div>
    
    
      
    </div>
    </>
  )
}
