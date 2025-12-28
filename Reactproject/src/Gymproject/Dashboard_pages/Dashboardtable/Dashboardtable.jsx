import React from 'react'
import { Dashboardtablecomp } from './Dashboardtablecomp'

export const Dashboardtable = () => {
     const arrobj=[
        {
            sno:"1",
            name:"manju",
            phonenumber:"9944664677",
            joiningdate:"23 Nov 2025",
            expired:"28 Feb 2026",
            renewel:""
        },
        {
            sno:"2",
            name:"akash",
            phonenumber:"8838111561",
            joiningdate:"23 Nov 2025",
            expired:"28 Feb 2026",
            renewel:""

        },
        {
            sno:"3",
            name:"harish",
            phonenumber:"9787385347",
            joiningdate:"23 Nov 2025",
            expired:"28 Feb 2026",
            renewel:""
        },
    {
            sno:"4",
            name:"Vasavi",
            phonenumber:"0987654321",
            joiningdate:"23 Nov 2025",
            expired:"28 Feb 2026",
            renewel:""
        },]
  return (
    <>
    {/* <table className='dashtable'> */}
     <thead>
        <tr>
            <th>S.No</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Joining Date</th>
            <th>Expired</th>
            <th>Renewal</th>
        </tr>
        </thead> 
                {
                    arrobj.map((val)=>{
                        return(
                            <Dashboardtablecomp
                            sno={val.sno}
                            name={val.name}
                            phonenumber={val.phonenumber}
                            joiningdate={val.joiningdate}
                            expired={val.expired}
                            renewel={val.renewel}
                            />
                        )
                    })
                }
                {/* <div className='Formcomp_bnt_con'>
                <button className='popupbutton' onClick={()=>Navigate("/Dashboardregisterform")}>Okay</button>
                </div> */}
            {/* </table> */}
    </>
  )
}
