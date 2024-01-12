import React from "react";
import Image from "next/image";
import { client } from "admin/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import { fetchAbout } from "admin/requests/fetchAbout";
import { fetchContacts } from "admin/requests/fetchContacts";
import { fetchGallery } from "admin/requests/fetchGallery";
import { fetchFeedbacks } from "admin/requests/fetchFeedbacks";

import { fetchServices } from "admin/requests/fetchServices";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

async function Example() {
  const aboutImage = await fetchAbout();
  const imagesGallery = await fetchGallery();
  const contacts = await fetchContacts();
  const feedbacks = await fetchFeedbacks();
  const services = await fetchServices();

  return (
    <div className="max-w-md bg-blue-100">
      <h2>Gallery</h2>
      {imagesGallery.map(image => (
        <div key={image.alt} className="">
          {image.alt}
          <Image
            src={urlFor(image.image).url()}
            alt={image.alt}
            width={100}
            height={100}
            sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
          />
        </div>
      ))}
      <h2>feedbacks</h2>
      {feedbacks.map(feedback => (
        <div key={feedback.id}>
          {feedback.alt}
          <p>PortableText</p>
          <PortableText value={feedback.text} />
          <Image
            src={urlFor(feedback.image).url()}
            alt={feedback.alt}
            width={100}
            height={100}
            sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
          />
        </div>
      ))}
      <h2>services</h2>
      {services.map(service => (
        <div key={service.alt}>
          {service.alt}
          <p>PortableText</p>
          <PortableText value={service.serviceName} />
          <Image
            src={urlFor(service.image).url()}
            alt={service.alt}
            width={100}
            height={100}
            sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
          />
        </div>
      ))}
      <h2>about</h2>
      <Image
        src={urlFor(aboutImage.image.image).url()}
        alt={aboutImage.image.alt}
        width={200}
        height={100}
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
      />
      <div className="">{contacts.phone}</div>
    </div>
  );
}

export default Example;
