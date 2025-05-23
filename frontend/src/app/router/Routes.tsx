import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Programe from "../../features/programe/Programe";
import Program from "../../features/programe/Program";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "programe", element: <Programe /> },
      { path: "program", element: <Program /> }
    ]
  }
]);