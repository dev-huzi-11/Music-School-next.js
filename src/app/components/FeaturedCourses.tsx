"use client";
import courseData from "./data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface CourseType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourse = courseData.courses.filter(
    (courses: CourseType) => courses.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-base text-xl text-green-700 font-semibold">
          FEATURED COURSES
        </h2>
        <p className="text-center font-bold text-white text-5xl tracking-tighter">
          Learn with the Best
        </p>
      </div>
      <div className="mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourse.map((course: CourseType) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-3xl max-w-sm h-full overflow-hidden bg-white dark:bg-zinc-900">
                <div className="flex flex-col items-center text-center flex-grow p-4 sm:p-6">
                  <Image
                    src={course.image}
                    alt="Picture of the author"
                    width={300}
                    height={300} 
                  />
                  <h2 
                  className="text-lg sm:text-xl font-semibold mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </h2>
                  <p
                  className="text-base text-neutral-500 dark:text-neutral-400 flex-grow"
                  >
                    {course.description}
                  </p>
                  <Link className="mt-4 font-semibold text-md bg-neutral-300 text-neutral-900 px-6 py-1.5 rounded-lg" href={`/course/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="py-3 px-5 text-base font-semibold rounded-md bg-gray-200 text-black border border-neutral-200 hover:bg-gray-900 hover:text-white transition duration-200"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
