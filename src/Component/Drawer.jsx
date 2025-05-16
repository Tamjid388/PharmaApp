import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router'

export const Drawer = () => {
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen  relative">
          {/* Page content here */}
          <label htmlFor="my-drawer"
            className="btn fixed  bg-[#dd1010] border-none text-white
      w-12 h-12 rounded-full drawer-button absolute z-10
     bottom-10 left-4
     ">
            <GiHamburgerMenu />
          </label>
          <label htmlFor="">

          </label>


        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar" className=" relative z-10 m-4  rounded-full">
            <MdCancel className='text-4xl text-white w-12 h-12 rounded-full' />
          </label>

          <ul className="menu bg-[#272727] text-white   min-h-full w-80 p-4 pt-20 text-lg">
            {/* Sidebar content here */}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/addmedicine'>Add Medicine</Link>
            </li>


            <li>
              <Link to='/patientallrecords'>Patient All Records </Link>
            </li>
            <li>
              <Link to='/patientReports'>Patient Reports</Link>
            </li>
            <li>
              <Link to='/addReport'>Add Report</Link>
            </li>
            <li>
              <Link to='/signin'>Sign Out</Link>
            </li>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
            <li>
              <Link to='/signup'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
