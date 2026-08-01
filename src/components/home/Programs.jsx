import {
  FaBookOpen,
  FaLaptopCode,
  //FaTree,
  FaHandsHelping,
  FaFemale
} from "react-icons/fa";
import WomenDayImg from "../../assets/WomensDay.jpeg";
import AnnualDay from "../../assets/Annual-Day.jpeg";
import SkillTraining from "../../assets/Skill-training.jpeg";
import LearningCentre from "../../assets/Tuition-center.jpeg";
import ElderlyCare from "../../assets/Elderly-care.jpeg";
import Community from "../../assets/community.jpeg";

const Programs = () => {

const programs = [

  {
    image: LearningCentre,
    icon: <FaBookOpen />,
    title: "Education Program – Evening Learning Centre",
    description:
      "DREAMS Trust operates a Regular Learning Centre in Vyasarpadi to provide free educational support for children from poor and vulnerable families. The centre offers daily coaching in Mathematics, English, Science, and other subjects under the guidance of qualified teachers. Students receive individual attention, homework assistance, examination preparation, and regular academic assessments to improve their learning outcomes. Every year, educational materials such as school bags, notebooks, stationery, and learning essentials are distributed to encourage continued education. The Trust also conducts the 'Every Child an Innovator' weekend initiative, where children participate in science experiments, creative activities, leadership sessions, and problem-solving exercises that develop confidence, creativity, teamwork, and critical thinking. Through this holistic approach, the program empowers children with knowledge, values, and life skills for a brighter future."
  },

  {
    image: SkillTraining,
    icon: <FaLaptopCode />,
    title: "Skill Training Programs",
    description:
      "DREAMS Trust conducts monthly Skill Training Programs in Vyasarpadi to empower women and youth with practical skills that improve livelihood opportunities and financial independence. The training includes tailoring, masala making, leadership development, entrepreneurship awareness, communication skills, and personality development. Participants receive hands-on training from experienced instructors, enabling them to start small businesses or secure employment. Leadership sessions build confidence, decision-making, teamwork, and self-reliance while encouraging active community participation. Over the past two years, the program has directly benefited more than 320 participants and indirectly impacted over 780 beneficiaries by strengthening family incomes and promoting sustainable economic development within the community."
  },

  {
    image: Community,
    icon: <FaHandsHelping />,
    title: "Community Development Program",
    description:
      "DREAMS Trust implements Community Development Programs in Vyasarpadi to improve the quality of life of vulnerable families through sustainable initiatives. The Trust helps residents access government welfare schemes, organizes regular community meetings, and works closely with local authorities to address issues such as drinking water, electricity, sanitation, road safety, and street lighting. Awareness campaigns, cleanliness drives, leadership training, health education, and capacity-building workshops encourage active public participation and social responsibility. By empowering residents to identify local challenges and participate in community solutions, the program promotes inclusive development, stronger community relationships, and long-term social progress."
  },

  {
    image: AnnualDay,
    icon: <FaHandsHelping />,
    title: "Annual Day Celebration",
    description:
      "DREAMS Trust celebrates its Annual Day every January to recognize the achievements of its beneficiaries and strengthen community relationships. More than 200 participants, including children, women, parents, senior citizens, volunteers, and community members, come together to celebrate the Trust's impact. The event features cultural performances, dance, drama, music, student recognition, beneficiary success stories, interactive sessions, and family participation. Outstanding students and trainees receive awards for their dedication and achievements. The celebration concludes with a feedback session, group photographs, and a community dinner, creating an atmosphere of unity, appreciation, encouragement, and shared success."
  },

  {
    image: WomenDayImg,
    icon: <FaFemale />,
    title: "Women's Day Celebration",
    description:
      "DREAMS Trust organizes Women's Day Celebrations in Vyasarpadi to honor the achievements, strength, and contributions of women within the community. More than 100 women participate in cultural programs, dance performances, singing, drama, talent competitions, and awareness sessions that promote confidence, leadership, gender equality, and women's empowerment. The event provides a platform for women to share experiences, build friendships, and strengthen community relationships. Interactive activities, feedback sessions, and group photographs create memorable experiences while encouraging participants to become confident leaders who contribute positively to their families and society."
  },

  {
    image: ElderlyCare,
    icon: <FaHandsHelping />,
    title: "Elderly Care Program",
    description:
      "DREAMS Trust is committed to improving the quality of life of elderly people living in poor and vulnerable communities in Vyasarpadi. The Elderly Care Program provides dry ration kits every six months, nutritious food distribution during festivals and family celebrations, emotional support through volunteer visits, and regular monitoring of beneficiaries' well-being. Priority is given to widows, destitute senior citizens, and elderly people living alone. The program encourages families and volunteers to celebrate special occasions by sharing meals and essential supplies with senior citizens, promoting dignity, compassion, social inclusion, and a stronger sense of belonging within the community."
  }

];

  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Programs That
            <span className="text-green-600"> Create Change</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Our initiatives focus on education, empowerment,
            environment and sustainable community development.
          </p>

        </div>

        {/* Program Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mb-4">
                  {program.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {program.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7 text-justify">
                  {program.description}
                </p>

                {/* <button className="mt-5 text-green-600 font-semibold hover:text-green-800">
                  Learn More →
                </button> */}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Programs;