import { Helmet } from "react-helmet-async";
import AboutUs from "../components/AboutUs";
import CustomerReview from "../components/CustomerReview";
import FeaturedFood from "../components/FeaturedFood";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fresh Food | Home</title>
      </Helmet>
      <Header></Header>
      <FeaturedFood></FeaturedFood>
      <AboutUs></AboutUs>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
