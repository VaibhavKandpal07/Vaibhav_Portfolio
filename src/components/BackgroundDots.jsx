const BackgroundDots = ({ count = 260 }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const size = 2 + Math.random() * 3;
        return (
  
    <span
            key={i}
            className="dot absolute bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 1}s`,
            }}
          />

        );
      })}
    </div>
  );
};

export default BackgroundDots;
