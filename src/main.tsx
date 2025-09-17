import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-phone-number-input/style.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
