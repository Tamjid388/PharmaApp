
import { FaPrescription } from 'react-icons/fa'
import { DoctorProfile } from '../../Component/DoctorProfile'
import { Link } from 'react-router'


export const Prescription = () => {
    const icon = "https://cdn-icons-png.flaticon.com/512/1455/1455597.png"
    return (
        <div>
            <div className='container'>
                <DoctorProfile />

                <div>

                </div>
                <div className='flex gap-4 flex-col md:flex-row'>
                    {/*  */}
                    <aside className='md:w-2/5 shadow-md p-4 rounded-lg space-y-7'>
                        <div className=''>
                            <h3 className='font-semibold text-gray-800 text-lg mb-1'>Symptoms:</h3>
                            <ul className='list-decimal list-inside 
                    border border-gray-200 rounded-md
                     p-3 mb-3'>
                                <li>Fatigue</li>
                                <li>Headaches</li>
                                <li>Joint pain</li>
                            </ul>

                        </div>
                        <div >
                            <h3 className='font-semibold text-gray-800 text-lg mb-1'>Tests:</h3>

                            <ul className='list-decimal list-inside border border-gray-200 rounded-md
                     p-3 mb-3'>
                                <li>TSH</li>
                                <li>CBC</li>
                                <li> Urine</li>
                            </ul>
                        </div>
                        <div >
                            <h3 className='font-semibold text-gray-800 text-lg mb-1'>Advice:</h3>
                            <p className='border border-gray-200 rounded-md
                     p-3 mb-3'>Maintain a balanced
                                lifestyle by eating nutritious foods,
                                exercising regularly, managing stress properly, and following medical guidance to ensure long-term health and well-being.</p>
                        </div>
                    </aside>
                    {/*  */}
                    <div className='border border-gray-200 w-full
                     p-4 shadow-md rounded-lg space-y-6'>
                        <div className='text-center'>
                            <p><strong>Patient Id:</strong> 987654 | <strong>Pr No:</strong> 123456</p>
                        </div>
                        <div className="flex gap-8 justify-between px-4">
                            <p><strong>Name:</strong> John Smith</p>
                            <p><strong>Age:</strong> 35</p>
                            <p><strong>Gender:</strong> Male</p>
                            <p><strong>Date:</strong> 08 Feb 2025</p>
                        </div>

                        <div className='flex items-center px-4'>
                            <img className='w-5 h-5' src={icon} alt={'rx-icon'} />
                            <FaPrescription />
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
                                    {Array.from({ length: 8 }).map((_, index) => (
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
                        <div className='= flex justify-center'>
                            <Link to={'/prescriptionPdf'}>
                                <button className='btn btn-neutral hover:bg-blue-600'>Print</button>
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
