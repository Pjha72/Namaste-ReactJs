import React from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
// Named Import
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/Profile"

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children : [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
            children : [
              {
                path: "profileclass", // parentpath/{path} =>  localhost:1234/about/profile
                element: <ProfileClass />
              },
          ]
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
        }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
/** When render the React element Used This Syntax */
// root.render(head);

/** When Render the React Component */
root.render(<RouterProvider router={appRouter} />);
