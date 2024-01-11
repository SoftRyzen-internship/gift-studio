import React, { useEffect, useState } from "react";

// import { fetchAboutImg } from "admin/requests/fetchAbout";
import { GalleryResponse } from "@/data/types";
// import { fetchContacts } from "admin/requests/fetchContacts";
import { fetchGallery } from "admin/requests/fetchGallery";
// import contacts from "admin/schemas/contacts";

function Example() {
  const [image, setImage] = useState<GalleryResponse | null>(null);

  useEffect(() => {
    const getAboutImage = async () => {
      const gallery = await fetchGallery();

      setImage(gallery);
    };
    getAboutImage();
    console.log(image);
  }, []);

  return <div className="max-w-md bg-blue-100"></div>;
}

export default Example;
