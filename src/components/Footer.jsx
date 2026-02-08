const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10">
      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-2">Powerful</h2>
          <p className="text-gray-400">
            Simple engagement tools for business.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Home</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <p className="text-gray-400">Facebook | Twitter | Instagram</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
