import { client } from "admin/client";

import { contactsQuery } from "./queries/contacts";
import { ContactsResponse } from "@/data/types";

export const fetchContacts = async (): Promise<ContactsResponse> => {
  const contacts: ContactsResponse = await client.fetch(contactsQuery, {
    next: {
      revalidate: 3600,
    },
  });

  return contacts;
};
