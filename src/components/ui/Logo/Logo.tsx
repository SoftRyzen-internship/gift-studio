import content from "@/data/common.json";
import LogoIcon from "public/assets/icons/icon-logo.svg";

const Logo = () => {
  const { logoAriaLabel, companyName } = content.logo;

  return (
    <a
      href="/"
      className="group flex items-center gap-x-2 font-montserrat text-base font-normal text-black transition-transform hover:scale-110 focus:scale-110 lg:text-3xl"
      aria-label={logoAriaLabel}
    >
      <LogoIcon className="h-9 w-7 transition-transform group-hover:scale-110 lg:h-12 lg:w-10" />
      {companyName}
    </a>
  );
};

export default Logo;
