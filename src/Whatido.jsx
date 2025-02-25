import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode, faGears } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons"; // Correct import for faPython
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Whatido() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [allTransitionsCompleted, setAllTransitionsCompleted] = useState(false);

  // Track the number of completed transitions
  const [completedTransitions, setCompletedTransitions] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle transition end for each card
  const handleTransitionEnd = () => {
    setCompletedTransitions(prev => {
      const updated = prev + 1;
      if (updated === 4) { // When all 4 cards have completed their transitions
        setAllTransitionsCompleted(true);
      }
      return updated;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen" id="whatido" ref={ref}>
      <div className="bg-gray-100 text-black text-center p-8 rounded-lg shadow-2xl mb-9 w-8/12">
        <h2 className="text-3xl font-bold mb-2">What I do</h2>
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-emerald-300"></div>
        </div>
        <p className="p-4 text-lg text-justify">
        Proficient in Python and React development with hands-on experience in building dynamic and responsive web applications. Skilled in Python for writing clean and efficient scripts, handling file operations, and working with data structures like lists, dictionaries, and tuples. Experienced in React hooks, state management, React Router, portals, and props to create interactive user interfaces. Possess basic knowledge of Java and a keen interest in learning and contributing to projects while tackling challenges effectively.


        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: faCode, title: "Web Development", description: "Create responsive, modern and interactive  websites." },
              { icon: faLaptopCode, title: "Web Design", description: "Create user-friendly web designs and experiences." }, 
              { icon: faPython, title: "Python", description: "Skilled in Python for building efficient, scalable software." },

              { icon: faGears, title: "Backend", description: "Creating backends with Node.js, Express, and MongoDB." }]
              .map((card, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-200 p-6 rounded-lg text-center shadow-lg transform transition-all duration-300 ease-in-out ${!allTransitionsCompleted ? 'pointer-events-none' : 'pointer-events-auto'}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 20px rgba(16, 185, 129, 0.5)",
                    transform: "translateY(-5px)",
                    transition: { duration: 0.2 },
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  <div className="text-green-600 text-4xl">
                    <FontAwesomeIcon icon={card.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{card.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
