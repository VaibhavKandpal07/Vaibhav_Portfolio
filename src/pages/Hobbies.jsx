import React, { useRef, useEffect, useState } from 'react';

const Hobbies = () => {
  // Define your hobbies content
  const hobbiesData = [
    {
      number: '01',
      title: 'Competitive Programming',
      description: 'Solving complex algorithmic problems and participating in coding contests to hone problem-solving skills and learn efficient data structures.',
      image: './coding1.png', // Placeholder image
      side: 'right', // Content on the right, image/placeholder on the left
    },
    {
      number: '02',
      title: 'Gaming & Esport',
      description: 'Engaging in strategic video games and following esports to understand competitive dynamics and team coordination.',
      image: './6951216-removebg-preview.png',
      side: 'left', // Content on the left, image/placeholder on the right
    },
    {
      number: '03',
      title: 'Reading Tech Blogs & Books',
      description: 'Keeping up-to-date with the latest advancements in technology, software development trends, and expanding knowledge through technical literature.',
      image: './kuku1.png',
      side: 'right',
    },
    {
      number: '04',
      title: 'Football',
      description: 'Capturing moments and exploring visual storytelling through lens, focusing on composition, lighting, and post-processing techniques.',
      image: './11345226.png',
      side: 'left',
    },
    {
      number: '05',
      title: 'Fitness & Yoga',
      description: 'Maintaining a healthy lifestyle through regular workouts and participating in sports like badminton, promoting discipline and well-being.',
      image: './Dumbell.png',
      side: 'right',
    },
    {
      number: '06',
      title: 'Music (Playing & Listening)',
      description: 'Playing guitar and exploring various music genres, appreciating the art of sound and rhythm. Also, enjoying diverse music for relaxation and inspiration.',
      image: './gradient-old-device-studio.jpg',
      side: 'left',
    },
  ];

  const timelineContainerRef = useRef(null);
  const itemRefs = useRef([]); // Refs for each timeline item wrapper
  const [activeLineHeight, setActiveLineHeight] = useState(0);
  const [activeDotTop, setActiveDotTop] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0); // Index of the currently active step

  // Use a ref to store the top positions of each static dot relative to the timeline container's top
  const staticDotPositions = useRef([]);

  // Effect to calculate and store the precise top positions of each static dot
  // This runs once on mount and on window resize
  useEffect(() => {
    const calculatePositions = () => {
      if (!timelineContainerRef.current || itemRefs.current.length === 0) return;

      staticDotPositions.current = itemRefs.current.map(itemRef => {
        if (itemRef) {
          // Get the timeline-item-dot element directly
          const dotElement = itemRef.querySelector('.timeline-item-dot');
          if (dotElement) {
            // dotElement.offsetTop gives its position relative to its parent (itemRef)
            // itemRef.offsetTop gives itemRef's position relative to timelineContainerRef
            // So, total top position relative to timelineContainerRef is itemRef.offsetTop + dotElement.offsetTop
            // Then add half the dot's height to get its center.
            return itemRef.offsetTop + dotElement.offsetTop + (dotElement.offsetHeight / 2);
          }
        }
        return 0; // Fallback
      });

      // After calculating all positions, ensure the moving dot and line are updated
      // based on the current active step index. This handles initial load and resize.
      updateMovingDotAndLine(activeStepIndex);
    };

    window.addEventListener('resize', calculatePositions);
    calculatePositions(); // Initial calculation on mount

    return () => {
      window.removeEventListener('resize', calculatePositions);
    };
  }, [hobbiesData.length, activeStepIndex]); // Re-run if data length changes or activeStepIndex changes (for initial load)


  // Intersection Observer to determine the active step
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      // rootMargin: Adjust to fine-tune when a new item becomes active.
      // -30% from top and -70% from bottom means an item becomes active
      // when its top is 30% down the viewport, and remains active until
      // its bottom is 70% down the viewport. This often centers the dot better.
      rootMargin: '-30% 0px -70% 0px',
      threshold: 0, // Trigger as soon as target enters/exits root
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setActiveStepIndex(index);
        }
      });
    }, options);

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index; // Attach index to element for observer
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Only run once on mount for observer setup

  // Effect to update the moving dot's position and the animated line's height
  // This runs whenever the activeStepIndex or a staticDotPositions changes
  const updateMovingDotAndLine = (index) => {
    if (staticDotPositions.current[index] !== undefined) {
      const targetDotTop = staticDotPositions.current[index];
      setActiveDotTop(targetDotTop);

      // Line height is the distance from the top of the timeline container
      // to the target dot's vertical position.
      if (timelineContainerRef.current) {
        const containerHeight = timelineContainerRef.current.offsetHeight;
        setActiveLineHeight(Math.min(100, (targetDotTop / containerHeight) * 100));
      }
    } else if (index === 0 && staticDotPositions.current[0] !== undefined) {
      // Handle initial state where index might be 0 but not yet "intersected"
      setActiveDotTop(staticDotPositions.current[0]);
      if (timelineContainerRef.current) {
        const containerHeight = timelineContainerRef.current.offsetHeight;
        setActiveLineHeight(Math.min(100, (staticDotPositions.current[0] / containerHeight) * 100));
      }
    }
  };

  // This effect ensures the dot and line update when activeStepIndex changes
  useEffect(() => {
    updateMovingDotAndLine(activeStepIndex);
  }, [activeStepIndex]); // Only run when activeStepIndex changes


  return (
    <div className="relative min-h-screen bg-gray-950 text-white py-40 overflow-hidden">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400">My Hobbies</h1>
        <p className="text-xl text-gray-400">Explore my passions and interests outside of coding.</p>
      </div>

      {/* Main Timeline Container */}
      <div id="hobbies-timeline-container" ref={timelineContainerRef} className="hobbies-timeline-container max-w-7xl mx-auto px-4">
        {/* Static background vertical line */}
        <div className="timeline-static-line"></div>

        {/* Animated foreground vertical line (blue) */}
        <div
          className="timeline-animated-line"
          style={{ height: `${activeLineHeight}%` }}
        ></div>

        {/* Moving dot indicator */}
        <div
          className="timeline-moving-dot"
          style={{ top: `${activeDotTop}px` }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div> {/* Inner white dot */}
        </div>

        {/* Timeline Items */}
        {hobbiesData.map((hobby, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            // Use 'timeline-content-column' and 'timeline-image-column' as flex children
            // The order is controlled by CSS 'order' property for flex items
            className={`timeline-item-wrapper ${hobby.side === 'left' ? 'timeline-item-left' : 'timeline-item-right'}`}
          >
            {/* Horizontal Line and Static Dot for each item */}
            <div className={`timeline-item-dot ${activeStepIndex === index ? 'active' : ''}`}>
            </div>
            <div className={`timeline-horizontal-line ${activeStepIndex === index ? 'active' : ''}`}>
            </div>


            {/* Content Card (Left or Right) */}
            <div className="timeline-content-column"> {/* Use new class for column */}
              <div className="timeline-card">
                <span className="text-2xl font-bold text-purple-400 mb-2 block">{hobby.number}</span>
                <h3 className="text-3xl font-bold mb-2">{hobby.title}</h3>
                <p className="text-base text-gray-200">{hobby.description}</p>
              </div>
            </div>

            {/* Placeholder for Image/Extra Content (Opposite Side) */}
            <div className="timeline-image-column "> {/* Use new class for column */}
              <img src={hobby.image} alt={hobby.title} className="timeline-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;