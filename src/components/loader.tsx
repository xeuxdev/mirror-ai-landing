"use client";

import { useEffect, useState } from "react";

export function Loader({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const text = "Echo AI";

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    const completionTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2 seconds to allow animation to finish and be read

    return () => {
      clearTimeout(timer);
      clearTimeout(completionTimer);
    };
  }, []);

  if (showContent) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex justify-center space-x-1">
        {text.split("").map((char, index) => (
          <h1
            key={index}
            className="drop-shadow-sm font-display text-center text-4xl font-bold tracking-widest text-white dark:text-white md:text-7xl md:leading-20"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: `${index * 0.05}s`,
              willChange: "opacity, transform",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </h1>
        ))}
      </div>
    </div>
  );
}
