import Navbar from "../../components/common/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import PopularRecipes from "../../components/home/PopularRecipes/PopularRecipes";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import FeatureSection from "../../components/home/FeatureSection/FeatureSection";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import Footer from "../../components/common/Footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularRecipes />
      <WhyChooseUs />
      <FeatureSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
