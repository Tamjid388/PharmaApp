import { ImCross } from "react-icons/im"
import "../../App.css"
import doctorImage from "../../assets/images/dr.png"
import { FiPlus } from "react-icons/fi"
import { useState } from "react"
import { DoctorProfile } from "../../Component/DoctorProfile"


export const AddMedicine = () => {
 const [medicineInputs, setMedicineInputs] = useState(['']);
  return (
    <div>
    <div className=' container '>
      {/* <div className=" header">
       
  <div class="profile-section">
        <img className="dr-profile" src={doctorImage}/>
      </div>
      <div className="info-section">
        <h2>Prof. Dr. Md. Anwarul Karim</h2>
        <p>Professor & Chairman, Pediatric Hematology & Oncology</p>
      </div>

   

      

      </div> */}
      <DoctorProfile/>
<div className="max-w-2xl mx-auto  flex flex-col shadow-lg min-h-[200px] px-3 py-4">
  <label className="font-semibold mb-2">
    Please Add Medicine Name
  </label>

  {/* Input Field */}
  <div className="flex gap-4">
    <input type="text" placeholder="Type here" className="input" />
    <button className="bg-[#dd1010] rounded-sm text-white p-2 border-none">
      <ImCross/>
    </button>
  </div>
  <div>
    <button className="btn text-white bg-black hover:bg-blue-600 mt-4">
      <span className=""><FiPlus/></span> Add Medicine</button>
  </div>
</div>
    
     
     
    </div>

 
    </div>

  )
}
