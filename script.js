const sections = [...document.querySelectorAll(".page-section")];
const sectionDots = [...document.querySelectorAll(".section-dot")];
const progressFill = document.querySelector(".nav-progress-fill");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSections = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visibleSections.length) return;

    const activeIndex = sections.indexOf(visibleSections[0].target);
    sectionDots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      if (isActive) dot.setAttribute("aria-current", "location");
      else dot.removeAttribute("aria-current");
    });

    if (progressFill) {
      progressFill.style.height = `${((activeIndex + 1) / sections.length) * 100}%`;
    }
  },
  { threshold: [0.2, 0.4, 0.6], rootMargin: "-15% 0px -15% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));
