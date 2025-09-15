import "@ant-design/v5-patch-for-react-19";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import "../public/assets/fonts/flaticon/flaticon_sasly.css";
// import "../public/assets/fonts/fontawesome/all.min.css";
// import "../public/assets/css/plugins/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../public/assets/css/plugins/slick.css";
// import "../public/assets/css/plugins/magnific-popup.css";
// import "aos/dist/aos.css";
// import "../public/assets/css/default.css";
// import "../public/assets/css/common_style.css";
// import "../public/assets/css/style.css";

import Aos from "aos";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routers";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
}

export default App;
