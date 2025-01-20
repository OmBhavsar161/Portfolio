import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Image Project 1',
    media: [
      '/placeholder.svg?height=300&width=400&text=Image+1',
      '/placeholder.svg?height=300&width=400&text=Image+2',
      '/placeholder.svg?height=300&width=400&text=Image+3'
    ],
    description: 'This is a description of Image Project 1. It showcases multiple images.',
    type: 'image',
  },
  {
    id: 2,
    title: 'Image Project 2',
    media: [
      '/placeholder.svg?height=300&width=400&text=Image+4',
      '/placeholder.svg?height=300&width=400&text=Image+5',
      '/placeholder.svg?height=300&width=400&text=Image+6'
    ],
    description: 'This is a description of Image Project 2. It also showcases multiple images.',
    type: 'image',
  },
  {
    id: 3,
    title: 'Image Project 3',
    media: [
      '/placeholder.svg?height=300&width=400&text=Image+7',
      '/placeholder.svg?height=300&width=400&text=Image+8',
      '/placeholder.svg?height=300&width=400&text=Image+9'
    ],
    description: 'This is a description of Image Project 3. It showcases multiple images.',
    type: 'image',
  },
  {
    id: 4,
    title: 'Image Project 4',
    media: [
      '/placeholder.svg?height=300&width=400&text=Image+10',
      '/placeholder.svg?height=300&width=400&text=Image+11',
      '/placeholder.svg?height=300&width=400&text=Image+12'
    ],
    description: 'This is a description of Image Project 4. It also showcases multiple images.',
    type: 'image',
  },
//   {
//     id: 5,
//     title: 'Video Project 1',
//     media: ['https://www.w3schools.com/html/mov_bbb.mp4'],
//     description: 'This is a description of Video Project 1. It showcases a video.',
//     type: 'video',
//   },
//   {
//     id: 6,
//     title: 'Video Project 2',
//     media: ['https://www.w3schools.com/html/mov_bbb.mp4'],
//     description: 'This is a description of Video Project 2. It showcases another video.',
//     type: 'video',
//   },
];

export default function Projects() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ProjectCard = ({ project }) => {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const nextMedia = () => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % project.media.length);
    };

    const prevMedia = () => {
      setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + project.media.length) % project.media.length);
    };

    useEffect(() => {
      if (project.type === 'image') {
        const timer = setInterval(nextMedia, 2000);
        return () => clearInterval(timer);
      }
    }, [project.type]);

    const handleMediaClick = () => {
      setSelectedMedia({ src: project.media[currentMediaIndex], type: project.type });
      setIsModalOpen(true);
    };

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64">
          {project.type === 'video' ? (
            <video
              src={project.media[0]}
              className="absolute top-0 left-0 w-full h-full object-cover"
              onClick={handleMediaClick}
            />
          ) : (
            <>
              {project.media.map((media, index) => (
                <img
                  key={index}
                  src={media}
                  alt={`${project.title} - Image ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  onClick={handleMediaClick}
                />
              ))}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-opacity duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-opacity duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
    );
  };

  const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(true);
    }, []);

    const handleClose = () => {
      setIsOpen(false);
      setTimeout(() => {
        setIsModalOpen(false);
        setSelectedMedia(null);
      }, 300);
    };

    const handleOutsideClick = (e) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    };

    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleOutsideClick}
      >
        <div className={`relative max-w-4xl max-h-full transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}>
          {selectedMedia.type === 'video' ? (
            <video
              src={selectedMedia.src}
              className="max-w-full max-h-[90vh] object-contain"
              controls
              autoPlay
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt="Full-size project media"
              className="max-w-full max-h-[90vh] object-contain"
            />
          )}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 w-8/12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
}

