import React from "react";

function Education() {
  return (
    <div className="flex justify-center items-center mt-24 ">
      <div className="bg-gray-100 text-black text-center p-8 rounded-lg shadow-2xl mb-9 w-8/12">
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-emerald-300"></div>
        </div>
        <p className="p-4 text-lg text-justify">
          Education Details
        </p>
        <div className="mt-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-8/12 mx-auto">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Web Development
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Create responsive and modern websites.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                UX/UI Design
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Design user interfaces that are intuitive and engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

// import React from 'react'

// function Education() {
//   return (
//     <div className="flex justify-center items-center mt-24">
//       <div className="bg-gray-100 text-black text-center p-8 rounded-lg shadow-2xl mb-9 w-11/12 md:w-8/12">
//         <h2 className="text-3xl font-bold mb-2">What I do</h2>
//         <div className="flex justify-center pb-2">
//           <div className="w-32 h-1 bg-emerald-300"></div>
//         </div>
//         <p className="p-4 text-lg text-justify">
//           Skilled in React development with hands-on experience using hooks,
//           state management, React Router, portals, and props to build dynamic
//           and responsive web applications. Possess basic knowledge of Java and
//           Python, and eager to learn and contribute to projects, tackling
//           upcoming tasks and challenges.
//         </p>

//         <div className="mt-12 flex justify-center">
//           <div className="flex flex-wrap justify-center space-x-0 md:space-x-10">
//             <div className="bg-gray-200 px-6 py-10 rounded-lg text-center shadow-lg w-full md:w-1/3 mb-6 md:mb-0">
//               <div className="text-yellow-500 text-4xl">
//                 <i className="fas fa-code"></i>
//               </div>
//               <h3 className="mt-2 text-lg font-semibold text-gray-900">Web Development</h3>
//               <p className="mt-2 text-base text-gray-500">
//                 Create responsive and modern websites.
//               </p>
//             </div>
//             <div className="bg-gray-200 px-6 py-10 rounded-lg text-center shadow-lg w-full md:w-1/3">
//               <div className="text-yellow-500 text-4xl">
//                 <i className="fas fa-paint-brush"></i>
//               </div>
//               <h3 className="mt-2 text-lg font-semibold text-gray-900">UX/UI Design</h3>
//               <p className="mt-2 text-base text-gray-500">
//                 Design user interfaces that are intuitive and engaging.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Education
