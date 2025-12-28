import React from 'react'
import { Inputcompdashboard } from '../Inputcompdashboard/Inputcompdashboard'
import { DashboardAcc_Expired } from '../Dashboard_Account_Expired/DashboardAcc_Expired'
import { useNavigate } from 'react-router-dom'

export const Dashboardsecpopup = () => {

  const Navigate=useNavigate()

   const arrobj=[
        {
            label:"Duration",
            name:"duration",
            type:"month"
        },
         {
            label:"Joining Date",
            name:"joindate",
            type:"date"
        },
        {
            label:"Expired Date",
            name:"expiredate",
            type:"date"
        }]
  return (
    <>
    {/* <div>Dashboardsecpopup</div> */}
    <DashboardAcc_Expired/>
     <div className='dashboardsecpopup'>
      <div className='popup'>
        <form className='Formcomp_con'>
        {
            arrobj.map((val)=>{
                return(
                    <Inputcompdashboard 
                    label={val.label}
                    type={val.type}
                    name={val.name}
                    />
                )
            })
        }
        <div className='Formcomp_bnt_con'>
        <button className='popupbutton' onClick={()=>Navigate("/DashboardAcc_Expired")}>Okay</button>
        </div>
    </form>    
      </div>
    </div> 
    </>
  )
}
