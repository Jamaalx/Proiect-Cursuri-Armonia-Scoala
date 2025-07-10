import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Programe from "../../features/programe/Programe";
import DespreNoi from "../../features/despre-noi/DespreNoi";
import CursMain from "../../features/curs/CursMain";
import Profesori from "../../features/profesori/Profesori";
import Profesor from "../../features/profesori/Profesor";
import Blogs from "../../features/blog/Blogs";
import Blog from "../../features/blog/Blog";
import Contact from "../../features/contact/Contact";
import SignUp from "../../features/auth/SignUp";
import SignIn from "../../features/auth/SignIn";
import NotFound from "../../features/not-found/NotFound";
import Cookies from "../../features/cookies/Cookies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "programe", element: <Programe /> },

      { path: "despre-noi", element: <DespreNoi /> },
      { path: "curs/:id", element: <CursMain /> },
      { path: "profesori", element: <Profesori /> },

      // this will be for the single profesor by id
      { path: "profesor", element: <Profesor /> },

      { path: "blogs", element: <Blogs /> },

      // this will be for the single profesor by id
      { path: "blog", element: <Blog /> },

      { path: "contact", element: <Contact /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "not-found", element: <NotFound /> },
      { path: "cookies", element: <Cookies /> },
    ]
  }
]);