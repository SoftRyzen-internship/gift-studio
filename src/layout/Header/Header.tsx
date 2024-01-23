"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import MobileBtn from "@/components/ui/MobileBtn";
import MobileMenu from "@/components/ui/MobileMenu";
import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";

import { TContactsResponse } from "@/src/types";

import { fetchContacts } from "@/admin/requests/fetchContacts";

const Header = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [contacts, setContacts] = useState<TContactsResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsData = await fetchContacts();
        setContacts(contactsData);
      } catch (error) {
        console.error("Помилка при отриманні контактів:", error);
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);

    if (!isMobileMenuShown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <header className="relative z-20 pb-6 pt-[22px] md:py-9">
        <div className="container flex items-center justify-between">
          <Logo className="lg:mr-[180px]" />
          <Navbar isMobile={false} />
          {!contacts ? (
            <p className=" hidden items-center md:ml-[139px] md:mr-auto md:flex lg:ml-auto lg:mr-0"></p>
          ) : (
            <PhoneLink
              contacts={contacts}
              customStyle={
                "hidden md:flex md:ml-[139px] md:mr-auto lg:ml-auto lg:mr-0"
              }
            />
          )}

          <MobileBtn
            handleClick={toggleMenu}
            isMobileMenuShown={isMobileMenuShown}
          />
        </div>
      </header>

      {contacts && (
        <MobileMenu
          contacts={contacts}
          className={!isMobileMenuShown ? "[transform:translateX(100%)]" : ""}
          handleClick={toggleMenu}
          isMobile={true}
        />
      )}
    </>
  );
};

export default Header;
