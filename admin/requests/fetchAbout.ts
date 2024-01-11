import { client } from "admin/client";
import { aboutQuery } from "./queries/about";
import { AboutResponse, ImgType } from "@/data/types";

export const fetchAboutImg = async (): Promise<ImgType> => {
  const about: AboutResponse = await client.fetch(aboutQuery, {
    next: {
      revalidate: 3600,
    },
  });

  console.log(about);

  return about;
};
