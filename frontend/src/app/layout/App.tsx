import { Outlet } from "react-router";
// import ExemplesComponent from "../../features/test-components/ExemplesComponent";
import Navbar from "../../features/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* this outlet will be remplaced by components in the route*/}
      {/* <ExemplesComponent /> */}
    </div>
  );


}

export default App;
