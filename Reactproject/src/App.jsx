
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Getstart } from './Gymproject/Getstartpage/Getstart'
import { Loginpage } from './Gymproject/Loginpage/Loginpage'
import { Forgetpass } from './Gymproject/Forgetpass/Forgetpass'
import { Otppage } from './Gymproject/Otppage/Otppage'
import { Resetpass } from './Gymproject/Resetpage/Resetpass'
import { Dashboard } from './Gymproject/Dashboard/Dashboard'
import "./App.css"
import { Dashboard_Accountpage } from './Gymproject/Dashboard_pages/Dashboard_Account/Dashboard_Accountpage'
import { Dashboardcomp } from './Gymproject/Dashboard_pages/Dashboardcomp/Dashboardcomp'
import { DashboardAcc_Expired } from './Gymproject/Dashboard_pages/Dashboard_Account_Expired/DashboardAcc_Expired'
import { Dashboardregisterform } from './Gymproject/Dashboard_pages/Dashboardregisterform/Dashboardregisterform'
import { Dashboardpopup } from './Gymproject/Dashboard_pages/Dashboardpopup/Dashboardpopup'
import { Dashboardsecpopup } from './Gymproject/Dashboard_pages/Dashboardpopup/Dashboardsecpopup'
import { Viewregisterpage01 } from './Gymproject/Viewregister/Viewregisterpage01/Viewregisterpage01'
import { Viewregisterpage02 } from './Gymproject/Viewregister/Viewregisterpage02/Viewregisterpage02'
import { Viewregisterpage03 } from './Gymproject/Viewregister/Viewregisterpage03/Viewregisterpage03'
import { PaymentHistory } from './Gymproject/PaymentHistory/PaymentHistory'
import { Logoutpage } from './Gymproject/Logout/Logoutpage'
import { Viewregisterpopup01 } from './Gymproject/Viewregister/Viewregisterpopup/Viewregisterpopup01'
import { Viewregisterpopup02 } from './Gymproject/Viewregister/Viewregisterpopup/Viewregisterpopup02'
import { Demo } from './demo'
import { Viewregisterprofilepopup01 } from './Gymproject/Viewregister/Viewregisterprofilepopup/Viewregisterprofilepopup01'
import { Viewregisterprofilepopup02 } from './Gymproject/Viewregister/Viewregisterprofilepopup/Viewregisterprofilepopup02'

function App() {

  

  return (
    <>
    {/* <Gymproject/> */}
{/* <PersistentDrawerLeft/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Getstart/>} />
      <Route path='/Login_page' element={<Loginpage/>}/>
      <Route path='/Forgetpass' element={<Forgetpass/>}/>
      <Route path='/Otppage' element={<Otppage/>}/>
      <Route path='/Resetpass' element={<Resetpass/>}/>
      
       <Route element={<Dashboard/>}>
          <Route path="/Dashboardcomp" element={<Dashboardcomp/>}/>
          <Route path='/Dashboard_Accountpage' element={<Dashboard_Accountpage/>}/>
          {/* <Route index element={<Dashboard_Accountpage/>}/> */}
          <Route path='/DashboardAcc_Expired' element={<DashboardAcc_Expired/>}/>
          <Route path='/Dashboardregisterform' element={<Dashboardregisterform/>}/>
          <Route path='/Dashboardpopup' element={<Dashboardpopup/>}/>
          <Route path='/dashboardsecpopup' element={<Dashboardsecpopup/>}/>



          {/* <Route index element={<Dashboardcomp/>}>
          <Route  path='/Dashboard_Accountpage'  element={<Dashboard_Accountpage/>}/>
          <Route index='/Dashboard_Accountpage' element={<Dashboard_Accountpage/>}/>
          <Route path='/DashboardAcc_Expired' element={<DashboardAcc_Expired/>}/>
          </Route> */}

          <Route path='/Viewregisterpage01' element={<Viewregisterpage01/>} />
          <Route path='/Viewregisterpage02' element={<Viewregisterpage02/>}/>
          <Route path='/Viewregisterpage03' element={<Viewregisterpage03/>}/>
          <Route path='/Viewregisterpopup01' element={<Viewregisterpopup01/>}/>
          <Route path='/Viewregisterpopup02' element={<Viewregisterpopup02/>}/>

          <Route path="/PaymentHistory" element={<PaymentHistory/>}/>
          <Route path='/Logout' element={<Logoutpage/>}/>

          <Route path='/Viewregisterprofilepopup01' element={<Viewregisterprofilepopup01/>}/>
          <Route path='/Viewregisterprofilepopup02' element={<Viewregisterprofilepopup02/>}/>
        </Route>
    </Routes>    
    </BrowserRouter>


    {/* <Demo/> */}
    </>
  )
}

export default App
