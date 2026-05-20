"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const { resolvedTheme } = useTheme();
  // Define explicit HSLA values for animation based on app/globals.css
  const primaryHslaLight = "hsla(240, 5.9%, 10%, 1)"; // From :root --primary
  const primaryHslaLightTransparent = "hsla(240, 5.9%, 10%, 0.3)"; // From :root --primary with 0.3 alpha
  const primaryHslaDark = "hsla(0, 0%, 98%, 1)"; // From .dark --primary
  const primaryHslaDarkTransparent = "hsla(0, 0%, 98%, 0.3)"; // From .dark --primary with 0.3 alpha
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !target.tagName) return;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          animate={{
            width: isHovering ? 48 : isClicking ? 6 : 8,
            height: isHovering ? 48 : isClicking ? 6 : 8,
            opacity: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30"
          animate={{
            width: isHovering ? 64 : isClicking ? 20 : 32,
            height: isHovering ? 64 : isClicking ? 20 : 32,
            opacity: isHovering ? 0.4 : 0.1, // Adjust opacity as needed
            borderColor: isHovering // Use explicit HSLA values
              ? (resolvedTheme === "dark" ? primaryHslaDark : primaryHslaLight) // Full opacity for hover
              : (resolvedTheme === "dark" ? primaryHslaDarkTransparent : primaryHslaLightTransparent), // 0.3 opacity for non-hover
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            width: isHovering ? 80 : 0,
            height: isHovering ? 80 : 0,
            opacity: isHovering ? 0.1 : 0,
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </>
  );
}