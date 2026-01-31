import { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // for smooth lag
    const [scale, setScale] = useState(1);
  
    useEffect(() => {
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
  
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
          // Scale on interactive elements
          if (
            el.tagName === 'A' ||
            el.tagName === 'BUTTON' ||
            el.tagName.startsWith('H') || // H1-H6
            el.tagName === 'INPUT' ||
            el.tagName === 'TEXTAREA'
          ) {
            setScale(1.8);
          } else {
            setScale(1);
          }
        }
      };
  
      window.addEventListener('mousemove', moveCursor);
      return () => window.removeEventListener('mousemove', moveCursor);
    }, []);
  
    // Smooth lag animation
    useEffect(() => {
      const follow = () => {
        setCursorPos((prev) => ({
          x: prev.x + (position.x - prev.x) * 0.2,
          y: prev.y + (position.y - prev.y) * 0.2,
        }));
        requestAnimationFrame(follow);
      };
      follow();
    }, [position]);
  
    return (
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      />
    );
  };
  
  export default Cursor;