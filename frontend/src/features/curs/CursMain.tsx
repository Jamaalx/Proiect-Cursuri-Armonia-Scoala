import CursuriOferte from "./CursuriOferte";
import IntroDetails from "./Intro-Details";
import OptiuniSiInscriere from "./OptiuniSiInscriere";
import OurClients from "./OurClients";
import { useLocation, useParams, Navigate } from "react-router-dom";
import { useGetCoursesStore } from "../../store/armoniaDataStore";

export default function CursMain() {
  const location = useLocation();
  const { id } = useParams();
  const courses = useGetCoursesStore((state) => state.courses);
  
  // Try to get card from location state first, otherwise find it by ID
  let card = location.state?.card;
  
  if (!card && id) {
    // If no card in state, find it by ID from the store
    card = courses.find(c => c.id === Number(id));
  }
  
  // If still no card found, redirect to not found or home
  if (!card) {
    return <Navigate to="/programe" replace />;
  }

  return (
    <div>
      <IntroDetails card={card} />
      <OurClients />
      <CursuriOferte />
      <OptiuniSiInscriere card={card} />
    </div>
  );
}