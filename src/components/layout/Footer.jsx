import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-green-800 to-teal-700 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* NGO Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Dreams Trust
          </h2>

          <p className="text-gray-300 leading-7">
            Empowering children, youth, women, and communities through
            education, skill development, healthcare, and sustainable
            development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Gallery</li>
            <li>Donate</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-4">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                No.30, Sundharam Street,
                <br />
                Vyasarpadi,
                <br />
                Chennai - 600039
              </span>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt />
              <span>+91 99626 19550</span>
            </div>

            <div className="flex gap-3">
              <FaEnvelope />
              <span>dreams112022@gmail.com</span>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-teal-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-teal-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-teal-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-teal-700 text-center py-5 text-gray-300">
        © {new Date().getFullYear()} Dreams Trust. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;