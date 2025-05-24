import { Outlet } from "react-router";
// import ExemplesComponent from "../../features/test-components/ExemplesComponent";
import Navbar from "../../features/navbar/Navbar";
import Footer from "../../features/footer/Footer";
import ScrollToTop from "../../lib/scrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet /> {/* this outlet will be remplaced by components in the route*/}
      <Footer />
      {/* <ExemplesComponent /> */}
    </div>
  );


}

export default App;
