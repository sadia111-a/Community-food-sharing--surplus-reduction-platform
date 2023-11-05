const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co/fQzQhR9/pexels-photo-6646904.webp"
            className="w-3/4  rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/xhj9ZGd/pexels-photo-298217.jpg"
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-green-600">About Us</h1>
          <h1 className="text-5xl font-bold text-orange-950">
            Empowering Communities to Tackle Food Insecurity
          </h1>
          <p className="py-6">
            a passionate community-driven initiative committed to making a
            positive impact on both the environment and our local communities.we
            believe in the power of shared resources and the importance of
            reducing food waste. Our mission is simple but profound: to bridge
            the gap between surplus food and those in need. We're dedicated to
            fostering a culture of generosity and sustainability.
          </p>
          <p className="py-3 ">
            We're on a mission to reduce food waste at its source by connecting
            surplus food from individuals, businesses, and events to individuals
            and organizations who can put it to good use.
          </p>
          <button className="btn btn-primary  border-none bg-amber-100 text-orange-950">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
