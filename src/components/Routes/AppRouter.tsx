import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import {
  Inbox,
  Calender,
  Search,
  Settings,
  ContactUs,
  AboutUs,
} from "@/components/screens";
import { Layout } from "@/Layout";
import { lazy } from "react";
const Home = lazy(() => import("@/components/screens/home/Home"));
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: AppRoutes.home,
        element: <Home />,
      },
      {
        path: AppRoutes.inbox,
        element: <Inbox />,
      },
      {
        path: AppRoutes.calender,
        element: <Calender />,
      },
      {
        path: AppRoutes.search,
        element: <Search />,
      },
      {
        path: AppRoutes.settings,
        element: <Settings />,
      },
      {
        path: AppRoutes.contactUs,
        element: <ContactUs />,
      },
      {
        path: AppRoutes.aboutUs,
        element: <AboutUs />,
      },
    ],
  },
]);
