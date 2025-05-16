import { ImCross } from "react-icons/im"
import "../../App.css"

import { FiPlus } from "react-icons/fi"
import { useState } from "react"
import { DoctorProfile } from "../../Component/DoctorProfile"


export const AddMedicine = () => {
  const [medicineInputs, setMedicineInputs] = useState([""]);

  // handleInputChange
  const handleInputChange = (index, value) => {
    const updatedInputs = [...medicineInputs];
    updatedInputs[index] = value;
    setMedicineInputs(updatedInputs);
  };

  // handleAddField 
  const handleAddField = () => {
    setMedicineInputs([...medicineInputs, ""]);
  };

  // handleRemoveField 
  const handleRemoveField = (index) => {
    const updatedInputs = medicineInputs.filter((_, i) => i !== index);
    setMedicineInputs(updatedInputs);
  };
  return (
    <div>
        <title> Add Medicine</title>
      <div className=' container '>

        <DoctorProfile />
        <div className=" border border-gray-200 rounded-lg max-w-2xl mx-auto  flex flex-col shadow-lg min-h-[200px] px-3 py-4">
          <label className="font-semibold mb-2">
            Please Add Medicine Name
          </label>

          {/* Input Field */}
          <div className="flex flex-col gap-3">
            {medicineInputs.map((medicine, index) => (
              <div key={index} className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Type medicine name"
                  value={medicine}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="input"
                />
                <button
                  onClick={() => handleRemoveField(index)}
                  className="bg-[#dd1010] rounded-sm text-white p-2 border-none"
                >
                  <ImCross />
                </button>
              </div>
            ))}
          </div>




          {/* Add Medicine */}
          <div>
            <button
              onClick={handleAddField}
              className="btn text-white bg-black hover:bg-blue-600 mt-4">
              <span className=""><FiPlus /></span> Add Medicine</button>
          </div>
        </div>



      </div>


    </div>

  )
}
