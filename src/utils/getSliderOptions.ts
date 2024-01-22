import { TSections } from "@/src/types";

import { SCREENS } from "@/src/constants";

export const getSliderOptions = (section: TSections) => {
  switch (section) {
    case "services": {
      return {
        [SCREENS.LG]: {
          slidesPerView: 4,
          spaceBetween: 12,
          loopedSlides: 4,
        },
      };
    }
    case "advantages": {
      return {
        [SCREENS.SX]: {
          slidesPerView: 1,
          loop: false,
        },
        [SCREENS.MD]: {
          loop: false,
        },
        [SCREENS.LG]: {
          loop: false,
        },
      };
    }
    case "feedback": {
      return {
        [SCREENS.LG]: {
          slidesPerView: 2,
          spaceBetween: 16,
          loopedSlides: 4,
          watchSlidesProgress: true,
        },
      };
    }
    case "gallery": {
      return {
        [SCREENS.SX]: {
          slidesPerView: 1,
          loopedSlides: 2,
        },
        [SCREENS.MD]: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          spaceBetween: 80,
          slidesPerView: 3,
          loopedSlides: 3,
          centeredSlides: true,
          roundLengths: true,
          centeredSlidesBounds: true,
        },
      };
    }

    default: {
      return {
        [SCREENS.SX]: {
          slidesPerView: 1,
          loopedSlides: 2,
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
