import SocialIcons from "./SocialIcons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 border-t border-accent pt-4">
      <div className="text-center text-sm text-text mb-4">
        Copyright &copy; {year} SlushyRH. All Rights Reserved
      </div>
      <div className="flex justify-center space-x-4 text-2xl pb-4">
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;