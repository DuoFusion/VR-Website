import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (id: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: id, offsetY: 100 }, // offsetY for fixed header
    ease: "power2.out",
  });
};
