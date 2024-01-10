export const myStructure = (S: any) =>
  S.list()
    .title("Контент")
    .items([
      S.listItem()
        .title("Про нас")
        .child(
          S.document().schemaType("about").title("Про нас").documentId("about"),
        )
        .icon(() => "🌸"),

      S.listItem()
        .title("Контакти")
        .child(
          S.document()
            .schemaType("contacts")
            .title("Контакти")
            .documentId("contacts"),
        )
        .icon(() => "📞"),

      S.listItem()
        .title("Відгуки")
        .child(
          S.document()
            .schemaType("reviews")
            .title("Відгуки")
            .documentId("reviews"),
        )
        .icon(() => "📝"),

      S.listItem()
        .title("Галерея")
        .child(
          S.document()
            .schemaType("gallery")
            .title("Галерея")
            .documentId("gallery"),
        )
        .icon(() => "🖼️"),

      S.listItem()
        .title("Послуги")
        .child(
          S.document()
            .schemaType("services")
            .title("Послуги")
            .documentId("services"),
        )
        .icon(() => "🛠️"),

      ...S.documentTypeListItems()
        .filter((listItem: any) => !["about"].includes(listItem.getId()))
        .filter((listItem: any) => !["reviews"].includes(listItem.getId()))
        .filter((listItem: any) => !["services"].includes(listItem.getId()))
        .filter((listItem: any) => !["contacts"].includes(listItem.getId()))
        .filter((listItem: any) => !["gallery"].includes(listItem.getId())),
    ]);
