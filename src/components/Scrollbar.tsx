import { useEffect, useRef, useState } from "react";

const Scrollbar = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  // Update scroll position
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      setScrollRatio(scrollTop / scrollHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle drag
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !thumbRef.current) return;

      const trackHeight = window.innerHeight;
      const thumbHeight = thumbRef.current.offsetHeight;
      const offsetY = e.clientY - thumbHeight / 2;
      const ratio = Math.min(Math.max(offsetY / (trackHeight - thumbHeight), 0), 1);
      const newScrollY = ratio * (document.body.scrollHeight - window.innerHeight);

      window.scrollTo({ top: newScrollY });
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleThumbMouseDown = () => {
    isDraggingRef.current = true;
  };

  return (
    <div className="fixed right-4 top-10 bottom-10 w-2 bg-transparent z-[100]">
      <div className="relative h-full w-full">
        <div
          ref={thumbRef}
          className="absolute left-0 w-full bg-blue-950 rounded-full cursor-pointer transition-colors hover:bg-gray-500"
          style={{
            top: `${scrollRatio * 100}%`,
            height: "60px",
            transform: "translateY(-50%)",
          }}
          onMouseDown={handleThumbMouseDown}
        />
      </div>
    </div>
  );
};

export default Scrollbar;
