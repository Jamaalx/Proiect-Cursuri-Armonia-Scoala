import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib/cn";
import { Link } from "react-router-dom";

// export type BlogPost = {
//   id: number;
//   photoUrl: string;
//   photosUrls?: { photo: string; }[]; // câmp opțional
//   title: string;
//   date: string;
//   author: string;
//   categoria: string;
//   keywords: string[];
//   descriere: {
//   title: string;
//   continut1: string;
//   subtitlu1: string;
//   pozaDescriere: string;
//   continut2?: string;
// };
// };

const blogs = [
  {
    id: 1,
    photoUrl: "/images/blog-3.png",
    title: "X3 Our First Mockup",
    date: "Aprilie 21, 2025",
    author: "Wiliam",
    descriere: {
      title: "",
      continut1: "",
      subtitlu1: "",
      pozaDescriere: "/images/blog-3.png",
      continut2: "",
    }
  },
  {
    id: 2,
    photoUrl: "/images/blog-3.png",
    photosUrls: [
      { photo: "/images/blog-1.png" },
      { photo: "/images/blog-2.png" },
      { photo: "/images/blog-3.png" },
    ],
    title: "Test Search",
    date: "Aprilie 21, 2025",
    author: "Carol",
    descriere: "",
  },

  {
    id: 3,
    photoUrl: "/images/blog-3.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Cajol",
    descriere: "",
  },

  {
    id: 4,
    photoUrl: "/images/blog-3.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Henri",
    descriere: "",
  },

  {
    id: 5,
    photoUrl: "/images/blog-2.png",
    title: "X3 Our First Mockup",
    date: "Aprilie 21, 2025",
    author: "Altair",
    descriere: "",
  },

  {
    id: 6,
    photoUrl: "/images/blog-1.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 7,
    photoUrl: "/images/blog-1.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 8,
    photoUrl: "/images/blog-2.png",
    title: "X3 Our First Mockup",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 9,
    photoUrl: "/images/blog-3.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 10,
    photoUrl: "/images/blog-2.png",
    title: "Test Search 1",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 11,
    photoUrl: "/images/blog-2.png",
    title: "X3 Our First Mockup",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 12,
    photoUrl: "/images/blog-3.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 13,
    photoUrl: "/images/blog-1.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 14,
    photoUrl: "/images/blog-2.png",
    title: "X3 Our First Mockup",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },

  {
    id: 15,
    photoUrl: "/images/blog-1.png",
    title: "Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis",
    date: "Aprilie 21, 2025",
    author: "Alamgir Chowdhuri"
  },
];

