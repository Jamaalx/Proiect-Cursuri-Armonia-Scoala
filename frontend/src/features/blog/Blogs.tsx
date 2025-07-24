import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib/cn";
import { Link } from "react-router-dom";
import { useGetBlogsStore } from "../../store/armoniaDataStore";



const POSTS_PER_PAGE = 4;

export default function Blogs() {
  const blogs = useGetBlogsStore((state) => state.blogs);
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

  const handleNextImage = (postId: string, imagesLength: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [postId]: (prev[postId] ?? 0) + 1 >= imagesLength ? 0 : (prev[postId] ?? 0) + 1,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handlePrevImage = (postId: string, imagesLength: number) => {
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
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row px-4 gap-4 lg:gap-8 mt-4">
        <div className="flex flex-col flex-1 max-w-[800px]">
          <div className="lg:hidden flex flex-col gap-4 mb-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border border-gray-200 bg-white w-full rounded-full overflow-hidden shadow-lg sm:shadow-xl text-sm"
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
                  <div>
                    <img
                      src={currentImage}
                      alt="blog"
                      className="rounded-2xl mb-2 w-full"
                    />
                    {hasMultipleImages && post.photosUrls!.length > 1 && (
                      <div className="flex justify-end gap-2 mb-3">
                        <button
                          onClick={() => handlePrevImage(post.id, post.photosUrls!.length)}
                          className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                        >
                          <img src="/images/left-arrow.png" alt="Previous" className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleNextImage(post.id, post.photosUrls!.length)}
                          className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                        >
                          <img src="/images/right-arrow.png" alt="Next" className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 mb-12">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex gap-2 items-center">
                        <img src="/images/green-calendar.png" alt="" className="w-4 h-4" />
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img src="/images/little-user.png" alt="" className="w-[11px] h-[13px]" />
                        <p className="text-xs sm:text-sm text-gray-700">Autor: {post.author}</p>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-blue-text-primary mb-2">{post.title}</h3>

                    <Link to={`/blog/${post.id}`}>
                      <div className="flex items-center justify-between my-4">
                        <div
                          className={cn(
                            'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97] bg-purple-primary',
                          )}
                        >
                          <span className="text-sm font-sora">Vezi Mai Mult</span>
                          <div className={cn("p-4 rounded-full bg-purple-secondary")}>
                            <FiArrowRight className="text-xl" />
                          </div>
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>
              );
            })}
          </div>            <div className="flex justify-center mt-6 gap-1 sm:gap-2 items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 sm:px-3 py-1 rounded border ${currentPage === 1
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
        <div className="hidden lg:flex flex-col gap-6 w-[300px]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-gray-200 bg-white w-full rounded-full overflow-hidden shadow text-sm"
          >
            <input
              type="text"
              placeholder="Pe cine doresti sa cauti?"
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 pl-4 lg:px-5 py-3 text-black
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
          {blogs
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5)
            .map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="flex gap-3 group hover:opacity-80 transition-opacity">
                <img 
                  src={post.photoUrl} 
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg" 
                />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="/images/green-calendar.png" alt="" className="w-4 h-4" />
                    <p className="text-sm text-gray-600">{post.date}</p>
                  </div>
                  <p className="max-w-56 text-blue-text-primary font-semibold text-[13px] group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
            POPULAR TAG:
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-6 py-2">Balance</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-6 py-2">Coaching</div>
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