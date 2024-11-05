import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page3 = () => {
    const navigate = useNavigate();
    const handleNext = ()=>{
        navigate('/Page4');
    }
    const handlePrev = ()=>{
        navigate(-1);
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Select Profession</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Choose Your Profession</label>
                        <select
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            disabled
                        >
                            <option value="student">Student</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Choose Course</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter your course"
                            required
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handlePrev}
                            type="button"
                            className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            type="button"
                            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page3