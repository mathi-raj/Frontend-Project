import React, { useEffect, useState } from 'react'
import "../Dashboardpopup/Dashboardpopup.css"
import { useNavigate } from 'react-router-dom';
import { Dashboardsecpopup } from './Dashboardsecpopup';
import { DashboardAcc_Expired } from '../Dashboard_Account_Expired/DashboardAcc_Expired';
export const Dashboardpopup = () => {
  // const [isopen,setIsopen]=useState(false);
  // const openpopup=()=>setIsopen(true);
  // const closepopup=()=>setIsopen(false);
  const Navigate=useNavigate()

   const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   setIsOpen(true);
  //   const timer = setInterval(() => {
  //   },1000);
  //   return () => clearInterval(timer);
  // }, []);

  
  return (
    <>
   
    {/* <div className='dashboardpopup'>
      <div className='popup'>
        <p className='popuppara'>Are you sure  you want to renewal ? </p>
        <button className='popupbut1' onClick={openpopup}>save</button>
        <button className='popupbut2'  onClick={closepopup}>cancel</button>
      </div>
    </div> */}
      {/* <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1> */}

      {/* Popup box */}
      <DashboardAcc_Expired/>
      {isOpen && (
        <div className='dashboardpopup'>
      <div className='popup'>
        <p className='popuppara'>Are you sure  you want to renewal ? </p>
        <button className='popupbut1' onClick={()=>Navigate("/Dashboardsecpopup")}>save</button>
        <button className='popupbut2' onClick={()=>setIsOpen(false)}>cancel</button>
      </div>
    </div> 
      )}

    </>
  )
}
