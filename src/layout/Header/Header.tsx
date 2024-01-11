import Logo from "@/components/ui/Logo";
import Navbar from "@/components/ui/NavBar";

const Header = () => {
  return (
    <header className="py-6 md:py-9">
      <div className="flex-between container">
        <Logo />
        {/* TODO: contact item with className='lg:order-last' */}
        <Navbar isMobile={false} />
      </div>
    </header>
  );
};

export default Header;
