'use client'
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <p>Current Time: {format(currentTime, 'h:mm:ss aaa')}</p>
    </div>
  );
};

export default Clock;