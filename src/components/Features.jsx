const Features = () => {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow rounded">
          <h3 className="font-bold mb-2">Fast Setup</h3>
          <p className="text-gray-500">Easy and quick to use tools.</p>
        </div>

        <div className="p-6 shadow rounded">
          <h3 className="font-bold mb-2">Secure</h3>
          <p className="text-gray-500">Your data is protected.</p>
        </div>

        <div className="p-6 shadow rounded">
          <h3 className="font-bold mb-2">Analytics</h3>
          <p className="text-gray-500">Track your performance.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
