import React from 'react';
import SkillCard from '../components/SkillCard';
import { 
  FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaNodeJs, FaChartLine
} from 'react-icons/fa';
import { SiSpring, SiTailwindcss, SiMysql, SiMongodb, SiJavascript, SiRedux, SiPandas, SiNumpy, SiJupyter, SiBootstrap,SiIntellijidea, SiPycharm, SiC } from 'react-icons/si';
const Skills = () => {
  const categories = [
    {
      title: "Front-end",
      skills: [
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <FaReact />, label: "React.js" },
        { icon: <SiRedux />, label: "Redux" },
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <SiBootstrap />, label: "Bootstrap" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { icon: <FaReact />, label: "React.js" },
        { icon: <SiSpring />, label: "Spring (Basics)" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, label: "MySQL" },
        { icon: <SiMongodb />, label: "MongoDB" },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { icon: <FaGithub />, label: "GitHub" },
        { icon: <SiIntellijidea />, label: "IntelliJ IDEA" },
        { icon: <SiPycharm />, label: "PyCharm" },
      ],
    },
    {
      title: "Libraries",
      skills: [
        { icon: <SiPandas />, label: "Pandas" },
        { icon: <SiNumpy />, label: "NumPy" },
       { icon: <FaChartLine />, label: "Seaborn" },
        { icon: <SiJupyter />, label: "Tkinter (Basics)" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { icon: <SiC />, label: "C/C++" },
        { icon: <FaJava />, label: "Java (JSP, Servlets, JDBC)" },
        { icon: <FaPython />, label: "Python" },
        { icon: <FaDatabase />, label: "SQL" },
        { icon: <FaNodeJs />, label: "DSA" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-30 px-4">
      <h1 className="text-4xl font-bold mb-10 text-cyan-400">SKILLS</h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full max-w-6xl">
        {categories.map((category, index) => (
          <SkillCard key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
