import { IoEye } from "react-icons/io5"
import "../../App.css"
import { DoctorProfile } from "../../Component/DoctorProfile"
import { useState } from "react";
import { Link } from "react-router";

export const PatientAllRecords = () => {
    const patients = [
  {
    sl: 1,
    patientId: '10001',
    date: '2025-05-14',
    name: 'Abdur Rahman',
    phone: '01815-121325',
    view: true,
    prescription: true
  },
  {
    sl: 2,
    patientId: '10002',
    date: '2025-05-14',
    name: 'Zahid Hasan',
    phone: '01815-121325',
    view: true,
    prescription: true
  },
  {
    sl: 3,
    patientId: '10003',
    date: '2025-05-14',
    name: 'Utpol Nondi',
    phone: '01815-121325',
    view: true,
    prescription: true
  }
];
  const [patientId, setPatientId] = useState("");
  const [name, setName] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patients);

const handleFilter = () => {
  const idInput = patientId.trim();
  const nameInput = name.trim().toLowerCase();
 
  const result = patients.filter((patient) => {
    const idMatch = patient.patientId.includes(idInput);
    const nameMatch = patient.name.toLowerCase().includes(nameInput);
    
    if (!idInput && !nameInput) return true;

    return idMatch && nameMatch;
  });

  setFilteredPatients(result);
};


  return (
    <div>
        <div className="container">
            <DoctorProfile/>


            <div className="">
              <h1 className="font-semibold text-2xl mb-4">
                Patient All Records</h1>

                <form  className="grid grid-cols-6 items-center gap-8">
                  {/* Patient ID */}
                    <input type="text" 
                    placeholder="Patient ID"
                     value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
                     className="input" />
                  {/* Name */}
                    <input type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                     className="input" />
                   {/* Phone Number */}
                    <input type="text" 
                    placeholder="Phone Number"
                     className="input" />

                     {/* From Date */}
                     <div className="flex items-center">
                        <label className="font-semibold">From Date</label>
                        <input type="date" className="input" />
                     </div>
                     {/* To  Date */}
                     <div className="flex items-center">
                        <label className="font-semibold">To Date</label>
                        <input type="date" className="input" />
                     </div>
                     <div>
                        <button type="button" className="btn btn-primary" 
                        onClick={handleFilter}>
                            Submit</button>
                     </div>
                </form>

                {/* Table */}

                <div className="overflow-x-auto mt-3">
  <table className="table table-zebra table-bordered">
    {/* head */}
    <thead>
      <tr className="bg-black text-white">
        <th>Sl</th>
        <th>Patient Id</th>
        <th>Date</th>
        <th>Name</th>
        <th>Phone</th>
        <th>View</th>
        <th>View Prescription</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{
   filteredPatients.map((patient)=><tr key={patient.sl}>
        <th>{patient.sl}</th>
        <td>{patient.patientId}</td>
        <td>{patient.date}</td>
        <td>{patient.name}</td>
        <td>{patient. phone}</td>
         <td className="">
            <Link to={`/patientrecords/${patient.patientId}`}>
                <button className="btn flex items-center justify-center
             text-white bg-blue-500">
                <span>View</span>
                 <span><IoEye/></span></button>
            </Link>
        
        </td> 
       <td className="">
        <Link  to={'/prescriptionPdf'}>
          <button className="btn flex items-center justify-center text-white bg-green-700">
                <span>View</span>
                 <span><IoEye/></span></button>
        </Link>
          
        </td> 
      </tr>)
}
  
    
    </tbody>
  </table>
</div>
            </div>

        </div>
    </div>
  )
}
