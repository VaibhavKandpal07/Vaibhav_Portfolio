import React from 'react';
const Contact = () => {
  return (
    // Main container with background image and full screen height
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white-900 text-white p-4"
      style={{
        backgroundImage: `url('./public/chichi.jpg')`, // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Makes the background fixed while scrolling
      }}
    >
      {/* Overlay to darken the background image slightly */}
      <div className="absolute inset-0 bg-white-300 opacity-50 z-0"></div>

      {/* Contact Form Card */}
     <div className="relative z-20 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 md:p-12 
                shadow-2xl shadow-black/70 /* MODIFIED: Stronger shadow, explicitly black with higher opacity */
                max-w-lg w-full mx-auto my-30"> {/* Adjusted my-8 to be consistent with previous changes */}
  <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">Contact Us</h2>
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="sr-only">Enter your Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your Name"
        className="w-full px-4 py-3 border-b border-gray-600 focus:border-cyan-500 focus:outline-none bg-transparent text-white placeholder-gray-300"
      />
    </div>
    <div>
      <label htmlFor="email" className="sr-only">Enter a valid email address</label>
      <input
        type="email"
        id="email"
        placeholder="Enter a valid email address"
        className="w-full px-4 py-3 border-b border-gray-600 focus:border-cyan-500 focus:outline-none bg-transparent text-white placeholder-gray-300"
      />
    </div>
    <div>
      <label htmlFor="message" className="sr-only">Enter your message</label>
      <textarea
        id="message"
        rows="4"
        placeholder="Enter your message"
        className="w-full px-4 py-3 border-b border-gray-600 focus:border-cyan-500 focus:outline-none resize-none bg-transparent text-white placeholder-gray-300"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out shadow-lg"
    >
      SUBMIT
    </button>
    <p className="text-center text-white text-sm mt-4">Image from Freepik</p>
  </form>
</div>

      {/* Bottom Contact Info Section - MODIFIED FOR OVERLAP */}
      {/* Changed mt-auto to a negative top margin (e.g., -mt-20 or -mt-16) for overlap.
          Added a higher z-index (z-30) to ensure it overlays the white card. */}
    
      <div className="relative z-30 bg-black/80 backdrop-blur-xl border border-gray-700/50 py-30 px-30 mt-50 md:-mt-46 "> {/* Added rounded-xl for consistency */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Call Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
              CALL US
            </h3>
            <p className="text-gray-400">1 (234) 567-891</p>
            <p className="text-gray-400">1 (234) 987-654</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.727A8 8 0 0120 12c0-4.418-3.582-8-8-8S4 7.582 4 12a8 8 0 012.343 4.727l5.42 5.42a1 1 0 001.414 0l5.42-5.42z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              LOCATION
            </h3>
            <p className="text-gray-400">121 Rock Street, 21 Avenue,</p>
            <p className="text-gray-400">New York, NY 92103-9000</p>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              WORKING HOURS
            </h3>
            <p className="text-gray-400">Mon - Fri ...... 11 am - 8 pm,</p>
            <p className="text-gray-400">Sat, Sun ...... 6 am - 8 pm</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
