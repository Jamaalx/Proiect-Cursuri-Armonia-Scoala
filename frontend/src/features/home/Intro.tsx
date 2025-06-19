export default function Intro() {
  return (
    <div className="relative flex ~mt-10/40">
      <div className="xl:container md:mx-auto px-8 ~gap-2/6 flex mb-10">
        <div className="hidden lg:flex items-end">
          <div className="">
            <img src="./images/pink-hamburger.png" alt="" />
          </div>
          <div className="-translate-x-1/2 -mb-3">
            <img src="./images/yellow-human-big.png" alt="" />
          </div>
        </div>

        <div className="flex lg:hidden items-end">
          <img src="./images/human-hamburger.png" alt="" className="flex-shrink-0 ~w-28/64 h-auto" />
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <div className="w-max bg-green-secondary ~text-xs/sm font-semibold text-white mb-2 ~py-1/2 ~px-2/4 rounded-full">
            <p className="tracking-wider">Armonia Acedemy</p>
          </div>
          <div className="font-saint text-sm md:text-xl xl:text-5xl leading-tight ~max-w-36/5xl text-[#0E2A46]">
            It's Our Passion To Work With People At
            <span className="text-green-secondary-rgb"> Armonia Acedemy.</span>
          </div>

          <div className="~text-xs/lg ~max-w-36/5xl mb-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt magni quas doloribus, velit facilis beatae nobis consectetur nostrum
              dolor in. Fugiat dolorum iste dolore consectetur laudantium eum modi! Mollitia!</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-1">
            <div className="flex ~gap-2/4 items-center bg-[#F3F5F5] ~w-36/72 ~px-2/4 rounded-lg ~py-1/3">
              <img src="./images/check.png" alt="" className="h-[17px] w-auto" />
              <p className="text-[10px] md:~text-xs/lg text-nowrap text-[#191659] font-[500] tracking-wider">QUALITY MENTORS</p>
            </div>
            <div className="flex ~gap-2/4 items-center bg-[#F3F5F5] ~w-40/72 ~px-2/4 rounded-lg ~py-1/3">
              <img src="./images/check.png" alt="" className="h-[17px] w-auto" />
              <p className="text-[10px] md:~text-xs/lg text-[#191659] font-[500] tracking-wider text-nowrap">SAFETY AND SECURITY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-10 lg:top-48 -right-14 xl:-right-10 hidden sm:block -bottom-40  xl:-bottom-20 scale-50 2xl:scale-75">
        <img src="./images/half-yellow-circle.png" alt="" />
      </div>
      <div className="absolute top-32 right-0 sm:hidden -bottom-40  xl:-bottom-20">
        <img src="./images/half-yellow-circle-small.png" alt="" />
      </div>
    </div>
  );
}