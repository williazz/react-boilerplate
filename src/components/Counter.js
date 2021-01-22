import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} clicks!`;
  }, [count]);

  return (
    <div>
      <p>Clicks: {count}s</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Button
      </button>
    </div>
  );
};

export default Counter;
