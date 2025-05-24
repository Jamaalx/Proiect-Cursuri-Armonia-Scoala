import CursuriOferte from "./CursuriOferte";
import IntroDetails from "./Intro-Details";
import OptiuniSiInscriere from "./OptiuniSiInscriere";
import OurClients from "./OurClients";

export default function CursMain() {
  return (
    <div>
      <IntroDetails />
      <OurClients />
      <CursuriOferte />
      <OptiuniSiInscriere />
    </div>
  );
}