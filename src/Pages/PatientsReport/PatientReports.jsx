import React from 'react'
import { DoctorProfile } from '../../Component/DoctorProfile'
import image1 from "../../assets/images/reports/1.png"
import image2 from "../../assets/images/reports/2.png"
// Light Gallery


import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const PatientReports = () => {
   const images = [
        { src: image1, alt: "Report 1",name:'TSH' },
        { src: image2, alt: "Report 2",name:'FT4' },
         { src: image1, alt: "Report 3",name:'TSH' },
            { src: image2, alt: "Report 4",name:'FT4' },
    ];
  return (
    <div className='container'>
       <title> Patient  Reports</title>
        <DoctorProfile/>

        <div>
             <h1 className="font-semibold text-2xl mb-4">
                Patient  Reports</h1>

           <div  >
                  <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {images.map((img, index) => (
          <a href={img.src} key={index}>
            <img   src={img.src} alt={img.alt} 
            className="w-full object-contain rounded shadow h-[300px] hover:shadow-2xl " />
          <p className='text-center font-semibold underline py-2'> {img.name}</p>
          </a>
        ))}
      </LightGallery> 
           </div>
        </div>
    </div>
  )
}
