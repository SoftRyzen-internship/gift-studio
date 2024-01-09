"use client";

import Navbar from "@/components/ui/NavBar";
import ContactsList from "@/components/ui/ContactsList";
import PhoneLink from "@/components/ui/PhoneLink";
import SocialMediaList from "@/components/ui/SocialMediaList";

import AboutSection from "@/sections/AboutSection";
import GallerySection from "@/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Navbar isMobile={false} />
      <ContactsList />
      <PhoneLink />
      <SocialMediaList />

      <AboutSection />
      <GallerySection />
    </>
  );
}
