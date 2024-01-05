import data from "@/data/common.json";
import LogoIcon from "public/assets/icons/icon-logo.svg";

const Logo = () => {
  return (
    <a
      href="/"
      className="group flex items-center gap-x-2 font-sans text-base text-black transition-colors hover:text-accent focus:text-accent"
      aria-label={data.logoAriaLabel}
    >
      <LogoIcon
        width={29}
        height={36}
        className="transition-colors group-hover:stroke-accent group-hover:stroke-[0.6px]"
      />
      {data.companyName}
    </a>
  );
};

export default Logo;