const POSTS_PER_PAGE = 4;

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = searchTerm
    ? blogs.filter((post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm)
    )
    : blogs;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const [imageIndices, setImageIndices] = useState<{ [postId: string]: number; }>({});

  const handleNextImage = (postId: number, imagesLength: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [postId]: (prev[postId] ?? 0) + 1 >= imagesLength ? 0 : (prev[postId] ?? 0) + 1,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handlePrevImage = (postId: number, imagesLength: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [postId]: (prev[postId] ?? 0) - 1 < 0 ? imagesLength - 1 : (prev[postId] ?? 0) - 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // opțional
  };
  return (
    <div>
      <div className="absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-40 hidden lg:block">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[500px] ">
        <img src="/images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[1200px] ">
        <img src="/images/green-right-gear.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex mx-6 gap-20 mt-10">
        <div className="flex flex-col flex-1">
          <div className="lg:hidden flex flex-col gap-5 mb-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border border-gray-200 bg-white w-full rounded-full overflow-hidden shadow-xl text-sm"
            >
              <input
                type="text"
                placeholder="Pe cine doresti sa cauti?"
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-1 pl-4 lg:px-6 py-2 text-black
                focus:outline-none placeholder:text-gray-300 placeholder:text-base text-lg"
              />
              <button
                type="submit"
              >
                <img src="/images/search-black.png" alt="Search" className="w-10 h-10 mr-4" />
              </button>
            </form>
            <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
              RECENT POST
            </p>
          </div>

          <div className="">
            {selectedPosts.map((post) => {
              const hasMultipleImages = Array.isArray(post.photosUrls) && post.photosUrls.length > 0;
              const currentImageIndex = imageIndices[post.id] ?? 0;
              const currentImage = hasMultipleImages
                ? post.photosUrls![currentImageIndex].photo
                : post.photoUrl;

              return (
                <div key={post.id}>
                  <div className="relative">
                    <img
                      src={currentImage}
                      alt="blog"
                      className="rounded-3xl mb-3 w-full"
                    />
                    {hasMultipleImages && post.photosUrls!.length > 1 && (
                      <div className="absolute bottom-0 left-0 mx-2 right-0 flex justify-between items-center transform -translate-y-1/2">
                        <button
                          onClick={() => handlePrevImage(post.id, post.photosUrls!.length)}
                          className="bg-white text-white px-2 py-1 rounded hover:bg-opacity-70"
                        >
                          <img src="/images/left-arrow.png" alt="" className="~p-1/4" />
                        </button>
                        <button
                          onClick={() => handleNextImage(post.id, post.photosUrls!.length)}
                          className="bg-white text-white px-2 py-1 rounded hover:bg-opacity-70"
                        >
                          <img src="/images/right-arrow.png" alt="" className="~p-1/4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 mb-16">
                    <div className="flex gap-4">
                      <div className="flex gap-2 items-center">
                        <img src="/images/green-calendar.png" alt="" />
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img src="/images/little-user.png" alt="" className="w-[11px] h-[13px]" />
                        <p className="text-sm text-gray-700">Autor: {post.author}</p>
                      </div>
                    </div>
                    <h3 className="~text-xl/3xl font-semibold text-blue-text-primary mb-2">{post.title}</h3>
                    <div className="flex items-center justify-between my-6">
                      <div
                        className={cn(
                          'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97] bg-purple-primary',
                        )}
                      >
                        <Link to={"/blog"}>
                          <span className="text-sm font-sora">Vezi Mai Mult</span>
                        </Link>
                        <div className={cn("p-4 rounded-full bg-purple-secondary")}>
                          <FiArrowRight className="text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="flex justify-center mt-6 gap-2 items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded border ${currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-purple-600 border-purple-600 hover:bg-purple-50"
                }`}
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-8 h-8 rounded-full border font-medium ${currentPage === index + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 hover:bg-purple-100"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded border ${currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-purple-600 border-purple-600 hover:bg-purple-50"
                }`}
            >
              →
            </button>
          </div>
        </div>
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col gap-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-gray-200 bg-white md:w-full max-w-lg rounded-full overflow-hidden shadow-xl text-sm"
          >
            <input
              type="text"
              placeholder="Pe cine doresti sa cauti?"
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 pl-4 lg:px-6 py-4 text-black
                focus:outline-none placeholder:text-gray-300 placeholder:text-base text-lg"
            />
            <button
              type="submit"
            >
              <img src="/images/search-black.png" alt="Search" className="w-10 h-10 mr-4" />
            </button>
          </form>
          <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
            RECENT POST dadw
          </p>
          <div className="gap-4">
            <img src="/images/recent-1.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="/images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/images/recent-2.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="/images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/images/recent-3.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="/images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/images/recent-4.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="/images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/images/recent-5.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="/images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
            POPULAR TAG:
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Balance</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Coaching</div>
            </div>
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Motivation</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Courses</div>
            </div>
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Life Guide</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Strategy</div>
            </div>
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Education</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Coaching</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container flex mt-10 relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black">
        <div className="py-5 ~px-2/10 flex justify-center md:block">
          <img src="/images/intrebare-black.png" alt="" className="w-80 h-20 sm:hidden" />
          <img src="/images/intrebare-black.png" alt="" className="hidden sm:block" />
        </div>
        <div className="flex flex-col pr-4 items-center md:items-start text-center md:text-start gap-2 py-5 max-w-4xl">
          <div className="font-saint ~text-2xl/3xl">
            <p>Ai nevoie de ajutor?</p>
          </div>
          <div>
            <p>Programează o întâlnire cu un consultant Armonia Academy care te va ajuta pas cu pas pentru o
              alegere corectă a noului tău drum în carieră.</p>
          </div>
          <div className="btn-click-effect mt-2 cursor-pointer select-none">
            <span className="bg-white rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};