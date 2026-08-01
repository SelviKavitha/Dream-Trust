import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
           
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Vision & Mission
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Dreams Trust is committed to empowering communities through
            education, healthcare, sustainable development and compassion for
            all living beings.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">
              <FaEye />
            </div>

            <h3 className="text-3xl font-bold text-gray-800">
              Our Vision
            </h3>
          </div>

          <p className="text-gray-600 leading-9 text-lg">
            To build a society where underprivileged children, youth, and women
            can break the cycle of poverty. By securing access to quality
            education, healthcare, and livelihood opportunities, we empower
            every individual—regardless of background—to reach their full
            potential and lead a dignified life.
          </p>
        </div>

        {/* Mission */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">
              <FaBullseye />
            </div>

            <h3 className="text-3xl font-bold text-gray-800">
              Our Mission
            </h3>
          </div>

          <div className="space-y-8 text-gray-600 leading-8 text-lg">

            <div>
              <h4 className="font-bold text-green-700 text-xl mb-2">
                Empowering Underprivileged Individuals
              </h4>

              <p>
                We uplift children, youth, and women through a holistic
                developmental approach. By providing quality education,
                vocational training, and capacity-building, we equip individuals
                to build brighter futures while actively promoting gender
                equality, social inclusion, and human rights.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-green-700 text-xl mb-2">
                Ensuring a Green Environment
              </h4>

              <p>
                We champion environmental conservation and sustainable living.
                Through eco-friendly initiatives, climate advocacy, and
                community education, Dreams Trust works to protect natural
                resources and mitigate the impacts of climate change for future
                generations.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-green-700 text-xl mb-2">
                Caring for Street Animals
              </h4>

              <p>
                We foster a compassionate society that protects vulnerable
                street animals. Through rescue and rehabilitation programs,
                vaccination drives, and community education on responsible pet
                care, we work to alleviate animal suffering and promote
                coexistence.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;