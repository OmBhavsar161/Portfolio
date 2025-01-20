import React from "react";
import { useInView } from "react-intersection-observer";
import { Palette, Coffee } from "lucide-react";

const TailwindCss_logo =
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg";

const technologies = [
  { name: "React", icon: <img src="/react_icon.svg" className="w-[35px]" /> },
  { name: "HTML", icon: <img src="/html_icon.svg" className="w-[35px]" /> },
  {
    name: "Tailwind CSS",
    icon: <img src={TailwindCss_logo} className="w-[40px] m-[5px]" />,
  },
  { name: "CSS", icon: <Palette className="w-8 h-8 text-green-500" /> },
  {
    name: "Python",
    icon: <img src="/python_icon.svg" className="m-[-3px] w-[40px]" />,
  },
  { name: "Java", icon: <Coffee className="w-8 h-8 text-red-500" /> },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.2, // Triggers when 20% of the component is in view
  });

  return (
    <div
      ref={ref}
      className="flex justify-center items-center min-h-screen"
      id="skills"
    >
      <div className="w-3.5/5 overflow-hidden bg-gray-100 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="flex justify-center pb-2 mt-3 mb-12">
          <div className="w-[110px] h-1 bg-emerald-300"></div>
        </div>
        <div className={`flex ${inView ? "animate-scroll" : ""}`}>
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              style={{
                boxShadow:
                  tech.name === "React"
                    ? "0 5px 20px rgba(29, 78, 216, 0.5)" // Blue-700
                    : tech.name === "HTML"
                    ? "0 5px 20px rgba(194, 65, 12, 0.5)" // Orange-600
                    : tech.name === "Tailwind CSS"
                    ? "0 5px 20px rgba(2, 132, 199, 0.5)" // Cyan-600
                    : tech.name === "CSS"
                    ? "0 5px 20px rgba(11, 240, 21, 0.5)" // Purple-600
                    : tech.name === "Python"
                    ? "0 5px 20px rgba(124, 58, 237, 0.5)" // Green-600
                    : tech.name === "Java"
                    ? "0 5px 20px rgba(249, 8, 45 , 0.5)" // Red-600
                    : "0 5px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col items-center justify-center bg-white rounded-lg p-6 mx-4 w-40 h-40 flex-shrink-0 hover:scale-105 transform transition duration-500 ease-in-out"
            >
              {tech.icon}
              <span className="mt-4 text-lg font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
        {/* <div className={`flex mt-4 ${inView ? "animate-scroll" : ""}`}>
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              style={{
                boxShadow:
                  tech.name === "React"
                    ? "0 5px 20px rgba(29, 78, 216, 0.5)" // Blue-700
                    : tech.name === "HTML"
                    ? "0 5px 20px rgba(194, 65, 12, 0.5)" // Orange-600
                    : tech.name === "Tailwind CSS"
                    ? "0 5px 20px rgba(2, 132, 199, 0.5)" // Cyan-600
                    : tech.name === "CSS"
                    ? "0 5px 20px rgba(11, 240, 21, 0.5)" // Purple-600
                    : tech.name === "Python"
                    ? "0 5px 20px rgba(124, 58, 237, 0.5)" // Green-600
                    : tech.name === "Java"
                    ? "0 5px 20px rgba(249, 8, 45 , 0.5)" // Red-600
                    : "0 5px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col items-center justify-center bg-white rounded-lg p-6 mx-4 w-40 h-40 flex-shrink-0 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              {tech.icon}
              <span className="mt-4 text-lg font-semibold">{tech.name}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
