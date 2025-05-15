import React from 'react'
import { DoctorProfile } from '../../Component/DoctorProfile'
import { Link, useParams } from 'react-router';
import { IoEye } from 'react-icons/io5';

export const PatientRecords = () => {
    const { patientId } = useParams();
    console.log(patientId);
    const patientRecords = [
  // Abdur Rahman - patientId: 10001
  {
    patientId: '10001',
    date: '2025-05-01',
    name: 'Abdur Rahman',
    phone: '01815-121325',
  },
  {
    patientId: '10001',
    date: '2025-05-08',
    name: 'Abdur Rahman',
    phone: '01815-121325',
  },
  {
    patientId: '10001',
    date: '2025-05-14',
    name: 'Abdur Rahman',
    phone: '01815-121325',
  },

  // Zahid Hasan - patientId: 10002
  {
    patientId: '10002',
    date: '2025-05-02',
    name: 'Zahid Hasan',
    phone: '01815-121325',
  },
  {
    patientId: '10002',
    date: '2025-05-09',
    name: 'Zahid Hasan',
    phone: '01815-121325',
  },
  {
    patientId: '10002',
    date: '2025-05-14',
    name: 'Zahid Hasan',
    phone: '01815-121325',
  },

  // Utpol Nondi - patientId: 10003
  {
    patientId: '10003',
    date: '2025-05-03',
    name: 'Utpol Nondi',
    phone: '01815-121325',
  },
  {
    patientId: '10003',
    date: '2025-05-10',
    name: 'Utpol Nondi',
    phone: '01815-121325',
  },
  {
    patientId: '10003',
    date: '2025-05-14',
    name: 'Utpol Nondi',
    phone: '01815-121325',
  },
];
const individualRecord=
patientRecords.filter(patient=> parseInt(patient.patientId)===parseInt(patientId))

  return (
    <div>
        <div className="container">
            <DoctorProfile/>

 <h1 className="font-semibold text-2xl mb-4">
                Patient  Records</h1>
                   {/* Table */}
            
                            <div className="overflow-x-auto mt-3 border border-gray-200">
              <table className="table table-zebra table-bordered">
                {/* head */}
                <thead>
                  <tr className="bg-black text-white">
                    <th>Sl</th>
                    <th>Patient Id</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>View Report</th>
                    <th>View Prescription</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
            {
              individualRecord.map((patient)=><tr key={patient.sl}>
                    <th>{patient.sl}</th>
                    <td>{patient.patientId}</td>
                    <td>{patient.date}</td>
                    <td>{patient.name}</td>
                    <td>{patient. phone}</td>
                     <td className="">
                    <Link to={'/patientReports'}>
                     <button className="btn flex items-center justify-center
                         text-white bg-[#272727]">
                            <span>View</span>
                             <span><IoEye/></span>
                             </button>
                    </Link>
                           
                       
                    
                    </td> 
                   <td className="">
                   <Link to="/patientPrescription">
                        <button className="btn flex items-center justify-center text-white bg-green-700">
                            <span>View</span>
                             <span><IoEye/></span>
                             </button>
                   </Link>
                    </td> 
                  </tr>)
            }
              
                
                </tbody>
              </table>
            </div>
        </div>
    </div>
  )
}
