import { FaLinkedin, FaGithub, FaInstagram, FaProjectDiagram, FaGamepad } from 'react-icons/fa';
import { HiUser, HiOutlineMail, HiCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 px-2 py-1 bg-black/30
                backdrop-blur-md backdrop-saturate-150 shadow-lg border-b border-black/10">

    
  <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between">
      <a href="/" className="flex items-center space-x-2 ">
  <img src="/VAIBHAV1.png" alt="Vaibhav Logo" className="h-20 w-auto" />
</a>
        <ul className="flex space-x-9 text-xl text-white">
          <li className="flex items-center gap-2 hover:text-cyan-400 transition "style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <HiUser /><Link to="/about" className="hover:text-cyan-400">About</Link>

          </li>
          <li className=" flex items-center gap-2 hover:text-cyan-400 transition"style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <FaProjectDiagram /> <Link to="/projects" className="hover:text-cyan-400">Projects</Link>

          </li>
          <li className=" flex items-center gap-2 hover:text-cyan-400 transition"style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <HiCode /> <Link to="/skills" className="hover:text-cyan-400">Skills</Link>
          </li>
          <li className=" flex items-center gap-2 hover:text-cyan-400 transition "style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <HiOutlineMail /> <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-cyan-400 transition "style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <FaGamepad /> <Link to="/hobbies" className="hover:text-cyan-400">Hobbies</Link>
          </li>
        </ul>

        <div className="flex space-x-5 text-white text-4xl">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-cyan-400" /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className="hover:text-cyan-400" /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="hover:text-cyan-400" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
