import { FaUsers, FaGraduationCap, FaHandHoldingHeart, FaLeaf } from "react-icons/fa";

const Impact = () => {

  const impactData = [
    {
      icon: <FaUsers />,
      number: "800+",
      title: "Lives Impacted",
      description: "Helping communities through various social initiatives."
    },
     {
      icon: <FaHandHoldingHeart />,
      number: "250+",
      title: "Women Beneficiaries",
      description: ""
    },
    {
      icon: <FaGraduationCap />,
      number: "250+",
      title: "Students Supported",
      description: "Providing quality education and learning opportunities."
    },
   
    {
      icon: <FaLeaf />,
      number: "100+",
      title: "Elderly Care",
      description:
        "Providing groceries, food, medical assistance, and essential care for senior citizens."
    }
  ];


  return (

    <section className="py-20 bg-green-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">

            Making A Real
            <span className="text-green-600">
              {" "}Difference
            </span>

          </h2>


          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">

            Together with our supporters and volunteers,
            we create meaningful changes in communities.

          </p>

        </div>



        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {impactData.map((item, index) => (

            <div
              key={index}
              className="
              bg-white 
              rounded-3xl 
              p-8 
              text-center
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="text-4xl text-green-600 flex justify-center mb-5">
                {item.icon}
              </div>


              <h3 className="text-4xl font-bold text-gray-800">
                {item.number}
              </h3>


              <h4 className="text-xl font-semibold mt-3 text-gray-700">
                {item.title}
              </h4>


              <p className="text-gray-500 mt-3">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>

  );

};


export default Impact;