export default function Blog() {
  return (
    <div>
      {/* floating elements are here */}
      <div className="absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-40 hidden lg:block">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[500px] ">
        <img src="/images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[1850px] ">
        <img src="/images/green-right-gear.png" alt="" />
      </div>

      {/* content start here */}
      <div className="md:container md:mx-auto mt-12">
        <div className="mx-5 xl:mx-10 flex flex-col ~gap-4/8">
          <img className="w-full" src="/images/blog-image-main.png" alt="" />
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/green-calendar.png" alt="" />
              <p className="text-[#888888] font-bold">14 iunie 2025</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/comment.png" alt="" />
              <p className="text-[#888888] font-bold">Comment (06)</p>
            </div>
          </div>
          <p className="text-[#202124] font-semibold ~text-lg/4xl">Pellentesque dignissim enim sit amet venenatis cursus eget nunc</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
          <div className="flex justify-center flex-col lg:flex-row gap-4">
            <img src="/images/blog-img1.png" alt="" />
          </div>
          <p className="text-blue-text-primary font-epilogue font-semibold ~text-lg/4xl">
            Latest Articles Uldated Daily
          </p>
          <p className="text-[17px]">
            With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that
            different approaches to online marketing are becoming available. One of these new approaches is
            performance marketing or digital performance marketing. Keep reading to learn all about
            performance marketing
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="flex gap-3 md:items-center">
              <p className="text-blue-text-primary text-[#17px] w-24 font-bold">Posted in:</p>
              <div className="flex flex-wrap gap-2">
                <p className="bg-gray-100 px-4">Development</p>
                <p className="bg-gray-100 px-4">Digital</p>
                <p className="bg-gray-100 px-4">Tech</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-blue-text-primary text-[#17px] font-bold mr-4">Share:</p>
              <img src="/images/facebook-green.png" alt="" />
              <img src="/images/instagram-green.png" alt="" />
              <img src="/images/twitter-green.png" alt="" />
            </div>
          </div>
          <div className="p-4 md:p-16 lg:mx-40 flex flex-col gap-4 shadow-xl rounded-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-text-primary font-bold">Let’s Get in Touch</h2>
            <p className="text-[17px]">
              Your email address will not be published. Required fields are marked *
            </p>

            {/* Form begin */}
            <form className="flex flex-col gap-6">
              {/* Nume + Prenume */}
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Nume"
                  className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Prenume"
                  className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Website"
                  className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
                />
              </div>

              <div className="flex h-60">
                <textarea
                  className="flex-1 shadow-lg px-5 py-3 rounded-2xl text-black focus:outline-none"
                  name="" id=""
                  placeholder="Mesaj"
                >
                </textarea>
              </div>

              {/* Button */}
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="bg-purple-primary text-white tracking-wide px-10 py-4 rounded-full ~text-sm/lg transition hover:scale-105"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}