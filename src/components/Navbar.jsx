import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-white">
      {/* Left menu */}
      <ul className="flex gap-6 text-gray-700">
        <li className="cursor-pointer ">Features</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">Resources</li>
      </ul>

      {/* Logo */}
      <img src={logo} alt="logo" className="h-8" />

      {/* Right menu */}
      <div className="flex items-center gap-6">
        <span className="cursor-pointer">Company</span>
        <span className="cursor-pointer">Contact</span>
        <button className="border border-cyan-500 text-cyan-500 px-10 py-1 rounded hover:bg-sky-200 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
