import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import { Home } from "./Components/pages/Home/Home";
import { Episode } from "./Components/pages/Episode/Episode";
import { Location } from "./Components/pages/Location/Location";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/episodes",
        element: <Episode />,
      },
      {
        path: "/locations",
        element: <Location />,
      },
    ],
  },
]);
