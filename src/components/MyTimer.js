/**
 * Just your basic timer component
 * Resources:
 *  - https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
 */

import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [timestamp, setTimestamp] = useState();
  function toggle() {
    if (!active) {
      setTimestamp(Date.now());
    }
    setActive(!active);
  }
  function reset() {
    setSeconds(0);
    setActive(false);
  }

  useEffect(() => {
    let timeout = null;
    if (active) {
      timeout = setTimeout(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - timestamp) / 1000);
        setSeconds(elapsed + seconds);
        setTimestamp(now);
      }, 1000);
    } else {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [seconds, active, timestamp]);

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button type="button" onClick={toggle}>
        {!active ? 'Start' : 'Stop'}
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
