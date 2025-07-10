import CursuriOferte from "./CursuriOferte";
import IntroDetails from "./Intro-Details";
import OptiuniSiInscriere from "./OptiuniSiInscriere";
import OurClients from "./OurClients";
import { useLocation } from "react-router-dom";

export default function CursMain() {
  const location = useLocation();
  const card = location.state?.card;

  return (
    <div>
      <IntroDetails card={card} />
      <OurClients />
      <CursuriOferte />
      <OptiuniSiInscriere card={card} />
    </div>
  );
}