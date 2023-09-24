import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "./codeview.css";

const CodeView = ({ code, language }) => {
  const codeRef = useRef();

  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, [code, language]);

  return (
    <div className="codeview">
      <pre>
        <span className="language-label">
          Language: <label>{language}</label>
        </span>
        <br></br>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeView;
