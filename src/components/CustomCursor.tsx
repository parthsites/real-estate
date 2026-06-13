"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
    follower.style.transform = `translate(${x}px, ${y}px)`;

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [data-cursor-hover]'
    );

    const addHover = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.borderColor = "rgba(201, 168, 76, 0.5)";
      cursor.style.backgroundColor = "rgba(201, 168, 76, 0.05)";
      follower.style.width = "12px";
      follower.style.height = "12px";
      follower.style.backgroundColor = "#c9a84c";
    };

    const removeHover = () => {
      cursor.style.width = "32px";
      cursor.style.height = "32px";
      cursor.style.borderColor = "rgba(201, 168, 76, 0.4)";
      cursor.style.backgroundColor = "transparent";
      follower.style.width = "6px";
      follower.style.height = "6px";
      follower.style.backgroundColor = "#c9a84c";
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [x, y]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(201, 168, 76, 0.4)",
          backgroundColor: "transparent",
          transform: `translate(${x}px, ${y}px)`,
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s",
          willChange: "transform",
          marginLeft: "-16px",
          marginTop: "-16px",
        }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#c9a84c",
          transform: `translate(${x}px, ${y}px)`,
          transition: "width 0.3s, height 0.3s, background-color 0.3s",
          willChange: "transform",
          marginLeft: "-3px",
          marginTop: "-3px",
        }}
      />
    </>
  );
}
