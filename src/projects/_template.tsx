import type { Metadata, Cover } from "./_types";

function Content() {
  return (
    <div>
      Content Goes Here
    </div>
  );
}

const techStack = [
  { title: "", icon: null },
];

const platforms = [
  { title: "", icon: null },
];

const links = [
  { icon: null, title: "", url: "" },
];

const metrics = {
  stars: null,
  downloads: null,
  views: null,
};

const cover: Cover = {
  url: "",
  mediaType: "image", // image or video
};

const trailers = [
  { link: "" },
];

const screenshots = [
  { img: "" },
];

const tags = [
  "",
];

const awards = [
  { title: "", by: "", year: "" },
];

export const metadata: Metadata = {
  slug: "",
  pin: false,
  Content: Content,

  title: "",
  description: "",
  releaseDate: "00/00/0000",
  teamSize: 0,
  timeFrame: "",
  role: "",
  techStack: techStack,
  links: links,
  platforms: platforms,
  metrics: metrics,
  awards: awards,
  cover: cover,
  trailers: trailers,
  screenshots: screenshots,
  tags: tags,
};
