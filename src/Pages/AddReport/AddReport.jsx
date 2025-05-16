import '../../App.css'

export const AddReport = () => {
  return (
    <div>
       <title>Add Report</title>
      <div className='container'>
        <div class="header text-center flex flex-col md:flex-row gap-4 
      ">
      

      <h2 className='text-4xl'>Dr. Sumon | Prescription Module</h2>
      <p>General Physician | License #12345 | Phone: (+00) 123-4567</p>
    </div>
    {/* Add Report */}
    <div className='min-h-[400px] shadow-2xl rounded-lg'>
      <p className='my-4 mx-14'>Please Add Your Report</p>
      <div className='min-h-[300px] mx-14 border border-dashed
     flex justify-center items-center'>
    <div>
  <input
    type="file"
    id="report-upload"
    className="hidden"
    accept="image/*,application/pdf"
    multiple
  />
  <label
    htmlFor="report-upload"
    className="btn cursor-pointer bg-[#272727] text-white "
  >
    Select Report
  </label>
</div>
      </div>
    <div className='flex justify-center'>
        <button
         className='btn btn-primary my-8'>Submit</button>
    </div>

    </div>


      </div>
    </div>
  )
}
