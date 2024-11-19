export default function Whatido() {
  return (
    <div className="flex justify-center items-center min-h-screen" id="whatido">
      <div className="bg-gray-100 text-black text-center p-8 rounded-lg shadow-2xl mb-9 w-8/12">
        <h2 className="text-3xl font-bold mb-2">What I do</h2>
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-emerald-300"></div>
        </div>
        <p className="p-4 text-lg text-justify">
          Skilled in React development with hands-on experience using hooks,
          state management, React Router, portals, and props to build dynamic
          and responsive web applications. Possess basic knowledge of Java and
          Python, and eager to learn and contribute to projects, tackling
          upcoming tasks and challenges.
        </p>
        <div className="mt-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg text-center shadow-lg">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Web Development</h3>
              <p className="mt-2 text-base text-gray-500">
                Create responsive and modern websites.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg text-center shadow-lg">
              <div className="text-yellow-500 text-4xl ">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">UX/UI Design</h3>
              <p className="mt-2 text-base text-gray-500">
                Design user interfaces that are intuitive and engaging.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg text-center shadow-lg">
              <div className="text-yellow-500 text-4xl ">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Mobile Design</h3>
              <p className="mt-2 text-base text-gray-500">
                Develop mobile-friendly interfaces and experiences.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg text-center shadow-lg">
              <div className="text-yellow-500 text-4xl ">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Backend</h3>
              <p className="mt-2 text-base text-gray-500">
                Creating backends with Node.js, Express, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
