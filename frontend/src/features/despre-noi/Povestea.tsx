export default function Povestea() {
  return (
    <div className="flex flex-col">
      <div className="relative flex ~mt-10/20">
        <div className="absolute -right-14 xl:right-0 -bottom-64 lg:-bottom-40 xl:-bottom-20 scale-50 xl:scale-100 opacity-30 xl:opacity-100">
          <img src="./images/half-yellow-circle.png" alt="" />
        </div>
        <div className="absolute bottom-0 xl:-bottom-20 scale-75 xl:scale-100 opacity-30 xl:opacity-100">
          <img src="./images/green-left-gear.png" alt="" />
        </div>
        <div className="container mx-auto items-center pl-4 flex flex-col lg:flex-row  mb-10 gap-12">
          <div className="flex items-end">
            <div className="">
              <img src="./images/business-mens.png" alt="" className="~w-56/96" />
            </div>
          </div>

          <div className="flex flex-col gap-6 ~max-w-xs/3xl justify-center">
            <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
              <p className="tracking-wider">Armonia Acedemy</p>
            </div>
            <div className="font-saint ~text-xl/5xl text-[#0E2A46]">
              Povestea fondatorului Mircea Codrin si a lui George Nedelcu
            </div>

            <div className="~text-sm/lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt magni quas doloribus, velit facilis beatae nobis consectetur nostrum
                dolor in. Fugiat dolorum iste dolore consectetur laudantium eum modi! Mollitia!</p>
            </div>
            <div className="~text-sm/lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt magni quas doloribus, velit facilis beatae nobis consectetur nostrum
                dolor in. Fugiat dolorum iste dolore consectetur laudantium eum modi! Mollitia!</p>
            </div>
            <div className="~text-sm/lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt magni quas doloribus, velit facilis beatae nobis consectetur nostrum
                dolor in. Fugiat dolorum iste dolore consectetur laudantium eum modi! Mollitia!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container lg:mx-auto flex flex-col p-4 justify-center text-white">

        <div className="bg-purple-primary hidden md:flex justify-between rounded-full py-10 px-14">
          <div className="flex gap-4">
            <div>
              <img src="./images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue text-3xl">3K +</p>
              </div>
              <div>
                <p className="text-sm">Successfully Trained</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="./images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue text-3xl">3K +</p>
              </div>
              <div>
                <p className="text-sm">Successfully Trained</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="./images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue text-3xl">3K +</p>
              </div>
              <div>
                <p className="text-sm">Successfully Trained</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="./images/student-icon.png" alt="" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-epilogue text-3xl">3K +</p>
              </div>
              <div>
                <p className="text-sm">Successfully Trained</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-primary flex flex-col md:hidden rounded-3xl gap-4 py-10 px-14">
          <div className="flex flex-1 justify-around">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <img src="./images/student-icon.png" alt="" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-epilogue text-3xl">3K +</p>
                </div>
                <div>
                  <p className="text-sm">Successfully Trained</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <img src="./images/student-icon.png" alt="" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-epilogue text-3xl">3K +</p>
                </div>
                <div>
                  <p className="text-sm">Successfully Trained</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-around">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <img src="./images/student-icon.png" alt="" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-epilogue text-3xl">3K +</p>
                </div>
                <div>
                  <p className="text-sm">Successfully Trained</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <img src="./images/student-icon.png" alt="" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-epilogue text-3xl">3K +</p>
                </div>
                <div>
                  <p className="text-sm">Successfully Trained</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}