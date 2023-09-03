import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

const CodeView = ({ code, language }) => {
  const codeRef = useRef();

  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeView;
