import Logo from "@/components/ui/Logo/Logo";
import Navbar from "@/components/ui/NavBar";

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
