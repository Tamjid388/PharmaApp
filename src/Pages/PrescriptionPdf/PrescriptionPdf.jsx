
import header from "../../assets/images/reports/header.jpg"
import footer from "../../assets/images/reports/footer.jpg"
import { Link } from 'react-router'
import { FaPrescription } from 'react-icons/fa'

export const PrescriptionPdf = () => {
   
  return (
    <div className='max-w-6xl mx-auto  mt-4'>
<div>
  <img className='h-[192px] w-full p-4 ' src={header} alt="" />
</div>
{/* Body */}
     <div className='flex gap-4 flex-col md:flex-row'>
                    {/*  */}
                    <aside className='w-2/5  p-4 rounded-lg space-y-7'>
                        <div className=''>
                            <h3 className='font-semibold text-gray-800 text-lg mb-1'>Symptoms:</h3>
                         
                              <div className='
                          
                      mb-3'>
                        <p> Fatigue,Headaches,Joint pain</p>
                               
                                
                            </div>

                        </div>
                        <div >
                            <h3 className='font-semibold text-gray-800 text-lg mb-1'>Tests:</h3>

                            <div className='
                          
                      mb-3'>
                        <p> TSH,CBC,Urine</p>
                               
                                
                            </div>
                        </div>
                        <div >
                            <h3 className='font-semibold text-gray-800 text-lg mb-1'>Advice:</h3>
                            <p className=' 
                     mb-3'>Maintain a balanced
                                lifestyle by eating nutritious foods,
                                exercising regularly.
                               
                                 </p>
                        </div>
                    </aside>
                    {/*  */}
                    <div className='border-l border-gray-200 w-full
                     p-4  space-y-6'>
                        <div className='text-center'>
                            <p><strong>Patient Id:</strong> 987654 | <strong>Pr No:</strong> 123456</p>
                        </div>
                        <div className="flex gap-8 justify-between px-4">
                            <p><strong>Name:</strong> John Smith</p>
                            <p><strong>Age:</strong> 35</p>
                            <p><strong>Gender:</strong> Male</p>
                            <p><strong>Date:</strong> 08 Feb 2025</p>
                        </div>

                        <div className=' px-4'>
                           
                            <FaPrescription className='text-2xl text-green-700' />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className='text-black'>
                                        <th>Medicine Name</th>
                                        <th>Dosages</th>
                                        <th>Meal</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <tr key={index}>
                                            <td>Paracetamol 500mg</td>
                                            <td>1 + 0 + 1</td>
                                            <td>After Meal</td>
                                            <td>5 days</td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                     
                    </div>


                </div>


{/* Footer */}
<div>
  <img className='h-[125px]  w-full p-4 ' src={footer} alt="" />
</div>
   <div className='= flex justify-center'>
                            <Link >
                                <button  onClick={() => window.print()} className='btn text-white bg-red-700 hover:bg-blue-600'>Print</button>
                            </Link>
                        </div>
    </div>
  )
}
