import { useParams, Navigate } from "react-router-dom";
import { useGetCoursesStore } from "../../store/armoniaDataStore";
import IntroDetails from "../curs/Intro-Details";

export default function CursDetails() {
  const { id } = useParams();
  const courses = useGetCoursesStore((state) => state.courses);
  
  // Find the course by id - convert string id from URL to number
  const course = courses.find(c => c.id === Number(id));

  // If course not found, show not found page or redirect
  if (!course) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="md:container md:mx-auto px-6 flex flex-col gap-8 mt-[50px] min-h-screen">
      <IntroDetails card={course} />

          <div className="flex flex-col">
            <div className='flex w-fit mb-6 gap-3 bg-green-secondary-rgb/10 items-center py-2 px-2 rounded-lg'>
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <p className="text-sm font-medium text-green-secondary-rgb">ARMONIA Academy</p>
            </div>

            <div className="flex gap-2">
              <img src={course.pin} alt="" className="w-5 aspect-square object-contain" />
              <p className="m-0 text-sm tracking-wider text-[#4D5756]">Bucuresti</p>
            </div>

            <div className={`~text-4xl/5xl mt-2 font-saint ${course.culoareText}`}>
              <p>{course.name}</p>
            </div>

            <div className="text-[#333931] text-sm max-w-64">
              <p>{course.customText}</p>
            </div>

            <div className="flex gap-2 mt-6">
              <div className="relative text-[#E6E6E6]">
                <div className="absolute">
                  <img src="/images/red-line.png" alt="" />
                </div>
                <p className="text-xl font-bold font-epilogue">{course.pretFull}</p>
              </div>
              <div>
                <p className="text-xl font-bold font-epilogue text-green-secondary">{course.pretDiscounted}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex self-end">
            <img src={course.humanIcon} alt="" className="w-7 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
