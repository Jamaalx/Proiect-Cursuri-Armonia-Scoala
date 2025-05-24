import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Programe from "../../features/programe/Programe";
import Program from "../../features/programe/Program";
import DespreNoi from "../../features/despre-noi/DespreNoi";
import CursMain from "../../features/curs/CursMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "programe", element: <Programe /> },
      { path: "program", element: <Program /> },
      { path: "despre-noi", element: <DespreNoi /> },
      { path: "curs", element: <CursMain /> }
    ]
  }
]);