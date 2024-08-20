import { useState } from "react";
import { data } from "./data";
function App() {
  const [products] = useState(data);
  return (
    <>
      <h1>E Commerce Product Page</h1>
    </>
  );
}

export default App;
