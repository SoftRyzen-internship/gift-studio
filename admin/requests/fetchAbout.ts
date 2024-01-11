import { AboutResponse } from "@/data/types";

import { client } from "admin/client";
import { aboutQuery } from "./queries/about";

export const fetchAbout = async (): Promise<AboutResponse> => {
  const about = await client.fetch(aboutQuery, {});
  return about;
};
