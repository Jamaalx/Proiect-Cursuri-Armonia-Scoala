export default function Povestea() {
  return (
    <div className="flex flex-col">
      <div className="relative flex ~mt-10/20">
        <div className="absolute hidden lg:block -right-14 xl:right-0 -bottom-64 lg:-bottom-40 xl:-bottom-20 scale-50 xl:scale-100 opacity-30 xl:opacity-100">
          <img src="/images/half-yellow-circle.png" alt="" />
        </div>
        <div className="absolute hidden lg:block bottom-0 xl:-bottom-20 scale-75 xl:scale-100 opacity-30 xl:opacity-100">
          <img src="/images/green-left-gear.png" alt="" />
        </div>
        <div className="container mx-auto items-center pl-4 flex flex-col lg:flex-row  mb-10 ~gap-2/12">
          <div className="flex items-end">
            <div className="">
              <img src="/images/business-mens.png" alt="" className="~w-20/96" />
            </div>
          </div>

          <div className="flex flex-col ~gap-2/6 ~max-w-xs/3xl justify-center">
            <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
              <p className="tracking-wider">Armonia Acedemy</p>
            </div>
            <div className="font-saint ~text-xl/5xl text-[#0E2A46]">
              Povestea fondatorului Mircea Codrin si a lui George Nedelcu
            </div>

            <div className="~text-sm/lg">
              <p>Armonia Academy s-a născut din pasiunea comună pentru muzică și dorința de a crea un spațiu unde educația muzicală să devină o experiență transformatoare. Fondată de Mircea Codrin, un muzician dedicat cu viziunea de a redefini învățarea muzicală, școala și-a găsit în George Nedelcu un partener esențial care a contribuit la dezvoltarea și promovarea imaginii brandului.
                Împreună, ei au creat mai mult decât o școală de muzică - au construit o comunitate vibrantă unde fiecare cursant își poate descoperi potențialul artistic în armonie cu profesionalismul și căldura umană. Misiunea lor este simplă, dar profundă: să inspire creativitatea și să cultive talentele muzicale într-un mediu care îmbină libertatea artistică cu excelența educațională.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container lg:mx-auto flex flex-col p-4 justify-center text-white">

        <div className="bg-purple-primary hidden md:flex justify-between rounded-full py-10 px-14">
          <div className="flex gap-4">
            <div>
              <img src="/images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue ~text-lg/3xl">500+</p>
              </div>
              <div>
                <p className="text-sm"> Cursanți Activi</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="/images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue ~text-lg/3xl">15+</p>
              </div>
              <div>
                <p className="text-sm">Profesori Experimentați</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="/images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue ~text-lg/3xl">5</p>
              </div>
              <div>
                <p className="text-sm">Sedii în București</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="/images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue ~text-lg/3xl">8</p>
              </div>
              <div>
                <p className="text-sm">Ani de Experiență</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-primary flex flex-col md:hidden rounded-3xl gap-6 py-10 px-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center gap-2">
              <div>
                <img src="/images/student-icon.png" alt="" className="w-12 h-12" />
              </div>

              <div className="flex flex-col items-center gap-1">
                <div>
                  <p className="font-epilogue text-2xl">500+</p>
                </div>
                <div>
                  <p className="text-sm">Cursanți Activi</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div>
                <img src="/images/student-icon.png" alt="" className="w-12 h-12" />
              </div>

              <div className="flex flex-col items-center gap-1">
                <div>
                  <p className="font-epilogue text-2xl">15+</p>
                </div>
                <div>
                  <p className="text-sm">Profesori Experimentați</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div>
                <img src="/images/student-icon.png" alt="" className="w-12 h-12" />
              </div>

              <div className="flex flex-col items-center gap-1">
                <div>
                  <p className="font-epilogue text-2xl">5</p>
                </div>
                <div>
                  <p className="text-sm">Sedii în București</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div>
                <img src="/images/student-icon.png" alt="" className="w-12 h-12" />
              </div>

              <div className="flex flex-col items-center gap-1">
                <div>
                  <p className="font-epilogue text-2xl">8</p>
                </div>
                <div>
                  <p className="text-sm">Ani de Experiență</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}