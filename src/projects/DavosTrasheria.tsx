import { FaItchIo, FaUnity, FaWindows } from "react-icons/fa";

function Content() {
  return (
    <div>
      Content Goes Here
    </div>
  );
}

const techStack = [ // Unity, C++, etc
  { title: "Unity", icon: FaUnity },
]

const platforms = [  // Windows, Web, etc
  { title: "Windows", icon: FaWindows },
]

const links = [  // Steam, Github, etc
  { icon: FaItchIo, title: "Itch", url: "https://slushyrh.itch.io/davos-trasheria" },
]

const metrics = {
  stars: null,
  downloads: null,
  views: null,
}

const cover = {
  url: "https://img.itch.zone/aW1hZ2UvMjYzNDY3Ni8xNTczNTE5Ny5qcGc=/original/I0Vamd.jpg", // cover link
  mediaType: "image" // image or video
}

const trailers = [ // youtube link
  { link: "https://www.youtube.com/watch?v=4RHm8lWim3c" }, 
]

const screenshots = [ // url for each image
  { img: "https://img.itch.zone/aW1hZ2UvMjYzNDY3Ni8xNTczNTE5Ny5qcGc=/original/I0Vamd.jpg" },
  { img: "https://img.itch.zone/aW1hZ2UvMjYzNDY3Ni8xNTczNTE5My5qcGc=/original/ntJc51.jpg" },
  { img: "https://img.itch.zone/aW1hZ2UvMjYzNDY3Ni8xNTczNTE5OC5qcGc=/original/6Cfdtg.jpg" },
  { img: "https://img.itch.zone/aW1hZ2UvMjYzNDY3Ni8xNTczNTE5NC5qcGc=/original/gT1f7m.jpg" },
]

const tags = [ // for search bar
  "",
]

const awards = [
  { title: "", by: "", year: "" },
]

export const metadata = {
  slug: "davos-trasheria",
  pin: true, // pin to main page
  Content: Content,

  title: "Davo's Trasheria",
  description: "A game about mananging and recycling a old recycling plant. It was made for the 2024 Ubisoft Game Jam in 2 weeks with a team of 6.",
  releaseDate: "12/04/2024", // dd/mm/yyyy
  teamSize: 6,
  timeFrame: "2 Weeks",
  role: "Programmer",
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