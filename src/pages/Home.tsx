import { useEffect, useRef, useState } from "react";
import { FaMapPin } from "react-icons/fa";
import type { IconType } from "react-icons";

import { ProgrammingLanguages, ProgramsLanguages, Work } from "../Data";
import ProjectList from "../components/ProjectCards";
import Experience from "../components/Experience";

interface TechItem {
  name: string;
  icon: IconType;
}

interface ScrollingTechStackProps {
  tech: TechItem[];
  repeat?: number;
}

function Home() {
  return (
    <div>
      <div className="pb-16">
        <Intro />
        <ScrollingTechStack tech={ProgrammingLanguages} />
        <ScrollingTechStack tech={ProgramsLanguages} />
      </div>

      <div className=" pb-16">
        <Experience title="Experience" experience={Work} />
      </div>
      
      <ProjectList showOnlyPinned={true} />
    </div>
  );
}

function Intro() {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2021;

  return (
    <div className="w-full rounded-md text-text border-accent">
      <div>
        <h1 className="text-4xl md:text-4xl font-bold">Lachlan Henderson</h1>
        <p className="flex items-center gap-1">
          <FaMapPin />
          Sydney, Australia
        </p>
      </div>
      <br />
      <p>
        Software Engineer & Game Developer focused on writing clean and efficient code.
        I have {experience} years of hands-on experience in programming and I'm currently undertaking a Bachelor of Computer Science.
      </p>
    </div>
  );
}

function ScrollingTechStack({ tech, repeat = 3}: ScrollingTechStackProps) {
  const techStack = Array(repeat).fill(tech).flat();
  const autoScrollSpeed = 0.5;

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    let frameId: number;
    let lastTime = performance.now();
    const scrollWidth = track.scrollWidth / 3;

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        posRef.current -= autoScrollSpeed * (deltaTime / (1000 / 60));

        if (Math.abs(posRef.current) >= scrollWidth) {
          posRef.current = 0;
        }

        track.style.transform = `translateX(${posRef.current}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) {
      return;
    }

    let dragging = false;
    let startX = 0;
    let startPos = 0;

    const onStart = (clientX: number) => {
      dragging = true;
      setIsDragging(true);
      setIsPaused(true);

      startX = clientX;
      startPos = posRef.current;
    };

    const onMove = (clientX: number) => {
      if (!dragging) return;

      const deltaX = clientX - startX;
      posRef.current = startPos + deltaX;
      track.style.transform = `translateX(${posRef.current}px)`;
    };

    const onEnd = () => {
      if (dragging) {
        dragging = false;
        setIsDragging(false);
        setIsPaused(false);
      }
    };

    // Mouse events
    const onMouseDown = (e: MouseEvent) => onStart(e.clientX);
    const onMouseMove = (e: MouseEvent) => onMove(e.clientX);
    const onMouseUp = onEnd;

    // Touch events
    const onTouchStart = (e: TouchEvent) => onStart(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => onMove(e.touches[0].clientX);
    const onTouchEnd = onEnd;

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    container.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-primary via-primary/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-primary via-primary/70 to-transparent z-10" />

      <div className="relative overflow-hidden w-full pt-8">
        <div ref={containerRef} className={`w-full select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => !isDragging && setIsPaused(false)}>
          <div ref={trackRef} className="flex gap-4 whitespace-nowrap" style={{willChange: "transform", transform: `translateX(${posRef.current}px)`}}>
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 min-w-max px-2 py-2 bg-secondary rounded-xl shadow text-text transition-colors duration-300" title={tech.name}>
                <tech.icon />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
