import { ISections } from "@/types";

import { SCREENS } from "@/constants";

export const getSliderOptions = (section: ISections) => {
  switch (section) {
    case "services": {
      return {
        [SCREENS.LG]: {
          slidesPerView: 4,
          spaceBetween: 12,
          loopedSlides: 3,
        },
      };
    }
    case "advantages": {
      return {
        [SCREENS.SX]: {
          slidesPerView: 1,
        },
      };
    }
    case "feedback": {
      return {
        [SCREENS.LG]: {
          slidesPerView: 2,
        },
      };
    }
    case "gallery": {
      return {
        [SCREENS.SX]: {
          slidesPerView: 1,
        },
        [SCREENS.MD]: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          spaceBetween: 80,
          slidesPerView: 3,
          centeredSlides: true,
          roundLengths: true,
          loopAdditionalSlides: 30,
          centeredSlidesBounds: true,
        },
      };
    }

    default: {
      return {
        [SCREENS.SX]: {
          slidesPerView: 1,
        },
        [SCREENS.MD]: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          slidesPerView: 3,
          loopedSlides: 3,
          spaceBetween: 24,
        },
      };
    }
  }
};
