import type { Metadata, Cover } from "./_types";
import { Title, Paragraph } from "../components/Generic";

import { FaGitAlt, FaItchIo, FaUnity, FaWindows } from "react-icons/fa";

function Content() {
  return (
    <div>
      <Title>Teamwork</Title>
      <Paragraph>
        talk about the process 
      </Paragraph>

      <Title>Steam</Title>
    </div>
  );
}

const techStack = [ // Unity, C++, etc
  { title: "Git", icon: FaGitAlt },
  { title: "Unity", icon: FaUnity },
]

const links = [  // Steam, Github, etc
  { icon: FaItchIo, title: "Itch", url: "https://slushyrh.itch.io/davos-trasheria" },
]

const metrics = {
  stars: null,
  downloads: null,
  views: null,
}

const cover: Cover = {
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

export const metadata: Metadata = {
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
  metrics: metrics,
  awards: awards,
  cover: cover,
  trailers: trailers,
  screenshots: screenshots,
  tags: tags,
};