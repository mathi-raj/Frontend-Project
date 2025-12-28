import React, { useEffect, useState } from 'react'
import { Viewregisterpage02 } from '../Viewregisterpage02/Viewregisterpage02';
import { useNavigate } from 'react-router-dom';

export const Viewregisterpopup01 = () => {
    const Navigate=useNavigate()
    const [isopen,setIsopen]=useState(true);
    //  useEffect(() => {
    //     setIsopen(true);
    //   }, []);

  return (
   <>
    <Viewregisterpage02/>
    {isopen && (
     <div className='dashboardpopup'>
      <div className='popup'>
        <p className='popuppara'>Are you sure  you want to delete ? </p>
        <button className='popupbut1' onClick={()=>Navigate("/Viewregisterpage03")}>save</button>
        <button className='popupbut2'  onClick={()=>setIsopen(false)}>cancel</button>
      </div>
    </div> 
    )}
   </>
  )
}
