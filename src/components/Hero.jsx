import heroImage from "../assets/images/hero-img.png";
import brandsImage from "../assets/images/brand-logo.png";

export default function HeroSection() {
  return (
    <section className="w-full py-16 px-5 bg-gradient-to-b from-[#f8fbfd] to-white">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Hero Text */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            A powerful online engagement tool that's intuitive and simple to
            use.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-[600px] mx-auto">
            With stellar one-click reports and unmatched support, see how Circle
            will make a difference in your business.
          </p>
          <button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white font-semibold px-9 py-4 rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,188,212,0.3)]">
            Get started free →
          </button>
        </div>

        {/* ================= IMAGE  ================= */}
        <div className="max-w-[900px] mx-auto relative">
          <div className="relative w-full overflow-hidden rounded-lg">
            <img
              src={heroImage}
              alt="Team collaboration"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      {/* ================= BRANDS SECTION WITH ANIMATION ================= */}
      <div className="max-w-[1200px] mx-auto mt-20 text-center overflow-hidden">
        <p className="text-[#00bcd4] text-sm font-semibold tracking-wider mb-2.5 uppercase">
          OUR CUSTOMERS
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          Trusted by <span className="font-bold">100,000+ customers</span> in
          90+ countries
        </h2>

        {/* Animated Logo Slider */}
        <div className="w-full overflow-hidden relative py-5 logo-slider-mask">
          <div className="flex w-fit animate-scroll hover:pause-animation">
            {/* First set of logos */}
            <img
              src={brandsImage}
              alt="Brand logos"
              className="h-12 md:h-14 lg:h-16 w-auto flex-shrink-0"
            />
            {/* Duplicate for seamless loop */}
            <img
              src={brandsImage}
              alt="Brand logos"
              className="h-12 md:h-14 lg:h-16 w-auto flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
