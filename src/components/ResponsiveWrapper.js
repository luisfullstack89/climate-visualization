// src/components/ResponsiveWrapper.js
import React, { useRef, useEffect, useState } from 'react';

const ResponsiveWrapper = ({ children }) => {
  const wrapperRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (wrapperRef.current) {
        setDimensions({
          width: wrapperRef.current.offsetWidth,
          height: wrapperRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div ref={wrapperRef} className="w-full h-full">
      {React.cloneElement(children, { dimensions })}
    </div>
  );
};

export default ResponsiveWrapper;
