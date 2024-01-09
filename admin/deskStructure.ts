export const myStructure = (S: any) =>
  S.list()
    .title("Контент2")
    .items([
      S.listItem()
        .title("Про нас")
        .child(S.document().schemaType("about").documentId("about"))
        .icon(() => "ℹ️"), // Replace 'ℹ️' with the desired icon (you can use Unicode or a URL)

      // S.listItem()
      //   .title("Галерея")
      //   .child(
      //     S.list()
      //       .title("Галерея")
      //       .menuItems(S.documentTypeList("gallery").getMenuItems()),
      //   ),

      S.listItem()
        .title("Відгуки")
        .child(
          S.document()
            .schemaType("reviews")
            .title("Відгуки")
            .documentId("reviews"),
        ),

      S.listItem()
        .title("Галерея")
        .child(
          S.document()
            .schemaType("gallery")
            .title("Галерея")
            .documentId("gallery"),
        ),

      ...S.documentTypeListItems()
        .filter((listItem: any) => !["about"].includes(listItem.getId()))
        .filter((listItem: any) => !["reviews"].includes(listItem.getId()))
        .filter((listItem: any) => !["gallery"].includes(listItem.getId())),
    ]);
