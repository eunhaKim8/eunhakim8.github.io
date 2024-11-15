import { useEffect } from "react";
import anime from "animejs";

// SmoothScroll 컴포넌트
const SmoothScroll = () => {
  useEffect(() => {
    const handleScrollClick = (event) => {
      const target = event.target;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const targetId = target.getAttribute("href").substring(1); // # 제거
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          anime({
            targets: "html, body",
            scrollTop: targetElement.offsetTop,
            duration: 1000,
            easing: "easeInOutExpo",
          });
        }
      }
    };

    document.addEventListener("click", handleScrollClick);

    return () => {
      document.removeEventListener("click", handleScrollClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
