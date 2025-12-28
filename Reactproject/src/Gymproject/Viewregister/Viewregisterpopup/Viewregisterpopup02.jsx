import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Viewregisterpage03 } from '../Viewregisterpage03/Viewregisterpage03';


export const Viewregisterpopup02 = () => {
     const Navigate=useNavigate()
    const [isopen,setIsopen]=useState(true);

  return (
    <>
    <Viewregisterpage03/>
    {isopen && (
    <div className='dashboardpopup'>
      <div className='popup'>
        <p className='popuppara'>Are you sure  you want to download ? </p>
        <button className='popupbut1' onClick={()=>Navigate("/Viewregisterpage03")}>save</button>
        <button className='popupbut2'  onClick={()=>setIsopen(false)}>cancel</button>
      </div>
    </div> 
    )}
    </>
  )
}
