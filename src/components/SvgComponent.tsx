import React from 'react';
import { FaQuestionCircle, FaRobot, FaUserAlt, FaBrain, FaSearch } from 'react-icons/fa';

const SvgComponent = () => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      {/* Left-side Logos */}
      <g id="left-logos">
        {/* Question Generator */}
        <g transform="translate(30, 40)">
          <FaQuestionCircle size={50} color="orange" />
        </g>
        {/* Summarizer */}
        <g transform="translate(30, 120)">
          <FaSearch size={50} color="blue" />
        </g>
        {/* Flashcard Generator */}
        <g transform="translate(30, 200)">
          <FaBrain size={50} color="green" />
        </g>
        {/* Math Calculator */}
        <g transform="translate(30, 280)">
          <FaRobot size={50} color="purple" />
        </g>
      </g>

      {/* AI Logo */}
      <g transform="translate(250, 120)">
        <FaRobot size={60} color="gold" />
      </g>

      {/* User Logo */}
      <g transform="translate(420, 120)">
        <FaUserAlt size={60} color="#3498db" />
      </g>

      {/* Beams from Left Logos to AI Logo */}
      <path
        d="M80,60 Q130,100 220,120"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        className="beam-left-to-ai"
      />
      <path
        d="M80,140 Q130,180 220,120"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        className="beam-left-to-ai"
      />
      <path
        d="M80,220 Q130,260 220,120"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        className="beam-left-to-ai"
      />
      <path
        d="M80,300 Q130,340 220,120"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        className="beam-left-to-ai"
      />

      {/* Beam from AI Logo to User Logo */}
      <path
        d="M280,120 Q320,100 380,120"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        className="beam-ai-to-user"
      />

      {/* Gradients and Animation */}
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Animation */}
      <style>
        {`
          /* Beam Animation */
          .beam-left-to-ai, .beam-ai-to-user {
            animation: beam-animation 2s infinite;
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            animation-timing-function: ease-in-out;
          }

          @keyframes beam-animation {
            0% {
              stroke-dashoffset: 300;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 300;
            }
          }
        `}
      </style>
    </svg>
  );
};

export default SvgComponent;
