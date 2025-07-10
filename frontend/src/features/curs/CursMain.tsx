import CursuriOferte from "./CursuriOferte";
import IntroDetails from "./Intro-Details";
import OptiuniSiInscriere from "./OptiuniSiInscriere";
import OurClients from "./OurClients";
import { useParams, useLocation } from "react-router-dom";

export default function CursMain() {
  const location = useLocation();
  const card = location.state?.card;
  const { id } = useParams();
  return (
    <div>
      <IntroDetails card={card} />
      <OurClients card={card} />
      <CursuriOferte card={card} />
      <OptiuniSiInscriere card={card} />
    </div>
  );
}