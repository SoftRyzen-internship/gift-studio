"use client";

import ContactsList from "@/components/ui/ContactsList";
import NavBar from "@/components/ui/NavBar";
import Logo from "@/components/ui/Logo";
import SocialMediaList from "@/components/ui/SocialMediaList";

import data from "@/data/footer.json";

const Footer = () => {
  const { madeBy } = data;
  return (
    <footer className="pb-6 md:pb-9 ">
      <div className="container flex flex-col gap-6 md:gap-9">
        <div className="flex items-center border-t-[1px] border-accent  pt-[36px]  max-lg:justify-between md:pt-9 lg:pt-6">
          <Logo className="lg:mr-[181px]" />
          <NavBar isMobile={false} />
          <SocialMediaList customListStyle="lg:ml-[288px]" />
        </div>
        <div className="flex flex-col gap-6 text-center md:flex-row md:justify-between">
          <ContactsList />
          <a
            className="text-sm transition-colors hover:text-accent focus:text-accent"
            href="https://softryzen.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {madeBy}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
