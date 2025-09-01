import React from 'react'
import Image from '../assets/empty.png'
import { Link } from 'react-router-dom'

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-80 bg-white rounded-md shadow-md overflow-hidden flex flex-col items-center">
        <img
          className="w-full h-56 object-contain p-4"
          src={Image}
          alt="Empty Project"
        />
        <Link
          to="/project"
          className="p-4 w-full text-center bg-gray-900 text-white font-semibold hover:bg-gray-700 transition rounded-b-md"
        >
          + Add Project
        </Link>
      </div>
    </div>
  )
}

export default Empty
