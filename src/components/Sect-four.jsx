import sectionFourImge from "../assets/images/sect-four.png";

const SectFour = () => {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex border-b border-gray-200 mb-12">
          <button className="px-6 py-3 text-cyan-500 border-b-2 border-cyan-500 font-medium flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Create
          </button>
          <button className="px-6 py-3 text-gray-400 font-medium flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Distribute
          </button>
          <button className="px-6 py-3 text-gray-400 font-medium flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Collect
          </button>
          <button className="px-6 py-3 text-gray-400 font-medium flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Analyze
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Create</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Advanced research software
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ask the right questions and get the answers you need with the most
              secure and collaborative survey platform on the market featuring
              powerful logic, sophisticated analytics, and built-in automation
              and integration.
            </p>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-6 py-3 rounded transition-colors">
              Get started for free
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={sectionFourImge}
              alt="Person working on laptop"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectFour;
