import React from 'react'
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { useNavigate } from 'react-router-dom';



export const Dashboardtablecomp = ({
  sno,
  name,
  phonenumber,
  joiningdate,
  expired,
  renewel,
}) => {
    const Navigate=useNavigate()

  return (
    <>
     <tbody className='tablebody'>
      <tr>
      <td>{sno}</td>
      <td><button className='renewelbutton' onClick={()=>Navigate("/Viewregisterprofilepopup01")}>
        <FaceRoundedIcon sx={{fontSize:"25px",position:"relative",left:"-12px",top:"-7px",color:"black"}}/></button></td>
      <td>{name}</td>
      <td>{phonenumber}</td>
      <td>{joiningdate}</td>
      <td>{expired}</td>
      {/* <td>{renewel}</td> */}
      <td><button className='renewelbutton' onClick={()=>Navigate("/Dashboardpopup")}>
        <RestartAltRoundedIcon sx={{fontSize:"25px",position:"relative",left:"-12px",top:"-7px",color:"black"}}/></button></td>
      </tr> 
      </tbody>
    </>
  )
}
