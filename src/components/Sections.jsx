const Sections = () => {
  return (
    <section className="py-20 px-10 space-y-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Customer Support</h2>
          <p className="text-gray-600">
            We provide the best support for your customers.
          </p>
        </div>
        <div className="h-60 bg-gray-200 rounded"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="h-60 bg-gray-200 rounded"></div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Smart Dashboard</h2>
          <p className="text-gray-600">
            All your data in one place.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Sections;
