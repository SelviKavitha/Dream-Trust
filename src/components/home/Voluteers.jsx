
import { FaHandsHelping, FaUsers, FaHeart, FaArrowRight } from "react-icons/fa";

const opportunities = [
  {
    id: 1,
    title: "Education Volunteer",
    description:
      "Support children through tutoring, mentoring, and educational activities.",
    icon: <FaUsers className="text-4xl text-emerald-600" />,
  },
  {
    id: 2,
    title: "Healthcare Volunteer",
    description:
      "Assist in medical camps, health awareness programs, and community outreach.",
    icon: <FaHeart className="text-4xl text-red-500" />,
  },
  {
    id: 3,
    title: "Community Volunteer",
    description:
      "Help organize awareness campaigns, environmental drives, and social initiatives.",
    icon: <FaHandsHelping className="text-4xl text-orange-500" />,
  },
];

const Volunteers = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-800 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">
            Become a Volunteer
          </h1>

          <p className="mt-5 text-lg text-emerald-100 max-w-3xl mx-auto">
            Join our mission to empower underprivileged children, women, and
            communities. Together, we can create lasting change and build a
            brighter future.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Volunteer Opportunities
          </h2>

          <p className="text-gray-600 mt-4">
            Choose how you'd like to make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >
              {item.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white">
            Make an Impact Today
          </h2>

          <p className="text-emerald-100 mt-5">
            Every volunteer brings hope and positive change to someone's life.
            Your time and skills can help transform communities.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-white font-semibold inline-flex items-center gap-3 transition">
            Join Our Team
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;