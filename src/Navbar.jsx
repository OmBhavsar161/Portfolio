import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hover =
    "w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:text-teal-900 hover:bg-teal-300 hover:border-teal-300 hover:shadow-md hover:shadow-teal-300";
  // const hover = "w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:text-teal-900 hover:bg-teal-300";

  return (
    <>
      <nav className="bg-teal-700 fixed w-full z-20 border-gray-200 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <h2 className="text-3xl text-teal-100">Om Bhavsar</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-teal-200 rounded-lg md:hidden hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-teal-700 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-teal-700 mr-[-70px]">
              <li className="md:inline-flex">
                <button
                  className={hover}
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  Home
                </button>
              </li>
              <li className="md:inline-flex">
                <button
                  className={hover}
                  onClick={() => {
                    document.getElementById("whatido")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  About
                </button>
              </li>
              <li className="md:inline-flex">
                <button
                  className={hover}
                  onClick={() => {
                    document.getElementById("skills")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="md:inline-flex">
                <button
                  className={hover}
                  onClick={() => {
                    document.getElementById("education")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Education
                </button>
              </li>
              {/* <li className="md:inline-flex">
                <button className={hover}>Projects</button>
              </li> */}
              <li className="md:inline-flex">
                <button className={hover} onClick={() => {
                    document.getElementById("certifications")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>Certifications</button>
              </li>
              {/* <li className="md:inline-flex">
                <button className={hover}>Contact</button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
