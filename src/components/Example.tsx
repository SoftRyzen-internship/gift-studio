import React from "react";
import { PortableText } from "@portabletext/react";

import { fetchAbout } from "@/admin/requests/fetchAbout";
import { fetchFeedbacks } from "@/admin/requests/fetchFeedbacks";
import { fetchContacts } from "@/admin/requests/fetchContacts";
import SanityImage from "./ui/SanityImage";
import { fetchGallery } from "@/admin/requests/fetchGallery";
import { fetchServices } from "@/admin/requests/fetchServices";
import SectionHeading from "./typography/SectionHeading";

async function Example() {
  const aboutImage = await fetchAbout();
  const feedbacks = await fetchFeedbacks();
  const contacts = await fetchContacts();
  const imagesGallery = await fetchGallery();
  const services = await fetchServices();

  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <SectionHeading title="Examples to use sanity data." />
      <SanityImage
        image={aboutImage}
        width={300}
        height={400}
        priority
        className="mb-4 h-64 w-full object-cover"
      />
      <SectionHeading title="Feedbacks" />
      <h2 className="mb-4 text-3xl font-bold">Feedbacks</h2>
      {feedbacks.map(feedback => (
        <div key={feedback.id} className="mb-4">
          <p className="text-xl font-semibold">{feedback.image.alt}</p>
          <PortableText value={feedback.text} />
          <SanityImage
            image={feedback.image}
            width={100}
            height={100}
            className="mb-4 h-64 w-full object-cover"
          />
        </div>
      ))}
      <SectionHeading title="Contacts" />
      <h2 className="mb-4 text-3xl font-bold">Contacts</h2>
      <div className="mb-4 flex">{contacts.phone}</div>
      <SectionHeading title="Gallery" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {imagesGallery.map(image => (
          <div key={image.id} className="mb-4">
            <SanityImage
              image={image.image}
              width={100}
              height={100}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
      <SectionHeading title="Services" />
      {services.map(service => (
        <div key={service.id} className="mb-4 flex">
          <PortableText value={service.serviceName} />
          <SanityImage
            image={service.image}
            width={100}
            height={100}
            sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          40vw"
            className="mb-4 h-64 w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Example;
