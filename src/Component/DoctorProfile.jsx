import React from 'react'
import "../App.css"
import doctorImage from "../assets/images/dr.png"
export const DoctorProfile = () => {
  return (
        <div className=" header flex flex-col md:flex-row gap-4 mx-2">
       
  <div className="profile-section">
        <img className="dr-profile" src={doctorImage}/>
      </div>
      <div className="info-section">
        <h2>Prof. Dr. Md. Anwarul Karim</h2>
        <p>Professor & Chairman, Pediatric Hematology & Oncology</p>
      </div>

   

      

      </div>
  )
}
