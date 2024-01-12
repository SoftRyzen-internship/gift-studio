import { ContactsResponse } from "@/types";

import { client } from "admin/client";
import { contactsQuery } from "./queries/contacts";

export const fetchContacts = async (): Promise<ContactsResponse> => {
  const contacts: ContactsResponse = await client.fetch(contactsQuery, {});
  return contacts;
};
