import { ReactNode } from "react";
import { MdOutlineBookmarkAdd, MdOutlineAccessTime } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";

interface Feature {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <MdOutlineBookmarkAdd />,
    title: "Diverse Recipes",
    description: "Explore recipes from around the world.",
  },
  {
    id: 2,
    icon: <MdOutlineAccessTime />,
    title: "Easy to Cook",
    description: "Simple ingredients and step-by-step guides.",
  },
  {
    id: 3,
    icon: <FiHeart />,
    title: "Healthy Options",
    description: "Nutritious choices for a better lifestyle.",
  },
  {
    id: 4,
    icon: <BiWorld />,
    title: "Save Time",
    description: "Quick recipes for your busy schedule.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 max-sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 max-sm:text-2xl max-sm:mb-8">
          Why People Choose Us
        </h2>
        <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-4">
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4 text-2xl text-orange-500">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
