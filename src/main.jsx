import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Button, NextUIProvider } from "@nextui-org/react";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-up";
import ScrollUpArrowIcon from "./assets/Icon/ScrollUpArrowIcon.jsx";
AOS.init();

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <ParallaxProvider>
        <App />
        <AnimatedCursor />
        <ScrollToTop showUnder={160}>
          <Button isIconOnly color="default" onClick={handleScrollToTop}>
            <ScrollUpArrowIcon />
          </Button>
        </ScrollToTop>
      </ParallaxProvider>
    </NextUIProvider>
  </StrictMode>
);
