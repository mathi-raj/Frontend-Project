import React from 'react'
import "../Viewregisterpage01/Viewregisterpage01.css"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useNavigate } from 'react-router-dom';
import { Dashboardtable } from '../../Dashboard_pages/Dashboardtable/Dashboardtable';


export const Viewregisterpage01 = () => {
  const Navigate=useNavigate()
  return (
    <>
    {/* <div>Viewregisterpage01</div> */}
    <div className='viewregisterpage01'>
      <div className='viewregister'>
        <p className='viewregisterpara'>View Registered</p>
        <div className='filterlogo'>
          <FilterListSharpIcon sx={{color:"black"}}/>
          <input className='inputsearch' type='search'/>
          <SearchSharpIcon sx={{color:"black",position:"relative",left:"3.4rem",top:"-3.4rem",fontSize:"19px"}}/>

        </div>

        <div className='deletelogo'>
         <button onClick={()=>Navigate("/Viewregisterpage02")} className='deletelogobutton'><DeleteIcon sx={{color:"red",fontSize:"23px",position:"relative"}}/></button>
        </div>
        <div className='downloadlogo' >
         <button onClick={()=>Navigate("/Viewregisterpage03")} className='downloadlogobutton'><FileDownloadOutlinedIcon sx={{color:"black"}}/></button>
        </div>

      </div>
      <div className='viewregtab'>
          <table className='dashtable'> 
        <Dashboardtable/>
        </table>
        </div>

    </div>

    </>
  )
}
