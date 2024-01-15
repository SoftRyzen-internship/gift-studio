import { ImageProps } from "next/image";

import { TImage } from "@/types";

type OmittedProps = "src" | "alt" | "blur" | "blurDataURL";

export type SanityImageProps = Omit<ImageProps, OmittedProps> & {
  image: TImage;
};
