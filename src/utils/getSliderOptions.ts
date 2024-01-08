const SCREENS = {
  SX: 480,
  MD: 768,
  LG: 1280,
};

export const getSliderOptions = (
  section: "features" | "feedback" | "gallery",
) => {
  //   if (section === 'features') {
  //     return {
  //       [SCREENS.SX]: {
  //         slidesPerView: 1,
  //       },
  //     };
  //     }

  if (section === "feedback") {
    return {
      //   [SCREENS.SX]: {
      //     slidesPerView: 1,
      //   },
      //   [SCREENS.MD]: {
      //     slidesPerView: 1,
      //     loopedSlides: 1,
      //   },
      [SCREENS.LG]: {
        slidesPerView: 2,
        loopedSlides: 2,
      },
    };
  }
  if (section === "gallery") {
    return {
      [SCREENS.MD]: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 16,
      },
      [SCREENS.LG]: {
        slidesPerView: 3,
        loopedSlides: 3,
        centeredSlides: true,
        loop: true,
      },
    };
  }
};
