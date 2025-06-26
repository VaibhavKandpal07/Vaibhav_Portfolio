import BackgroundDots from './BackgroundDots'; // adjust path if needed

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-black via-gray-800  to-black">
       <BackgroundDots/>

      <div className="relative z-10 text-center px-4  mb-5 mt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8"style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Hi I'm <span className="text-cyan-400">Vaibhav Kandpal</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-gray-300"style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          A Full Stack Java Developer and a Computer Applications student passionate about Microservices and Web Applications
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition">
            Resume
          </button>
          <button className="border border-cyan-500 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition">
            Contact
          </button>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
