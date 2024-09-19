import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </NextUIProvider>
  </StrictMode>
);
