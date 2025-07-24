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
    </div>
  );
}