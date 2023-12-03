"use client"
import React, { useEffect, useRef } from 'react';

// Define the prop types for the component
interface CustomCursorProps {}

// Create the functional component
const CustomCursor: React.FC<CustomCursorProps> = () => {
  // Use useRef with correct type
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use React.useEffect instead of useEffect
  useEffect(() => {
    // Add null check for cursorRef.current
    if (!cursorRef.current) return;

    // Use event type from React instead of 'any'
    document.addEventListener('mousemove', (e: any) => {
      cursorRef.current!.setAttribute(
        'style',
        'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
      );
    });

    document.addEventListener('click', () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.add('expand');

      setTimeout(() => {
        if (!cursorRef.current) return;
        cursorRef.current.classList.remove('expand');
      }, 500);
    });
  }, []); // Add empty dependency array

  // Return the JSX for the component
  return <div className='cursor' ref={cursorRef}></div>;
};

// Export the component
export default CustomCursor;
