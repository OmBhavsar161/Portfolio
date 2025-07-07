import Resume from "./assets/Resume/Om Bhavsar Resume.pdf";

const Home = () => {
  return (
    <div className="relative w-full h-[36rem]">
      <img
        src="./image5.jpg"
        className="w-full h-[36rem] object-cover"
        alt="Background"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-teal-100 text-6xl mt-10">
        Om Bhavsar
        <div className="flex mt-8 space-x-4">
          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://linkedin.com/in/om-bhavsar-172731270"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transform hover:scale-110 transition duration-300"
            >
              <img src="/linkedin_logo.svg" className="w-6 h-6 text-white" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-white bg-black bg-opacity-80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
              LinkedIn
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/OmBhavsar161"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 transform hover:scale-110 transition duration-300"
            >
              <img src="/github_logo.svg" className="w-6 h-6 text-white" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-white bg-black bg-opacity-80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
              GitHub
            </span>
          </div>

          {/* Email */}
          <div className="relative group">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&to=ombhavsar2004@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transform hover:scale-110 transition duration-300"
            >
              <img src="/email_logo.svg" className="w-8 h-8" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-white bg-black bg-opacity-80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
              Email
            </span>
          </div>

          {/* Resume */}
          <div className="relative group">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 hover:bg-green-800 transform hover:scale-110 transition duration-300"
            >
              <img src="/resume_logo.svg" className="w-6 h-6 text-white" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-white bg-black bg-opacity-80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
              Resume
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
