import React from "react";
import "./Story.css";
import storyImage from "../components/Assets/story.jpg"; // can be video path too
import FadeText from "../components/hooks/FadeText";

const Story = () => {
  const lines = [
    "It started in Madras - the laughter, the chai breaks, the unforgettable filter coffee.",
    "Then came a new chapter: London - New roads, New dreams.",
    "We carried our culture, our warmth, and our favourite coffee flavors across the ocean.",
    "And now, you’re standing in the middle of their story - where Madras meets London, one cup at a time."
  ];

  return (
    <div id="Story-section">
      <h1 className="story-title">Story</h1>

      <div className="phase2">
        <div className="media-container">
          <img
            src={storyImage}
            alt="Story"
            className="story-media"
          />
        </div>

        <div className="text-container">
          {lines.map((line, index) => (
            <FadeText key={index} delay={index * 700} duration={400}>
              {line}
            </FadeText>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
