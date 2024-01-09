export const myStructure = (S: any) =>
  S.list()
    .title("Контент")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem: any) => !["about"].includes(listItem.getId()),
      ),
      // .listItem(S.document().schemaType("service").documentId("service")),
      // .items([...S.documentTypeList("service")]),

      S.listItem()
        .title("Про нас")
        .child(S.document().schemaType("about").documentId("about")),
    ]);
