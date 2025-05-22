import Help from "./Help";
import Hero from "./Hero";
import Intro from "./Intro";
import Pachete from "./Pachete";
import Sediile from "./Sediile";
import Testimonial from "./Testimonial";

export default function RegisterForm() {


  return (
    <div>
      <Hero />
      <Sediile />
      <Intro />
      <Pachete />
      <Help />
      <Testimonial />
      {/* <p className="font-saint text-3xl">Fontul Saint Regus</p> */}
    </div>
  );
}
