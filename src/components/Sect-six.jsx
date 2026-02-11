import sectSixImg1 from "../assets/images/sect-six1.png";
import SectSixImg2 from "../assets/images/sect-six2.png";
import SectSixImg3 from "../assets/images/sect-six3.png";

const SectSix = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      title: "Excepteur sint occaecat cupidatat non proident",
      excerpt:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequatur magni dolores eos",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop",
      title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      excerpt:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      description:
        "Nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt:
        "Couptatem accusantium doloremque laudantium, totam rem aperiam eaque.",
      description:
        "Aliqua ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-cyan-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-500 text-sm font-semibold tracking-wide uppercase mb-4">
            RESOURCES
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="font-bold">Stay</span> in the know
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {post.description}
                </p>
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-6 py-2 rounded transition-colors text-sm">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectSix;
