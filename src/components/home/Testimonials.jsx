import { FaQuoteLeft, FaStar } from "react-icons/fa";


const Testimonials = () => {


  const testimonials = [

    {
      name: "Priya Kumar",
      role: "Parent",
      image: "/images/person1.jpg",
      message:
        "Dreams Trust has helped my child improve education and confidence. Their support has created a positive change in our lives."
    },

    {
      name: "Arun Raj",
      role: "Volunteer",
      image: "/images/person2.jpg",
      message:
        "Being part of Dreams Trust gives me an opportunity to serve society and make a meaningful impact."
    },

    {
      name: "Meena Devi",
      role: "Community Member",
      image: "/images/person3.jpg",
      message:
        "The programs and support provided by the trust have brought hope and new opportunities for our community."
    }

  ];



  return (

    <section className="py-20 bg-green-50">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-14">


          <span className="text-green-600 font-semibold">
            Testimonials
          </span>


          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">

            What People
            <span className="text-green-600">
              {" "}Say About Us
            </span>

          </h2>


          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">

            Hear from our beneficiaries, volunteers and supporters
            about their experiences with Dreams Trust.

          </p>


        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {testimonials.map((item, index) => (


            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >


              {/* Quote Icon */}

              <FaQuoteLeft className="text-4xl text-green-600 mb-5" />



              <p className="text-gray-600 leading-7">

                {item.message}

              </p>



              {/* Rating */}

              <div className="flex gap-1 mt-5 text-yellow-400">

                {[1,2,3,4,5].map((star) => (

                  <FaStar key={star}/>

                ))}

              </div>



              {/* User */}

              <div className="flex items-center gap-4 mt-6">


                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  "
                />


                <div>

                  <h3 className="font-bold text-gray-800">

                    {item.name}

                  </h3>


                  <p className="text-sm text-gray-500">

                    {item.role}

                  </p>


                </div>


              </div>



            </div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default Testimonials;