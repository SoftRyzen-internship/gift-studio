import React from "react";
import Navbar from "./NavBar";
import { Logo } from "./Logo";

const MobileMenu = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuShown);
  };

  return (
    <>
      <button
        className="max-w-[24px] max-h-[24px] block lg:hidden z-60 relative"
        onClick={toggleMenu}
      >
        {!isMobileMenuShown ? "|||" : "X"}
      </button>
      {isMobileMenuShown && (
        <div
          className="min-w-full h-full fixed top-0 left-0 overflow-hidden bg-white pt-[16px] z-50 
        flex flex-col items-center lg:hidden sm:pt-[24px] sm:px-[20px] md:px-[30px] md:pt-[36px]"
        >
          <div className="flex sm:justify-between w-full pointer-events-auto sm:mb-[40px] mb-[64px]">
            <Logo />
            <button
              className="w-[24px] h-[24px] block lg:hidden"
              onClick={toggleMenu}
            >
              {!isMobileMenuShown ? "|||" : "X"}
            </button>
          </div>

          <Navbar isMobile={isMobileMenuShown} />
          <a
            className="inline-block mt-[58px] md:hidden"
            href="tel:+380981234567"
          >
            +380981234567
          </a>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
