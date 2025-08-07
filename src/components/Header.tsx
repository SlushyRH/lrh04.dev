import { Link, useLocation } from "react-router";
import SocialIcons from "./SocialIcons";

interface NarBarProps {
  title: string;
  path: string;
}

function Header() {
  return (
		<header className="sticky px-[10px] md:px-[10%] top-0 z-50 w-full py-4 flex flex-col md:flex-row justify-between md:items-center bg-primary/80 backdrop-blur-lg text-accent space-y-4 md:space-y-0">
      <div className="order-1 md:order-none w-full flex justify-center md:justify-start">
        <Link to={{pathname: "/"}} className="hover:text-accent-hover transition-colors duration-300 text-lg font-semibold">
          Lachlan Henderson
        </Link>
      </div>

			<nav className="order-2 md:order-none w-full flex justify-center space-x-6 text-base font-medium text-muted-foreground">
        <NavBarTitle title="Home" path="/" />
        <NavBarTitle title="Projects" path="/projects" />
        {/*<NavBarTitle title="About" path="/about" /> */}
      </nav>
      
			<div className="order-3 md:order-none w-full flex justify-center md:justify-end space-x-4 text-2xl">
        <SocialIcons />
      </div>
    </header>
  );
}

function NavBarTitle({ title, path }: NarBarProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={{ pathname: path }}
      className={`hover:text-accent-hover transition-colors duration-300 ${
        isActive ? "underline underline-offset-4 text-accent" : ""
      }`}
    >
      {title}
    </Link>
  );
}

export default Header;