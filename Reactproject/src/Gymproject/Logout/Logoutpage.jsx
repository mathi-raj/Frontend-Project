import React, { useEffect, useState } from 'react'
import "../Logout/Logoutpage.css"
import { useNavigate } from 'react-router-dom';

export const Logoutpage = () => {
  const Navigate=useNavigate()

   const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    // const timer = setInterval(() => {
    // },1000);
    // return () => clearInterval(timer);
  }, []);

  return (
   
    <>
    {isOpen && (
        <div className='logoutpagepopup'>
      <div className='logoutpopup'>
        <p className='logoutpopuppara'>Are you sure you want to logout ? </p>
        <button className='logoutpopupbut1' onClick={()=>Navigate("/Login_page")}>Logout</button>
        <button className='logoutpopupbut2' onClick={()=>setIsOpen(false)}>cancel</button>
      </div>
    </div> 
      )}
    </>
  )
}
