import React from "react";

type Props = {
  title: string;
  image: string;
  className?: string;
};

const CategoryCard: React.FC<Props> = ({ title, image, className = "" }) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 text-white text-sm md:text-base font-medium">
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
