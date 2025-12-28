import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Dashboard_Account/Dashboard_Accountpage.css"
import { Dashboardcomp } from '../Dashboardcomp/Dashboardcomp'

export const Dashboard_Accountpage = () => {

  return (
    <>
    <Dashboardcomp/>
    <div className='DashboardAccountpage'>
      <div className='Dashboardaccount'>
        <p className='Dashboardpara'> Accounts are going to expired with in 3 days</p>
      </div>
    </div>
    </>
  )
}
