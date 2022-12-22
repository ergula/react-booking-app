import React from 'react'

const Form = () => {
  return (
    
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-100">First name</label >
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-100">First name</label >
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-100">First name</label >
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-100">First name</label >
            <input type="tel" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        </div>
       
    <button type="submit" className="text-white bg-darkBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  )
}

export default Form