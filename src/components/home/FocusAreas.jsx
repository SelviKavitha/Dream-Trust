import {
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
  FaLeaf,
  FaBriefcase
} from "react-icons/fa";


const FocusAreas = () => {


  const focusAreas = [

    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "Providing quality education, learning support and opportunities for underprivileged children."
    },

    {
      icon: <FaHeartbeat />,
      title: "Healthcare",
      description:
        "Creating awareness and supporting healthcare needs for communities."
    },

    {
      icon: <FaUsers />,
      title: "Women & Youth Empowerment",
      description:
        "Building skills, confidence and opportunities for women and young people."
    },

    {
      icon: <FaLeaf />,
      title: "Environment",
      description:
        "Promoting environmental conservation and sustainable practices."
    },

    {
      icon: <FaBriefcase />,
      title: "Livelihood Development",
      description:
        "Supporting skill development and sustainable livelihood opportunities."
    }

  ];



  return (

    <section className="py-20 bg-white">


      <div className="max-w-7xl mx-auto px-6">


        {/* Title */}

        <div className="text-center mb-14">


          <span className="text-green-600 font-semibold">
            Our Focus Areas
          </span>


          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">

            Areas Where We
            <span className="text-green-600">
              {" "}Create Impact
            </span>

          </h2>


          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">

            We work towards creating positive change through education,
            healthcare, empowerment and environmental initiatives.

          </p>


        </div>



        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">


          {focusAreas.map((item, index) => (


            <div
              key={index}
              className="
              bg-gray-50
              rounded-3xl
              p-6
              text-center
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >


              <div className="
              w-16 h-16
              mx-auto
              flex
              items-center
              justify-center
              rounded-full
              bg-green-100
              text-green-600
              text-3xl
              mb-5
              ">

                {item.icon}

              </div>



              <h3 className="text-lg font-bold text-gray-800">

                {item.title}

              </h3>



              <p className="text-sm text-gray-600 mt-3 leading-6">

                {item.description}

              </p>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default FocusAreas;