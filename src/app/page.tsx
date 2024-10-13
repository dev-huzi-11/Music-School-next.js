import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicTestimonialCards from "./components/TestimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses /> 
      <WhyChooseUs />
      <MusicTestimonialCards />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
