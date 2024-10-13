import { footer } from "framer-motion/client";

function Footer() {
  return (
    <footer className="bg-black text-gray-500 p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 mb-6">
        <div>
          <h2 className="font-bold text-white text-xl mb-6">About Us</h2>
          <p>
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture the talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-white text-xl mb-6">Quick Links</h2>
          <ul>
            <li>
              <a className="hover:text-white transition duration-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white transition duration-300" href="#">
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition duration-300"
                href="/courses"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition duration-300"
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white text-xl mb-6">Follow Us</h2>
          <a
            className="hover:text-white transition duration-300 pr-3"
            href="https://www.linkedin.com/in/huzaifa-nazeer-b969632b7/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="hover:text-white transition duration-300 pr-3"
            href="https://www.instagram.com/its_huzi_4u/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="hover:text-white transition duration-300"
            href="https://github.com/dev-huzi-11"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div>
          <h2 className="font-bold text-white text-xl mb-6">Contact Us</h2>
          <p>Karachi, Pakistan</p>
          <p>Karachi 74200</p>
          <p>Email: info@musicschool.com</p>
          <p>03122785867</p>
        </div>
      </div>
      <p className="text-center pt-4">&copy; 2024 Music School. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
