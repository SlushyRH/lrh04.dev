function Content() {
  return (
    <div>
      Content Goes Here
    </div>
  );
}

const techStack = [ // Unity, C++, etc
  { title: "", icon: null },
]

const platforms = [  // Windows, Web, etc
  { title: "", icon: null },
]

const links = [  // Steam, Github, etc
  { icon: null, title: "", url: "" },
]

const metrics = {
  stars: null,
  downloads: null,
  views: null,
}

const cover = {
  url: "", // cover link
  mediaType: "" // image or video
}

const trailers = [ // youtube link
  { link: "" }, 
]

const screenshots = [ // url for each image
  { img: "" },
]

const tags = [ // for search bar
  "",
]

const awards = [
  { title: "", by: "", year: "" },
]

export const metadata = {
  slug: "",
  pin: false, // pin to main page
  Content: Content,

  title: "",
  description: "",
  releaseDate: "00/00/0000", // dd/mm/yyyy
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