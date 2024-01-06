import React from "react";
import Navbar from "./NavBar";

const MobileMenu = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleMenu}>|||</button>
      <Navbar isMobile={isMobileMenuShown} />
    </div>
  );
};

export default MobileMenu;
