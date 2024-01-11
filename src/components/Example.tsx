import React, { useEffect, useState } from "react";

import { fetchAboutImg } from "admin/requests/fetchAbout";
import { ImgType } from "@/data/types";

function Example() {
  const [image, setImage] = useState<ImgType | null>(null);

  useEffect(() => {
    const getAboutImage = async () => {
      const image = await fetchAboutImg();
      setImage(image);
    };
    getAboutImage();
    console.log(image);
  }, []);

  return <div className="max-w-md bg-blue-100"></div>;
}

export default Example;
