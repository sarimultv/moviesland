import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

import ErrorPage from "./ErrorPage";
import VideoView from "./VideoView";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    { path: "/login", element: <Login /> },
    { path: "/videoView/:videoId", element: <VideoView /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
