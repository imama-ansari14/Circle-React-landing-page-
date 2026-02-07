import sectionTwoImage from "../assets/images/sect-two.png";

export default function SectionTwo() {
  return (
    <section className="w-full py-16 md:py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-[#00bcd4] text-sm font-semibold tracking-wider mb-3 uppercase">
              Our Promise
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tool built for people.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Circle has 100+ integrations with tools you already use and love.
            </p>
            <button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white font-semibold px-9 py-4 rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,188,212,0.3)]">
              Get started free
            </button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={sectionTwoImage}
                alt="Team collaboration"
                className="w-full h-auto block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}