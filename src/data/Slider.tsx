import { Autoplay } from "swiper/modules";

// <!--====== Slick Section ======-->

export const WorkshopSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 6,
  variableWidth: true,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

export const TestimonialSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// <!--====== Swiper Section ======-->

export const BlogsSettings = {
  modules: [Autoplay],
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: { delay: 3000, disableOnInteraction: false },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

export const AchievementsSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 6000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 767,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 450,
      settings: { slidesToShow: 1 },
    },
  ],
};
