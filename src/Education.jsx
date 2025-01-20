import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Education() {
  const controls = useAnimation();
  const ref = useRef(null);

  // State to track transition completion
  const [allTransitionsCompleted, setAllTransitionsCompleted] = useState(false);

  // State to track the number of completed transitions
  const [completedTransitions, setCompletedTransitions] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only after component has mounted
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

    // Cleanup the observer on component unmount
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
    setCompletedTransitions((prev) => {
      const updated = prev + 1;
      if (updated === 2) { // When all 2 cards have completed their transitions
        setAllTransitionsCompleted(true);
      }
      return updated;
    });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      id="education"
      ref={ref}
    >
      <div className="bg-gray-100  text-black text-center p-8 rounded-lg shadow-2xl mb-9 w-8/12">
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-emerald-300"></div>
        </div>
        <p className="p-4 text-lg text-justify"></p>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-8/12 mx-auto">
            {[
              {
                title: "Swaminarayan School",
                duration: "2019 - 2021",
                description: "Higher Secondary Education",
              },
              {
                title: "Silver Oak University",
                duration: "2021 - 2025",
                description: "Bachelor of Technology in IT",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform transition-all duration-300 ease-in-out ${!allTransitionsCompleted ? 'pointer-events-none' : 'pointer-events-auto'}`}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.5)",
                  transform: "translateY(-5px)",
                  transition: { duration: 0.3 },
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-800 pb-1">{card.duration}</p>
                <p className="mt-2 text-base text-gray-500">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
