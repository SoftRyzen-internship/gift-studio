import React from "react";
import Navbar from "./NavBar";

const MobileMenu = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
  };

  return (
    <>
      <button className="w-max-[24px] h-max-[24px]" onClick={toggleMenu}>
        {!isMobileMenuShown ? "|||" : "X"}
      </button>
      <div className="w-min-full h-fill overflow-hidden bg-white pt-[16px] z-50">
        <Navbar isMobile={isMobileMenuShown} />
        <a href="tel:+380981234567">+380981234567</a>
      </div>
    </>
  );
};

export default MobileMenu;
