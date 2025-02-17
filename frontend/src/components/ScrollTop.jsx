import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const scrollToggle = () => {
    const top = document.documentElement.scrollTop;
    setScrollTopVisible(top > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToggle);
    return () => {
      window.removeEventListener("scroll", scrollToggle);
    };
  }, []);
  return (
    <div>
      <button
        type="button"
        className="scroll-to-top border-[3px] border-white rounded-full shadow-lg"
        style={{ display: scrollTopVisible ? "flex" : "none" }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    </div>
  );
};

export default ScrollTop;
