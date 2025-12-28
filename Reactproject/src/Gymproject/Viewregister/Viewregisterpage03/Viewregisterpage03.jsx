import React from 'react'
import { Viewregisterpage02 } from '../Viewregisterpage02/Viewregisterpage02'
import { useNavigate } from 'react-router-dom'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Dashboardtable } from '../../Dashboard_pages/Dashboardtable/Dashboardtable';
import "../Viewregisterpage03/Viewregisterpage03.css"

export const Viewregisterpage03 = () => {
  const Navigate=useNavigate()
  return (
    <>
    {/* <div className='viewregisterpage03'>
      <div className='viewregister03'>
        <Viewregisterpage02/>
      </div>
    </div> */}
    <div className='Viewregisterpage02'>
      <div className='viewregister02'>
        {/* <Viewregisterpage01/> */}
        <div className='viewregistersquare'>
             <button className='squarelogobutton'><SquareOutlinedIcon sx={{color:"black",fontSize:"22px"}}/></button>
        </div>
         <div className='viewregisterpage01'>
      <div className='viewregister'>
        <p className='viewregisterpara'>View Registered</p>
        <div className='filterlogo'>
          <FilterListSharpIcon sx={{color:"black"}}/>
          <input className='inputsearch' type='search'/>
          <SearchSharpIcon sx={{color:"black",position:"relative",left:"3.4rem",top:"-3.4rem",fontSize:"19px"}}/>

        </div>

        <div className='deletelogo'>
         <button onClick={()=>Navigate("/Viewregisterpopup01")} className='deletelogobutton'><DeleteIcon sx={{color:"red",fontSize:"23px",position:"relative"}}/></button>
        </div>
        <div className='downloadlogo' >
         <button onClick={()=>Navigate("/Viewregisterpopup02")} className='downloadlogobutton'><FileDownloadOutlinedIcon sx={{color:"black"}}/></button>
        </div>

      </div>
    </div>
      </div>
       <div className='viewregtab02'>
                <table className='dashtable'> 
              <Dashboardtable/>
              </table>
              </div>
   
    </div>

    </>
  )
}
