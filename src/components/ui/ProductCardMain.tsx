import { FiPlus } from "react-icons/fi";

interface ProductCardProps {
  title: string;
  oldPrice: number;
  newPrice: number;
  discount: string;
  image: string;
}

const ProductCardMain = ({
  title,
  oldPrice,
  newPrice,
  discount,
  image,
}: ProductCardProps) => {
  return (
    <div
      className="
        w-[160px] sm:w-[200px] md:w-[240px] lg:w-[286px]
        h-[300px] sm:h-[340px] md:h-[380px] lg:h-[432px]
        flex flex-col group
      "
    >
      {/* Image Section */}
      <div className="relative flex-[3] rounded-xl overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 text-[10px] md:text-xs bg-black/80 text-white px-2 py-1 rounded-full">
          {discount}
        </span>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-2.5">
        {/* Title */}
        <h3 className="text-[11px] sm:text-xs md:text-sm text-gray-700 line-clamp-2 leading-tight pt-2">
          {title}
        </h3>

        {/* Price + Action */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="text-[10px] md:text-xs text-gray-500 leading-none">
            <span className="line-through mr-1">${oldPrice.toFixed(2)}</span>
            <span className="text-black font-semibold">
              ${newPrice.toFixed(2)}
            </span>
          </div>

          {/* Button */}
          <button className="w-6 h-6 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-100 transition">
            <FiPlus className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardMain;
