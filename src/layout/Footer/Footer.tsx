"use client";

import ContactsList from "@/components/ui/ContactsList";
import NavBar from "@/components/ui/NavBar";
import Logo from "@/components/ui/Logo";
import SocialMediaList from "@/components/ui/SocialMediaList";

import data from "@/data/footer.json";

const Footer = () => {
  const { madeBy } = data;
  return (
    <footer className="border-t-[1px] border-accent pb-6 pt-[36px] md:py-9 lg:pt-6">
      <div className="container flex flex-col gap-6 md:gap-9">
        <div className="flex items-center max-lg:justify-between">
          <Logo
          // className="lg:mr-[181px]"
          />
          <NavBar isMobile={false} />
          <SocialMediaList customListStyle="lg:ml-[288px]" />
        </div>
        <div className="flex flex-col gap-6 text-center md:flex-row md:justify-between">
          <ContactsList />
          <a href="https://softryzen.com/">{madeBy}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
