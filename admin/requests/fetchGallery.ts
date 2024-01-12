import { GalleryResponse } from "@/types";

import { client } from "admin/client";
import { galleryQuery } from "./queries/gallery";

export const fetchGallery = async (): Promise<GalleryResponse> => {
  const images = await client.fetch(galleryQuery);
  return images;
};
