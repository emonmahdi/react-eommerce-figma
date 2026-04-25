import React from "react";
import CategoryCard from "./ui/CategoryCard";
import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";

export type Category = {
  title: string;
  image: string;
};

const categories: Category[] = [
  {
    title: "Bedroom Furniture",
    image: img1,
  },
  {
    title: "Living Room Furniture",
    image: img2,
  },
  {
    title: "Dining Room Furniture",
    image: img1,
  },
  {
    title: "Sofa Sets",
    image: img2,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Top Categories
        </h2>

        <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
        </p>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Large */}
          <CategoryCard
            title={categories[0].title}
            image={categories[0].image}
            className="h-[300px] md:h-full"
          />

          {/* Middle stacked */}
          <div className="flex flex-col gap-6">
            <CategoryCard
              title={categories[1].title}
              image={categories[1].image}
              className="h-[140px] md:h-[48%]"
            />
            <CategoryCard
              title={categories[2].title}
              image={categories[2].image}
              className="h-[140px] md:h-[48%]"
            />
          </div>

          {/* Right Large */}
          <CategoryCard
            title={categories[3].title}
            image={categories[3].image}
            className="h-[300px] md:h-full"
          />
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 mx-auto hover:bg-gray-800 transition">
            View All
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
