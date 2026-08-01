import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us to learn more
            about our programs, volunteer opportunities, or partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-emerald-600 mt-1" />

              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  Dreams Trust NGO,
                  Chennai, Tamil Nadu,
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-emerald-600 mt-1" />

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-emerald-600 mt-1" />

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  info@dreamstrust.org
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-2xl text-emerald-600 mt-1" />

              <div>
                <h3 className="font-semibold text-lg">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;