import React from 'react'
import "../Dashboardregisterform/Dashboardregisterform.css"
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useNavigate } from 'react-router-dom';

export const Dashboardregisterform = () => {
    const Navigate=useNavigate()
  return (
   <>
    <div className='Dashboardregisterform'>
        <div className='dashboardregister'>
            <div className='registerback'>
                <p className='registerbackpara' onClick={()=>Navigate("/Dashboardcomp")}>
                    <KeyboardBackspaceRoundedIcon sx={{fontSize:"26px",position:"relative",top:"6px",right:"2px"}}/>
                    Back</p>
                <h2 className='registerheader'>Registration form</h2>
            </div>
            <div className='register'>
            </div>
            <div className='registerphoto'> <AddPhotoAlternateIcon sx={{fontSize:"53px",color:"black",position:"relative",top:"4.4rem",left:"4.7rem"}}/>  
            </div>
            <div className='registerphotobutton'>
                <button className='registerbutton'>Take Photo</button>
            </div>
        </div>
    </div>
   </>
  )
}
