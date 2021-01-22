import React, { useState } from 'react';

const Timer = () => {
  const [elapsed, setElapsed] = useState(0);
  const [active, setActive] = useState(false);
  let started;
  let timer;
  function startTimer() {
    started = Date.now();
    const prevElapsed = elapsed;
    const currentTimer = setInterval(() => {
      const currentElapsed = Math.floor((Date.now() - started) / 1000);
      setElapsed(prevElapsed + currentElapsed);
    }, 1000);
    return () => {
      clearInterval(currentTimer);
      return null;
    };
  }

  function handleClick() {
    if (active) {
      setActive(false);
      timer();
      timer = null;
    } else {
      setActive(true);
      timer = startTimer();
      console.warn(typeof timer);
    }
    return null;
  }

  return (
    <div>
      <p>Elapsed: {elapsed}</p>
      <button type="button" onClick={handleClick}>
        {!active ? 'Start' : 'Stop'}
      </button>
    </div>
  );
};

export default Timer;
