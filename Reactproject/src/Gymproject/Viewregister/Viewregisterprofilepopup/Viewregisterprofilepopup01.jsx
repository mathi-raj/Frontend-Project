import React from 'react'
import "../Viewregisterprofilepopup/Viewregisterprofilepopup.css"
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate } from 'react-router-dom';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';



export const Viewregisterprofilepopup01 = () => {
    const Navigate=useNavigate()
  return (
   <>
   {/* <h1>profile</h1> */}
   <div className='viewregisterprofilepopup01'>
    <div className='Viewregisterprofile01'>
        <div className='profile01'>
            <p className='profilepara'>View profile</p>
            <p className='profilebackpara' onClick={()=>Navigate("/Viewregisterpopup02")}>
                    <KeyboardBackspaceRoundedIcon sx={{fontSize:"22px",position:"relative",top:"6px",right:"2px"}}/>
                    Back</p>
        </div>
        <div className='profiledetails'>
            <FaceRoundedIcon sx={{fontSize:"100px"}}/>
            <h2>Krishna Kumar</h2>
        </div>
        <div className='profiletabledetails'>
            <table className='profiletablehead'>
                <thead>
                    <tr>
                        <th className='profileth1'>Age</th>
                        <th className='profileth1'>Gender</th>
                        <th className='profileth1'>Contact Number</th>
                        <th className='profileth1'>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='profiletd1'>24</td>
                        <td className='profiletd1'>Male</td>
                        <td className='profiletd1'>9787385347</td>
                        <td className='profiletd1'>Kumbakonam</td>
                    </tr>
                </tbody>
            </table>
            <table className='profiletablehead02'>
                <thead>
                    <tr>
                        <th className='profileth1'>Duration</th>
                        <th className='profileth1'>Joining Date</th>
                        <th className='profileth1'>Expired till</th>
                        <th className='profileth1'>Expired Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='profiletd1'>6 Months</td>
                        <td className='profiletd1'>28 Nov 2023</td>
                        <td className='profiletd1'>5 Days</td>
                        <td className='profiletd1'>28 Apr 2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='profilebutton'>
            {/* <button className='profilepopupbut1' onClick={()=>Navigate("/Viewregisterpage03")}>Save</button> */}
            <button className='profilepopupbut2' onClick={()=>Navigate("/Viewregisterprofilepopup02")}>Edit</button>
        </div>
    </div>
   </div>
   </>
  )
}
