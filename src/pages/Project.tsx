import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import ReactPlayer from "react-player";
import { projects } from "../projects/Index";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight, FaClock, FaDownload, FaEye, FaStar, FaUser, FaUsers } from "react-icons/fa";

import type { Metadata } from "../projects/_types";
import type { IconType } from "react-icons";

function Project() {
  const location = useLocation();
  const slug = location.pathname.replace(new RegExp(`^/projects/`), "").replace(/\\$/, "");

  const rawProject = projects[slug];

  if (!rawProject) {
    return <div>404 - Not found</div>; // do 404 page here instead
  }

  const project = rawProject.data;
  const { Content } = project;

  return (
    <div>
      <MediaCarousel project={project} />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 gap-4">    
          <p className="text-4xl font-bold text-text">{project.title}</p>
          <TechStack techStack={project.techStack} />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 my-4 mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="bg-secondary p-4 rounded-md h-full flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <div className="flex-1">
                <p>{project.description}</p>
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.links.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      title={link.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-hover rounded-sm transition"
                    >
                      <link.icon size={24} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-secondary p-4 rounded-md h-full">
              <h2 className="text-2xl font-semibold mb-4">Information</h2>
              <div className="space-y-1">
                <InfoItem Icon={FaCalendarAlt} text="Release Date:" value={project.releaseDate} />
                <InfoItem Icon={FaUsers} text="Team Size:" value={project.teamSize} />
                <InfoItem Icon={FaClock} text="Time Frame:" value={project.timeFrame} />
                <InfoItem Icon={FaUser} text="Role:" value={project.role} />
                <InfoItem Icon={FaEye} text="Views:" value={project.metrics.views} />
                <InfoItem Icon={FaDownload} text="Downloads:" value={project.metrics.downloads} />
                <InfoItem Icon={FaStar} text="Stars:" value={project.metrics.stars} />
              </div>
            </div>
          </div>
        </div>

        <Content />
    </div>
  );
}

function MediaCarousel({ project }) {
  const trailers = project.trailers || [];
  const screenshots = project.screenshots || [];

  const slides = [
    ...trailers.map((trailer) => ({ type: "trailer", data: trailer })),
    ...screenshots.map((screenshot) => ({ type: "screenshot", data: screenshot })),
  ];

  if (slides.length === 0) {
    return null;
  }

  const [index, setIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1) % slides.length);
  };

  useEffect(() => {
    if (isPlayingVideo) {
      return;
    }

    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, isPlayingVideo]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-md">
      {slides.map((slide, i) => {
        const isActive = i === index;

        if (slide.type === "trailer") {
          return (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out cursor-pointer ${
                isActive ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <ReactPlayer
                src={slide.data.link}
                playing={isActive && isPlayingVideo}
                controls
                width="100%"
                height="100%"
                onPlay={() => setIsPlayingVideo(true)}
                onPause={() => setIsPlayingVideo(false)}
                onEnded={() => setIsPlayingVideo(false)}
               />
            </div>
          );
        } else {
          return (
            <img
              key={i}
              src={slide.data.img}
              alt={`Screenshot ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-1000 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            />
          );
        };
      })}

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 cursor-pointer"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 cursor-pointer"
      >
        <FaChevronRight size={24} />
      </button>

      <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 ${!isPlayingVideo ? "z-20" : "z-0"}`}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function InfoItem({ Icon, text, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex items-start gap-1.5">
      <Icon className="text-accent mt-0.5" size={20} />
      <p>{text}{' '}{value}</p>
    </div>
  );
};

function TechStack({ techStack }) {
  return (
    <div className="flex items-start gap-3">
      {techStack.map((tech: any, index: number) => (
        <div key={index} className="flex items-center gap-2 min-w-max p-2 bg-secondary rounded-md text-text" title={tech.title}>
          <tech.icon className="text-accent" size={20} />
          <span className="text-sm font-medium">{tech.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Project;
