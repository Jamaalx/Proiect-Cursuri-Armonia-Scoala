import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center">
        <img className="hidden md:block xl:w-[81%]" src="/images/hero.png" alt="" />
        <img className="md:hidden w-full" src="/images/hero-mini.png" alt="" />
      </div>
      <div>
        <div className="flex justify-center relative -top-16 z-10">
          <div className="flex items-center justify-between mt-6 cursor-pointer">
            <div
              className={cn(
                'flex bg-green-secondary items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]',
              )}
            >
              <Link to={"cursuri"}>
                <span className="~text-sm/2xl font-medium select-none">Vezi mai Mult</span>
              </Link>
              <div className={cn("~p-3/7 rounded-full bg-teal-400")}>
                <FiArrowRight className="text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end relative bottom-40">
          <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 mt-10 relative z-10">
            <img className="scale-50 md:scale-90 lg:scale-100" src="/images/chat_bot.png" alt="" />
          </a>
        </div>
        <div className="flex justify-center relative bottom-32 md:bottom-0 scale-50 md:scale-100">
          <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 relative">
            <img className="scale-90 lg:scale-100" src="/images/scroll.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}