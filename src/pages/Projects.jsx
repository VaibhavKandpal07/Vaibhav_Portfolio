import React from 'react';
import Footer from "../components/Footer"; // Adjust path if needed

const projectData = [
  {
    title: "PORTFOLIO WEBSITE",
    description: "The PORTFOLIO WEBSITE that gives the description about me as a developer. This is my personal portfolio website where I showcase my skills, projects, and experience as a web developer. Built using the MERN stack, it reflects my passion for clean design and responsive interfaces. Each project highlights a different aspect of my learning and development journey.",
    imgSrc: "/pw.png",
    link: "#"
  },
  {
    title: "Full Stack Application Using React.js ,Framer Motion, Java, Jdbc , Springboot",
    description: "This is my personal portfolio, built to showcase my full-stack development capabilities. The interactive frontend leverages React with dynamic animations from Framer Motion, styled meticulously using Tailwind CSS. It's powered by a robust Spring Boot backend with JDBC for seamless data management.",
    imgSrc: "/jfs.png",
    link: "#"
  },
  {
    title: "Service Sphere - a Home Service website",
    description: "Service Sphere is a comprehensive home services website designed to simplify daily tasks. It connects users with reliable service providers for various household needs, offering a convenient platform to book, manage, and complete home-related chores efficiently",
    imgSrc: "/Homeservice.png",
    link: "#"
  },
  {
    title: "Laundry Management System",
    description: "A practical Laundry Management System developed as a full-stack web application. The frontend utilizes standard HTML, CSS, and JavaScript for a responsive user interface. Backend operations are handled by PHP, interacting with a MySQL database managed via phpMyAdmin, all running locally on an Apache server through XAMPP...",
    imgSrc: "/masia.png",
    link: "#"
  },
  {
    title: "Machine Learning With AI Powered",
    description:  "This Machine Learning project delves into the exciting realm of AI Bots. It showcases the application of machine learning principles to develop intelligent agents capable of performing specific tasks or interactions. The project highlights my understanding of AI concepts and their practical implementation",
    imgSrc: "/ml.png",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="relative z-10 min-h-screen px-6 py-10 text-white flex flex-col items-center bg-grey/60 ">

      <div className="min-h-screen px-6 py-18 text-white flex flex-col items-center bg-grey/60">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-cyan-400">My Projects</h1>

        <div className="space-y-7 max-w-5xl w-full">
          {projectData.map((project, index) => (
            <div
              key={index}
            className="group transition-transform duration-300 transform 
           hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]
           bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden
           flex flex-col md:flex-row items-center p-8 md:p-5 cursor-default shadow-inner ring-1 ring-white/10"

            >
              {/* LEFT TEXT SECTION */}
              <div className={`md:w-1/2 text-center md:text-left mb-6 md:mb-0 
                              ${index % 2 === 1 ? 'md:order-2 md:pl-10' : 'md:order-1 md:pr-10'}`}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-cyan-200 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-cyan-500 text-white px-7 py-3 rounded-full font-medium text-lg hover:bg-cyan-600 transition-colors shadow-md cursor-pointer">
                    Full Project
                  </button>
                </a>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className={`md:w-1/2 flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="rounded-xl w-full h-auto object-cover max-w-sm md:max-w-md shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
