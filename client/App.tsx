import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}

      <button onClick={() => setCount((count) => count + 1)}>Increase count</button>
    </div>
  );
}

export default App;
