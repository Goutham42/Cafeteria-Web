import React from "react";
import TypingText from "../components/hooks/TypingText";
import "./Phase1.css";

const Phase1 = () => {
  const firstLine =
    "  Every cup we serve carries a story of two dreamers from Madras, of a journey across oceans, and of a dream poured into every mug.";
  const secondLine =
    "- where Madras meets London,\nand every sip feels like a journey.";

  return (
    <div className="video-container">
      <video
        src="/story.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      />

      <div className="video-text">
        <p className="intro">
          <TypingText text={firstLine} speed={30} />
        </p>

        <h2 className="tagline">
          <TypingText
            text={secondLine}
            speed={40}
            delay={firstLine.length * 30 + 500}
          />
        </h2>
      </div>
    </div>
  );
};

export default Phase1;
