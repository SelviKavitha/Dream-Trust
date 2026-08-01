import { FaGraduationCap, FaHandsHelping, FaLeaf } from "react-icons/fa";
import AboutImg from "../../assets/AboutImg.jpeg"

const About = () => {

  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Quality Education",
      description:
        "Supporting children with education opportunities and learning resources."
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Support",
      description:
        "Empowering women, youth and communities through various initiatives."
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Care",
      description:
        "Promoting sustainability and protecting our environment."
    }
  ];


  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Image */}

          <div>

            <img
              src = {AboutImg}
              alt="About Dreams Trust"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />

          </div>



          {/* Content */}

          <div>


            <span className="text-green-700 font-semibold">
              About Dreams Trust
            </span>


            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">

              Creating Hope,
              <span className="text-green-600">
                {" "}Changing Lives
              </span>

            </h2>



            <p className="text-gray-600 mt-6 leading-8">

              Dreams Trust works towards creating a better society by
              empowering children, youth, women and underprivileged
              communities through education, healthcare, skill development
              and sustainable development programs.

            </p>



            {/* Features */}

            <div className="grid md:grid-cols-3 gap-5 mt-8">


              {features.map((item, index) => (

                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
                >

                  <div className="text-3xl text-green-600 mb-3">
                    {item.icon}
                  </div>


                  <h3 className="font-bold text-gray-800">
                    {item.title}
                  </h3>


                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>


                </div>

              ))}


            </div>



          </div>


        </div>


      </div>


    </section>

  );

};


export default About;