import { ServicesResponse } from "@/data/types";

import { client } from "admin/client";
import { servicesQuery } from "./queries/services";

export const fetchServices = async (): Promise<ServicesResponse> => {
  const services = await client.fetch(servicesQuery);
  return services;
};
