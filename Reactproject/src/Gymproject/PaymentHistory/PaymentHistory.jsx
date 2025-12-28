import React from 'react'
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import "../PaymentHistory/PaymentHistory.css"
export const PaymentHistory = () => {
  return (
    <>
     <div className='PaymentHistorypage'>
      <div className='paymenthistory'>
        <p className='paymentpara'>Payment History</p>
        <div className='filterlogo'>
          <FilterListSharpIcon sx={{color:"black"}}/>
          <input className='inputsearch' type='search'/>
          <SearchSharpIcon sx={{color:"black",position:"relative",left:"3.4rem",top:"-3.4rem",fontSize:"19px"}}/>
        </div>
         <div className='dashboardexpiredtable'>
          <table className='dashtable'>
            <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Joining Date</th>
              <th>Fees Amount</th>
            </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    </>
    
  )
}
