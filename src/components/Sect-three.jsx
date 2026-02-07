// Import your award images
import award1 from "../assets/images/award-1.png";
import award2 from "../assets/images/award-2.png";
import award3 from "../assets/images/award-3.png";
import award4 from "../assets/images/award-4.png";
import award5 from "../assets/images/award-5.png";
import award6 from "../assets/images/award-6.png";

export default function SectionThree() {
  const awards = [
    {
      id: 1,
      image: award1,
      title: "Market leader across",
      subtitle: "18 categories",
      bgColor: "bg-[#fef5f5]"
    },
    {
      id: 2,
      image: award2,
      title: "Most loved SaaS tool",
      subtitle: "in 2021",
      bgColor: "bg-[#fef5ff]"
    },
    {
      id: 3,
      image: award3,
      title: "Category leader in",
      subtitle: "2022",
      bgColor: "bg-[#f0f9ff]"
    },
    {
      id: 4,
      image: award4,
      title: "Most recommended",
      subtitle: "tool in 2021",
      bgColor: "bg-[#f5f3ff]"
    },
    {
      id: 5,
      image: award5,
      title: "Champion in survey",
      subtitle: "tool 2022",
      bgColor: "bg-[#fffef0]"
    },
    {
      id: 6,
      image: award6,
      title: "Top performer spring",
      subtitle: "2021",
      bgColor: "bg-[#fff5f0]"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#00bcd4] text-sm font-semibold tracking-wider mb-3 uppercase">
            AWARDS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            An award winning platform, <span className="text-gray-900">loved by customers.</span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`${award.bgColor} rounded-lg p-8 md:p-10 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg`}
            >
              {/* Award Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
              
              {/* Award Title */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                {award.title}
              </h3>
              
              {/* Award Subtitle */}
              <p className="text-base md:text-lg font-semibold text-gray-900">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}