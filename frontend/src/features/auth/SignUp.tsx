import { Link } from "react-router";
import { cn } from "../../lib/cn";
import { FiArrowRight } from "react-icons/fi";

export default function SignUp() {
  return (
    <div className="bg-purple-primary absolute inset-0 h-full">
      <div className="absolute inset-0 z-20"></div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row relative justify-center gap-10 mx-4 w-full md:max-w-[1200px]
        bg-white rounded-3xl px-10 lg:px-0 py-10 shadow-xl top-44 z-30">
          {/* Form begin */}
          <form className="flex justify-center flex-col gap-6">
            <div className="flex">
              <input
                type="text"
                placeholder="Full Nume *"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Phone *"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Email *"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="password"
                placeholder="Password *"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className=" flex justify-between">
              <p className="text-red-500">Forgot Password?</p>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col xl:flex-row items-center gap-5 xl:gap-20 justify-center md:justify-start">
              <div
                className={cn(
                  'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97] bg-purple-primary',
                )}
              >
                <Link to={""}>
                  <span className="text-sm mx-2 font-light">Sign Up</span>
                </Link>
                <div className={cn("p-4 rounded-full bg-purple-secondary")}>
                  <FiArrowRight className="text-xl" />
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p>or sign up with</p>
                <img src="./images/signup-icons.png" alt="" />
              </div>
            </div>
            <div className="flex gap-4">
              <p>Don't have an account?</p>
              <Link to={"/signin"} className="text-blue-text-primary font-semibold">Sign In</Link>
            </div>
          </form>
          <div className="hidden md:block">
            <img className="" src="./images/signup.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

