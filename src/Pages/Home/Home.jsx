import React, { useState } from "react";
import { Drawer } from "../../Component/Drawer";
import "../../App.css";
import { DoctorProfile } from "../../Component/DoctorProfile";
import { Link } from "react-router";
import { FaPlus, FaPrescription } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Symptoms } from "../../Component/Symptoms";
import { Tests } from "../../Component/Tests";
const allMedicines = [
  "Napa 500mg",
  "Paracetamol 650mg",
  "Doxycycline", // D
  "Erythromycin",
  "Fluconazole",
  "Gabapentin",
  "Hydroxychloroquine",
  "Ibuprofen",
  "Josamycin",
  "Ketorolac",
  "Loratadine",
  "Metformin",
  "Benadryl",
  "Amoxiclillin 500mg",
  "Cloacard 100mg",
  "Metformin",
  "Ace",
  "Omeprazole",
];
export const Home = () => {
  const icon = "https://cdn-icons-png.flaticon.com/512/1455/1455597.png";

  const [medicines, setMedicines] = useState([
    { name: "", frequency: "", doses: "", duration: "" },
  ]);
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAddField = () => {
    setMedicines([
      ...medicines,
      { name: "", frequency: "", doses: "", duration: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);

    if (field === "name") {
      if (value.trim() === "") {
        setSuggestions([]);
        setActiveIndex(null);
      } else {
        const filtered = allMedicines.filter((med) =>
          med.toLowerCase().startsWith(value.toLowerCase())
        );
        setSuggestions(filtered);
        setActiveIndex(index);
      }
    }
  };

  const handleSuggestionClick = (index, suggestion) => {
    const updated = [...medicines];
    updated[index].name = suggestion;
    setMedicines(updated);
    setSuggestions([]);
    setActiveIndex(null);
  };

  const handleDelete = (index) => {
    const updated = medicines.filter((_, i) => i !== index);
    setMedicines(updated);
  };

  // Defualt Values
  const defaultFrequency = "0+1+0";
  const defualtDose = "Before Meal";
  return (
    <div>
      <title>Prescription Module UI</title>
      <div className="container">
        <DoctorProfile />

        <div className="flex gap-4 flex-col md:flex-row">
          {/*  */}
          <aside className="md:w-2/5 shadow-md p-4 rounded-lg space-y-7">
            {/* Input Field For Symptoms */}
            <Symptoms />

            {/* Input Field For Tests */}
            <Tests />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">
                Advice:
              </h3>
              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter Doctor's Advice..."
              ></textarea>
            </div>

            {/* Attach FIle */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Attach Report</legend>
              <input type="file" className="file-input" />
            </fieldset>
          </aside>
          {/*  */}
          <div
            className="border border-gray-200 w-full
                     p-4 shadow-md rounded-lg space-y-6 "
          >
            <div className="text-center flex justify-center items-center gap-4">
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 input"
                placeholder="Enter Patient Id"
              />{" "}
              <p>
                {" "}
                <strong>Pr No:</strong> 123456
              </p>
            </div>

            {/* Patient Information Form Section */}

            <div
              className="grid md:grid-cols-5  gap-4 
                     px-4"
            >
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Patient Name:
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 input"
                  placeholder="Enter Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="number"
                  className="border border-gray-300 rounded px-2 py-1 input"
                  placeholder="Enter Number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Age:
                </label>
                <input
                  type="number"
                  className="border border-gray-300 rounded px-2 py-1 input"
                  placeholder="35"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 ">
                  Sex:
                </label>
                <select className="border border-gray-300 rounded px-2 py-1 input">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Date Of Birth:
                </label>
                <input
                  type="date"
                  className="border border-gray-300 rounded px-2 py-1 input"
                />
              </div>
            </div>

            <div className="flex items-center px-4">
              <img className="w-5 h-5" src={icon} alt={"rx-icon"} />
              <FaPrescription />
            </div>

            {/* Add Medicine */}

            <div className="flex flex-col relative">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Medicine Name
              </label>
              {medicines.map((med, index) => (
                <div key={index} className="mb-4 relative">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Medicine input */}
                    <input
                      type="text"
                      placeholder="Medicine Name"
                      value={med.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
                      className="border border-gray-300 rounded px-2 py-1 w-40"
                    />

                    {/* */}
                    {med.name && (
                      <>
                        {/* Frequency Dropdown */}
                        <select
                          value={med.frequency || defaultFrequency}
                          defaultValue={"1+1+1"}
                          onChange={(e) =>
                            handleChange(index, "frequency", e.target.value)
                          }
                          className="border border-gray-300 rounded px-2 py-1 "
                        >
                          <option value="1+0+1">1+0+1</option>
                          <option value="1+0+0">1+0+0</option>
                          <option value="1+0+0">1+1+1</option>
                          <option value="0+1+1">0+1+1</option>
                        </select>
                        {/* Doses Dropdown */}
                        <select
                          value={med.doses || defualtDose}
                          onChange={(e) =>
                            handleChange(index, "doses", e.target.value)
                          }
                          className="border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="Before Meal">Before Meal</option>
                          <option value="After Meal">After Meal</option>
                        </select>
                        {/* Duration Dropdown */}
                        <select
                          value={med.duration}
                          onChange={(e) =>
                            handleChange(index, "duration", e.target.value)
                          }
                          className="border border-gray-300 rounded px-2 py-1 "
                        >
                          <option value="30 days">30 days</option>
                          <option value="15 days">15 days</option>
                          <option value="10 days">10 days</option>
                          <option value="7 days">7 days</option>
                        </select>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-2xl  text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          <RxCross1 />
                        </button>
                      </>
                    )}

                    {/* Add button */}
                    {index === medicines.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddField}
                        className="btn btn-neutral"
                      >
                        <FaPlus />
                      </button>
                    )}
                  </div>

                  {/* Suggestion dropdown */}
                  {suggestions.length > 0 && activeIndex === index && (
                    <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-40 shadow">
                      {suggestions.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleSuggestionClick(index, item)}
                          className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="= flex justify-center">
              <Link to={"/patientPrescription"}>
                <button
                  className="btn bg-blue-900 text-white
                                 hover:bg-blue-600"
                >
                  Submit
                </button>
              </Link>
            </div>

            {/* ............... */}
          </div>
        </div>
      </div>
    </div>
  );
};
