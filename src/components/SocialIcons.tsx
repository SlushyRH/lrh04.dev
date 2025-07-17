import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from "react-icons/fa";
import type { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  url: string;
  title: string;
}

function SocialIcons() {
  return (
    <div className="flex justify-center space-x-4 text-2xl text-accent">
      <Icon Icon={FaItchIo} title="Itch" url="https://slushyrh.itch.io" />
      <Icon Icon={FaGithub} title="Github" url="https://github.com/slushyrh" />
      <Icon Icon={FaLinkedin} title="Linkedin" url="https://linkedin.com/in/lrh04/" />
      <Icon Icon={FaEnvelope} title="Mail" url="mailto:msg@lrh04.dev" />
    </div>
  );
}

function Icon({ Icon, url, title}: IconProps) {
  return (
    <a href={url} title={title} target="_blank" rel="noopener noreferrer" className="hover:text-accent-hover">
      <Icon />
    </a>
  );
}

export default SocialIcons;