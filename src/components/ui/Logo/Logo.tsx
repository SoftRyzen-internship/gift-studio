import data from "@/data/common.json";
import LogoIcon from "public/assets/icons/icon-logo.svg";

const Logo = () => {
  return (
    <a
      href="/"
      className="group flex items-center gap-x-2 font-sans text-base font-normal text-black transition-colors hover:text-accent focus:text-accent lg:text-3xl"
      aria-label={data.logoAriaLabel}
    >
      <LogoIcon className="h-9 w-7 transition-colors group-hover:stroke-accent group-hover:stroke-[0.6px] lg:h-12 lg:w-10" />
      {data.companyName}
    </a>
  );
};

export default Logo;
