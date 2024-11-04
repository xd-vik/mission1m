import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page5 = () => {
    const navigate = useNavigate();
    const handlePrev = ()=>{
        navigate(-1);
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Finish Signup</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your skills (comma-separated)"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Your Interested In</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Search for your interests"
            required
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Finish Signup
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Page5