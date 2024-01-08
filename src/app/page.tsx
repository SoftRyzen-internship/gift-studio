"use client";

import Example from "@/components/Example";
import Navbar from "@/components/ui/NavBar";
import ContactsList from "@/components/ui/ContactsList";
import PhoneLink from "@/components/ui/PhoneLink";
import SocialMediaList from "@/components/ui/SocialMediaList";

export default function Home() {
  return (
    <>
      <div className="container bg-green-300">
        <Navbar isMobile={false} />
        <h1 className="text-2xl text-accent">Подарунок</h1>
        <Example />
        <ContactsList />
        {/* на десктопі в хедері, в нього інший шрифт, можна через просто додати lg:text-3xl 
        Не робив окремо логіку, бо код тільки псується, його можа додати в customStyle="lg:text-3xl"
        */}
        <PhoneLink />
        {/* Вони будуть на білому фоні, тому не заливав. Іконка інстаграму заливається добре, а фейсбуку повністю стає біла */}
        <SocialMediaList />
      </div>

      {/* Для тесту скролу, можна прибрати */}
      <div className="h-[500px] block bg-cyan-600" id="about">
        about
      </div>
      <div className="h-[500px] block bg-red-600" id="faq">
        faq
      </div>
    </>
  );
}
