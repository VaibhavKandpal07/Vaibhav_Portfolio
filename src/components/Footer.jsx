import BackgroundDots from './BackgroundDots'; // adjust path if needed

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-grey-900 to-black text-white pt-16 pb-8 px-6 md:px-20 overflow-hidden">
     <BackgroundDots/>

{/* Main Footer Content */}
      <div className="relative z-10 mt-25">
        <div className="text-center mb-18 mt-25">
          <h2 className="text-2xl md:text-3xl font-semibold mb-15">
            CONTACT ME <span className="text-cyan-400 "> FOR WORK</span>
          </h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <input
  type="email"
  placeholder="example@email.com"
  className="rounded-full px-6 py-3 w-72 md:w-80 text-white bg-transparent border-2 border-cyan-400 shadow-md focus:outline focus:outline-2 focus:outline-cyan-300"
/>

            
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition">
              Send your E-Mail
            </button>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left text-sm">
          <div>
               <a href="/" className="flex items-center space-x-2 ">
  <img src="/VAIBHAV1.png" alt="Vaibhav Logo" className="h-20 w-auto" />
</a>
            <p className="text-gray-400 mb-10 mt-3 ml-4 ">
              Full Stack Java Developer passionate about Microservices and Web Apps. Still Learning . Never Give Up . Push Pass My Limits.
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-300">
              <i className="fab fa-facebook-f hover:text-white"></i>
              <i className="fab fa-twitter hover:text-white"></i>
              <i className="fab fa-instagram hover:text-white"></i>
              <i className="fab fa-linkedin-in hover:text-white"></i>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl text-cyan-400 mb-3">Company</h3>
            <ul className="space-y-1 text-gray-400">
              <li>My Account</li>
              <li>Services</li>
              <li>Team</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-cyan-400 mb-3">Contact</h3>
            <ul className="space-y-1 text-gray-400">
              <li>India , New Delhi</li>
              <li>+91 9540266589</li>
              <li>vaibhav.kandpal725@gmail.com</li>
              <li>www.vaibhavportfolio.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 ">
          © 2025 Vaibhav Kandpal. All rights reserved.
        </div>
      </div>

    </footer>

      );
};

export default Footer;