import React, { useState } from 'react';
import vaibhavImg from '/public/vaibhav1.jpg'; // Adjust path
import BackgroundDots from '../components/BackgroundDots';

const CollapsibleCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-600 rounded-xl bg-black/20 backdrop-blur-md p-4 mb-4 transition-all duration-300"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg md:text-xl font-semibold text-cyan-400">{title}</h3>
        <span className={`transform transition-transform ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      {open && (
        <div className="mt-4 text-gray-300 text-sm md:text-base">{children}</div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-grey-900 to-black text-white pt-10 pb-8 px-6 md:px-20 overflow-hidden">
     <BackgroundDots/>
    <div className="bg-gray-700 text-white min-h-screen  pt-10 pb-8 px-6 md:px-20 mt-18 rounded-2xl ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={vaibhavImg}
            alt="Vaibhav Kandpal"
            className="rounded-2xl w-[520px] md:w-[400px] shadow-2xl shadow-black/70"
          />
        </div>

        {/* Right: Info */} 
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Vaibhav
            </span>{' '}
            Kandpal
          </h2>
          <p className="text-gray-300 mb-3">
            I am a passionate Full Stack Java Developer and a Computer Applications student.
            My journey involves crafting robust microservices and engaging web applications.
            I thrive on challenges and continuous learning in the ever-evolving tech landscape.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            With a strong foundation in Java, Spring Boot, React, and various database
            technologies, I aim to build scalable and efficient solutions that address
            real-world problems. My curiosity drives me to explore new frameworks and design patterns.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-full">
              Download Resume
            </button>
            <button className="border border-gray-500 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-full">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Section */}
      <div className="mt-30 max-w-3xl mx-auto">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-cyan-400 mb-8">
          My Journey & Expertise
        </h3>

        <CollapsibleCard title="Education">
          <p><strong>MCA</strong> - NIT Kurukshetra (Expected 2025)</p>
          <p className="text-sm">Courses: DSA, Distributed Systems, Cloud, Web Tech</p>
        </CollapsibleCard>

        <CollapsibleCard title="Work Experience">
          <p><strong>Intern @ Tech Solutions Inc.</strong> (Jun–Aug 2024)</p>
          <p className="text-sm">Spring Boot, microservices, DB optimization</p>
          <p className="mt-2"><strong>Freelance Developer</strong> (2023–Present)</p>
          <p className="text-sm">React.js, Node.js, full-stack web apps</p>
        </CollapsibleCard>

        <CollapsibleCard title="Skills">
          <p><strong>Languages:</strong> Java, JS, Python</p>
          <p><strong>Frameworks:</strong> Spring Boot, React, Node</p>
          <p><strong>Databases:</strong> MySQL, MongoDB</p>
          <p><strong>Tools:</strong> Git, Docker, AWS, Kafka</p>
        </CollapsibleCard>

        <CollapsibleCard title="Projects">
          <p><strong>E-Commerce Platform</strong> (Java, React, MySQL)</p>
          <p><strong>Real-time Chat App</strong> (Node.js, Socket.io)</p>
        </CollapsibleCard>

        <CollapsibleCard title="Certifications & Awards">
          <p>Oracle Java SE 11 Certified</p>
          <p>AWS Cloud Practitioner</p>
          <p>🏆 National Hackathon 2023 – Winner</p>
        </CollapsibleCard>
      </div>
    </div>
    </div>
  );
};

export default About;
