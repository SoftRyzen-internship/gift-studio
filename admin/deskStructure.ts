export const myStructure = (S: any) =>
  S.list()
    .title("Контент2")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem: any) => !["about"].includes(listItem.getId()),
      ),

      S.listItem()
        .title("Про нас")
        .child(S.document().schemaType("about").documentId("about"))
        .icon(() => "ℹ️"), // Replace 'ℹ️' with the desired icon (you can use Unicode or a URL)
    ]);
