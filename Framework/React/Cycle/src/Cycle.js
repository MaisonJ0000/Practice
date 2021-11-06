import { useState, useEffect } from 'react';

export const Cycle = () => {
  console.log("[JONGMAN_LOG] update?", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));

  const [cnt, setCnt] = useState(3);
  useEffect(() => {
    console.log("[JONGMAN_LOG] mounted", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  }, []);

  return (
    <div>
      cycle
      { cnt }
      <button onClick={() => setCnt(cnt+1)}>
        click
      </button>
    </div>
  )
}

export default Cycle;
