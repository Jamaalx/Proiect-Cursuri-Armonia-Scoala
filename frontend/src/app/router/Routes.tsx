import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Programe from "../../features/programe/Programe";
import Program from "../../features/programe/Program";
import DespreNoi from "../../features/despre-noi/DespreNoi";
import CursMain from "../../features/curs/CursMain";
import Profesori from "../../features/profesori/Profesori";
import Profesor from "../../features/profesori/Profesor";
import Blogs from "../../features/blog/Blogs";
import Blog from "../../features/blog/Blog";
import Contact from "../../features/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "programe", element: <Programe /> },

      // this will be for the single program by id
      { path: "program", element: <Program /> },

      { path: "despre-noi", element: <DespreNoi /> },
      { path: "cursuri", element: <CursMain /> },
      { path: "profesori", element: <Profesori /> },

      // this will be for the single profesor by id
      { path: "profesor", element: <Profesor /> },

      { path: "blogs", element: <Blogs /> },

      // this will be for the single profesor by id
      { path: "blog", element: <Blog /> },

      { path: "contact", element: <Contact /> }
    ]
  }
]);