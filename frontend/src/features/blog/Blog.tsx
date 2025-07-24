import { useGetBlogsStore } from '../../store/armoniaDataStore';
import { useParams } from 'react-router-dom';

export default function Blog() {
  const { id } = useParams();
  const blogs = useGetBlogsStore((state) => state.blogs);
  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
    return <div className="text-center mt-12">Blog not found</div>;
  }

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
          {/* Main Image */}
          <img className="w-full" src={blog.photoUrl} alt={blog.title} />
          
          {/* Date and Author */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/green-calendar.png" alt="" />
              <p className="text-[#888888] font-bold">{blog.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/comment.png" alt="" />
              <p className="text-[#888888] font-bold">Autor: {blog.author}</p>
            </div>
          </div>

          {/* Title and Content */}
          <h1 className="text-[#202124] font-semibold text-3xl">{blog.descriere.title}</h1>
          <p className="text-[17px]">{blog.descriere.continut1}</p>
          
          {/* Subtitlu and Image */}
          <h2 className="text-[#202124] font-semibold text-2xl">{blog.descriere.subtitlu1}</h2>
          <div className="flex justify-center flex-col lg:flex-row gap-4">
            <img src={blog.descriere.pozaDescriere} alt={blog.title} className="w-full" />
          </div>
          <p className="text-[17px]">{blog.descriere.continut2}</p>

          {/* Categories and Keywords */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between mt-8">
            <div className="flex gap-3 md:items-center flex-wrap">
              <p className="text-blue-text-primary text-[17px] font-bold">Posted in:</p>
              <div className="flex flex-wrap gap-2">
                <p className="bg-gray-100 px-4 py-2 rounded-lg">{blog.categoria}</p>
                {blog.keywords.map((keyword, index) => (
                  <p key={index} className="bg-gray-100 px-4 py-2 rounded-lg">{keyword}</p>
                ))}
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-blue-text-primary text-[17px] font-bold mr-4">Share:</p>
              <img src="/images/facebook-green.png" alt="facebook" className="cursor-pointer hover:scale-110 transition-transform" />
              <img src="/images/instagram-green.png" alt="instagram" className="cursor-pointer hover:scale-110 transition-transform" />
              <img src="/images/twitter-green.png" alt="twitter" className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Comment Form */}
          <div className="p-4 md:p-16 lg:mx-40 flex flex-col gap-4 shadow-xl rounded-xl mt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-text-primary font-bold">Ia legătura cu noi.</h2>
            <p className="text-[17px]">
              Adresa ta de email nu va fi publicată. Câmpurile marcate cu * sunt obligatorii.
            </p>

            <form className="flex flex-col gap-6">
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
                  placeholder="Subiect"
                  className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
                />
              </div>

              <div className="flex h-60">
                <textarea
                  className="flex-1 shadow-lg px-5 py-3 rounded-2xl text-black focus:outline-none"
                  placeholder="Mesaj"
                  name="message"
                  id="message"
                ></textarea>
              </div>

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