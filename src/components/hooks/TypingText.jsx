import { useEffect, useState } from "react";

const TypingText = ({ text = "", speed = 40, delay = 0 }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!text) return;

    setOutput(""); // reset
    let index = 0;
    let cancelled = false;

    const typeChar = () => {
      if (cancelled) return;

      if (index < text.length) {
        setOutput((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typeChar, speed);
      }
    };

    const delayTimer = setTimeout(typeChar, delay);

    return () => {
      cancelled = true;
      clearTimeout(delayTimer);
    };
  }, [text, speed, delay]);

  return <span style={{ whiteSpace: "pre-line" }}>{output}</span>;
};

export default TypingText;
