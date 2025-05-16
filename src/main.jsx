import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { SignIn } from './Pages/Auth/SignIn';
import { Home } from './Pages/Home/Home';
import { Demo } from './Pages/Demo/Demo';
import { Demo2 } from './Pages/Demo/Demo2';
import { MainLayout } from './Layout/MainLayout';
import { AddMedicine } from './Pages/AddMedicine/AddMedicine';
import { PatientAllRecords } from './Pages/PatientALLRecords/PatientAllRecords';
import { PatientRecords } from './Pages/PatientRecords/PatientRecords';
import { Prescription } from './Pages/Prescription/Prescription';
import { PrescriptionPdf } from './Pages/PrescriptionPdf/PrescriptionPdf';
import { PatientReports } from './Pages/PatientsReport/PatientReports';
import { AddReport } from './Pages/AddReport/AddReport';
import { SignUp } from './Pages/Auth/SignUp';




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
       path:"/",
        element:<Home/> //Patient Prescription

      },
    
      {
       
        path:"/addmedicine",
        element:<AddMedicine/>
      },
      {
        path:"/patientallrecords",
        element:<PatientAllRecords/>
      },
      {
        path:"/patientrecords/:patientId",
        element:<PatientRecords/>
      },
      {
        path:"/patientPrescription",
        element:<Prescription/>
    },
      {
        path:"/patientReports",
        element:<PatientReports/>
    },
    {
      path:'/addReport',
      element:<AddReport/>
    }

    
    ]
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:'/prescriptionPdf',
    element:<PrescriptionPdf/>
  }

  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
