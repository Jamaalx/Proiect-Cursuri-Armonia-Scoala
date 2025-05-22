export default function Intro() {
  return (
    <div className="relative flex ~mt-10/96">
      <div className="absolute right-0 -bottom-20 scale-50 xl:scale-100 opacity-30">
        <img src="./images/half-yellow-circle.png" alt="" />
      </div>
      <div className="xl:container md:mx-auto flex mb-10">
        <div className="hidden lg:flex items-end">
          <div className="">
            <img src="./images/pink-hamburger.png" alt="" />
          </div>
          <div className="-translate-x-1/2 -mb-3">
            <img src="./images/yellow-human-big.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-6 ~max-w-xs/3xl justify-center">
          <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
            <p className="tracking-wider">Armonia Acedemy</p>
          </div>
          <div className="font-saint ~text-xl/5xl text-[#0E2A46]">
            It's Our Passion To Work With People At
            <span className="text-green-secondary-rgb"> Armonia Acedemy.</span>
          </div>

          <div className="~text-sm/lg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt magni quas doloribus, velit facilis beatae nobis consectetur nostrum
              dolor in. Fugiat dolorum iste dolore consectetur laudantium eum modi! Mollitia!</p>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-4 items-center bg-[#F3F5F5] w-72 px-4 rounded-lg py-3">
              <img src="./images/check.png" alt="" className="h-[17px] w-auto" />
              <p className="~text-xs/lg text-[#191659] font-[500] tracking-wider">QUALITY MENTORS</p>
            </div>
            <div className="flex gap-4 items-center bg-[#F3F5F5] w-80 px-4 rounded-md py-3">
              <img src="./images/check.png" alt="" className="h-[17px] w-auto" />
              <p className="~text-xs/lg text-[#191659] font-[500] tracking-wider">SAFETY AND SECURITY</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}