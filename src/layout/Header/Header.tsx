import Logo from "@/components/ui/Logo";
import Navbar from "@/components/ui/NavBar/NavBar";

const Header = () => {
  return (
    <header className="flex-between container py-6 md:py-9">
      <Logo />
      {/* TODO: contact item with className='lg:order-last' */}
      <Navbar isMobile={false} />
    </header>
  );
};

export default Header;
