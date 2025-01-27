import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Certifications() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [allTransitionsCompleted, setAllTransitionsCompleted] = useState(false);
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

  useEffect(() => {
    controls.start("hidden");
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const certifications = [
    { title: "React - The Complete Guide", company: "Udemy", link: "https://www.udemy.com/certificate/UC-94534863-1b41-47d6-be61-a959e3ba2c3d/" },
    { title: "Python Essentials", company: "Cisco", link: "https://www.credly.com/badges/7ba732fc-ab86-400e-8d96-af992a5f861c/public_url" },
    // { title: "Python & Django Web Frameworks", company: "Workshop", link: "#" },
    { title: "JAVA Programming - Beginner to Master ", company: "Udemy", link: "https://www.udemy.com/certificate/UC-d08bd86b-29e7-4d8d-93d3-1370200c98cb/" },
    { title: "Postman API Fundamentals Student Expert", company: "Postman", link: "https://badgr.com/public/assertions/Vp1OsrzlSxSKFXj-zPjxZQ" },
   
  ];

  const handleTransitionEnd = () => {
    setCompletedTransitions((prev) => {
      const updated = prev + 1;
      if (updated === certifications.length) {
        setAllTransitionsCompleted(true);
      }
      return updated;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen" id="certifications" ref={ref}>
      <div className="bg-gray-100 text-black text-center p-8 rounded-lg shadow-2xl mb-9 w-8/12">
        <h2 className="text-3xl font-bold mb-2">Certifications</h2>
        <div className="flex justify-center pb-2">
          <div className="w-[150px] h-1 bg-emerald-300"></div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                // href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-200 p-6 rounded-lg text-center shadow-lg transform transition-all duration-300 ease-in-out ${
                  !allTransitionsCompleted ? "pointer-events-none" : "pointer-events-auto"
                }`}
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
                <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{cert.company}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
