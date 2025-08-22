
import React from "react";

const FloatingBubbles: React.FC = () => {
  // Create an array of bubble configurations
  const bubbles = Array(15).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 4, // Size between 4-14px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 20 + 10}s`, // Duration between 10-30s
    animationDelay: `${Math.random() * 5}s`, // Delay between 0-5s
    opacity: Math.random() * 0.2 + 0.1, // Opacity between 0.1-0.3
    // Different colors for variety
    color: [
      "bg-blue-300", "bg-blue-400", "bg-blue-200", 
      "bg-sky-300", "bg-cyan-300", "bg-indigo-200"
    ][Math.floor(Math.random() * 6)]
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} dark:opacity-30 animate-float`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            top: bubble.top,
            opacity: bubble.opacity,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
            filter: "blur(1px)"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
