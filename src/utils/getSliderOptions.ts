const SCREENS = {
  SX: 480,
  MD: 768,
  LG: 1280,
};

export const getSliderOptions = (
  section: "features" | "feedback" | "gallery" | "services",
) => {
  switch (section) {
    case "services": {
      return {
        [SCREENS.LG]: {
          slidesPerView: 4,
          spaceBetween: 12,
          loopedSlides: 3,
          loop: true,
        },
      };
    }
    case "features": {
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
        [SCREENS.MD]: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          slidesPerView: 3,
          loopedSlides: 3,
          loop: true,
          centeredSlides: true,
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
          loop: true,
          loopedSlides: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          slidesPerView: 3,
          loop: true,
          loopedSlides: 3,
          spaceBetween: 24,
        },
      };
    }
  }
};
