import React from "react";
import "./App.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function App() {
  const [latex, setLatex] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={latex}
        onChange={(e) => setLatex(e.target.value)}
      />
      <MathJaxContext>
        <MathJax>{`$$${latex}$$`}</MathJax>
      </MathJaxContext>
    </>
  );
}

export default App;
