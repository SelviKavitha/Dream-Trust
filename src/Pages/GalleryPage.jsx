import Education from "../assets/Education.jpeg";
import ChildrenActivity from "../assets/ChildrenActivity.jpeg";
import FoodDistribution from "../assets/Food-Distribution.jpeg";
import SkillTraining from "../assets/Skill-training.jpeg";
import Voluteer from "../assets/Voluteer.jpeg";
import Community from "../assets/community.jpeg";
import CapacityBuilding from "../assets/Capacity-building.jpeg";
import ElderlyCare from "../assets/Elderly-care.jpeg";

const galleryImages = [
  {
    id: 1,
    image: Education,
    title: "Education Program",
  },
  {
    id: 2,
    image: ChildrenActivity,
    title: "Children's Activities",
  },
  {
    id: 3,
    image: CapacityBuilding,
    title: "Capacity Building Training",
  },
  {
    id: 4,
    image: FoodDistribution,
    title: "Food Distribution",
  },
{
  id: 5,
  image: SkillTraining,
  title: "Women's Empowerment",
},
  {
    id: 6,
    image: ElderlyCare,
    title: "Elderly Care",
  },
  {
    id: 7,
    image: Community,
    title: "Community Support",
  },
  {
    id: 8,
    image: Voluteer,
    title: "Volunteer Program",
  },
];

const GalleryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-18">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-800 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Gallery
          </h1>

          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Every picture reflects hope, compassion, and the positive impact
            created through our initiatives for children, women, youth, and
            communities.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;