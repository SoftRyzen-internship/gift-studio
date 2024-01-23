import React from "react";
import Logo from "@/components/ui/Logo";

import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";

import { fetchContacts } from "@/admin/requests/fetchContacts";
import HeaderContent from "../../components/HeaderContent/HeaderContent";

const Header = async () => {
  const contacts = await fetchContacts();
  const phoneNumber = contacts.phone;

  return (
    <header className="relative z-20 pb-6 pt-[22px] md:py-9">
      <div className="container flex items-center justify-between">
        <Logo className="lg:mr-[180px]" />
        <Navbar isMobile={false} />
        {!phoneNumber ? (
          <p className=" hidden items-center md:ml-[139px] md:mr-auto md:flex lg:ml-auto lg:mr-0">
            {phoneNumber}
          </p>
        ) : (
          <PhoneLink
            phoneNumber={phoneNumber}
            customStyle={
              "hidden md:flex md:ml-[139px] md:mr-auto lg:ml-auto lg:mr-0"
            }
          />
        )}
        <HeaderContent phoneNumber={phoneNumber} />
      </div>
    </header>
  );
};

export default Header;
