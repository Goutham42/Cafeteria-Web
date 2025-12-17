import React, { memo } from "react";
import { useFadeIn } from "./UseFadeIn"; // Correct relative path

const FadeText = memo(({ children }) => {
  const { ref, visible } = useFadeIn(0.4); // You can adjust threshold if needed

  return (
    <span
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
});

export default FadeText;
