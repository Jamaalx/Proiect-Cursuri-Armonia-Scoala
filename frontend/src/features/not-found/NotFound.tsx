import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

export default function NotFound() {
  return (
    <div className="md:container md:mx-auto flex flex-col lg:flex-row md:mt-16">
      <div className="flex flex-col relative items-center gap-10 ml-6 md:ml-20">
        <img src="/images/green-gear.png" alt="" className="max-w-40" />
        <p className="text-blue-text-primary ~text-3xl/5xl font-bold">Sorry, Page Not Found!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex sm:self-start flex-col xl:flex-row items-center gap-5 xl:gap-20 justify-center md:justify-start">
          <div
            className={cn(
              'flex select-none items-center justify-center rounded-full gap-2 pr-4 text-white transition active:scale-[0.97] bg-purple-primary',
            )}
          >
            <div className={cn("p-4 rounded-full bg-purple-secondary")}>
              <FiArrowLeft className="~text-lg/3xl" />
            </div>
            <Link to={"/"}>
              <span className="text-sm mx-2 font-light">Back To Home</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex relative mx-6 md:mx-20 mt-10">
        <img className="aspect-square object-contain" src="/images/not-found.png" alt="" />
      </div>
    </div>
  );
}