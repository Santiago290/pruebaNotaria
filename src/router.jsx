import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
    {
    basename: "/pruebaNotaria",
    }
);

export default router;