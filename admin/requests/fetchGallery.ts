import { client } from "admin/client";

import { GalleryResponse } from "@/data/types";
import { galleryQuery } from "./queries/gallery";

export const fetchGallery = async (): Promise<GalleryResponse> => {
  const gallery: GalleryResponse = await client.fetch(galleryQuery, {
    next: {
      revalidate: 3600,
    },
  });

  console.log(gallery);

  return gallery;
};
