import AboutUs from "../components/AboutUs";
import CustomerReview from "../components/CustomerReview";
import FeaturedFood from "../components/FeaturedFood";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <FeaturedFood></FeaturedFood>
      <AboutUs></AboutUs>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
