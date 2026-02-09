
import sectionFiveImge from "../assets/images/sect-five.png";
    
const SectFive = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Looking for a <span className="font-bold">solution</span>
            </h2>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              for your business?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Check out SoGoSurvey's enterprise feedback and experience management platform.
            </p>
            <div className="flex gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-6 py-3 rounded transition-colors">
                Learn more
              </button>
              <button className="bg-white hover:bg-gray-50 text-cyan-500 font-medium px-6 py-3 rounded border-2 border-cyan-400 transition-colors">
                Schedule a consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={sectionFiveImge}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectFive;