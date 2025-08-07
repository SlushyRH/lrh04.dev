import type { IconType } from "react-icons";

export interface Tech {
  title: string;
  icon: IconType | null;
}

export interface Platform {
  title: string;
  icon: IconType | null;
}

export interface Link {
  icon: IconType | null;
  title: string;
  url: string;
}

export interface Metrics {
  stars: number | null;
  downloads: number | null;
  views: number | null;
}

export interface Cover {
  url: string;
  mediaType: "image" | "video" | "";
}

export interface MediaItem {
  link?: string;
  img?: string;
}

export interface Award {
  title: string;
  by: string;
  year: string;
}

export interface Metadata {
  slug: string;
  pin: boolean;
  Content: React.FC;

  title: string;
  description: string;
  releaseDate: string;
  teamSize: number;
  timeFrame: string;
  role: string;

  techStack: Tech[];
  platforms: Platform[];
  links: Link[];
  metrics: Metrics;
  awards: Award[];
  cover: Cover;
  trailers: MediaItem[];
  screenshots: MediaItem[];
  tags: string[];
}
