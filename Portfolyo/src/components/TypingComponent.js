import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingComponent = ({ data }) => {
  // Effect hook to initialize the Typed.js instance
  useEffect(() => {
    // Check if data exists before proceeding
    if (data && data.about) {
      // Define options for Typed.js
      const options = {
        strings: [
          // Form the strings to be typed based on data
          "I am " + data.about.title,
          data.about.subTitle,
          "I have experience of " + data.about.exp_year + " years",
          data.about.quote,
        ],
        typeSpeed: 60,  // Typing speed
        backSpeed: 40,  // Backspacing speed
        loop: true      // Loop typing animation
      };

      // Initialize Typed.js instance
      const typed = new Typed('.typing-element', options);

      // Clean up function to destroy Typed.js instance
      return () => {
        typed.destroy();
      };
    }
  }, [data]); 

  return (
    <div>
      {/* Render a span element for typing animation */}
      {data && data.about && <span className="typing-element text-base"></span>}
    </div>
  );
};

export default TypingComponent;
