import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NotFound } from "@/components/screens";
import { Layout } from "@/Layout";
import { lazy } from "react";
import { ProtectedRoute } from "../wrappers/ProtectedRoute";
const Home = lazy(() => import("@/components/screens/home/Home"));
const Inbox = lazy(() => import("@/components/screens/inbox/Inbox"));
const Calender = lazy(() => import("@/components/screens/calender/Calender"));
const Search = lazy(() => import("@/components/screens/search/Search"));
const Settings = lazy(() => import("@/components/screens/settings/Settings"));
const ContactUs = lazy(
  () => import("@/components/screens/contactUs/ContactUs")
);
const AboutUs = lazy(() => import("@/components/screens/aboutUs/AboutUs"));
const Login = lazy(() => import("@/components/screens/login/Login"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: AppRoutes.login,
        element: <Login />,
      },
      {
        path: AppRoutes.home,
        element: <Home />,
      },
      {
        path: AppRoutes.inbox,
        element: <ProtectedRoute component={Inbox} />,
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
        element: <ProtectedRoute component={Settings} />,
      },
      {
        path: AppRoutes.contactUs,
        element: <ContactUs />,
      },
      {
        path: AppRoutes.aboutUs,
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
