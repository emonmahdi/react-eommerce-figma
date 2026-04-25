// import image from "../assets/table.jpg";

interface ProductCardProps {
  title: string;
  image: string;
  priceOld: string;
  priceNew: string;
  discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  priceOld,
  priceNew,
  discount,
}) => {
  return (
    <div className="bg-white/90 rounded-xl p-3 md:p-4 w-[200px] sm:w-[220px] md:w-[260px] shrink-0">
      <div className="relative h-[120px] md:h-[160px] rounded-lg">
        <img src={image} alt="product" className="h-full w-full object-cover" />
        <span className="absolute top-2 left-2 text-[10px] md:text-xs bg-black text-white px-2 py-1 rounded-full">
          {discount}
        </span>
      </div>

      <h3 className="mt-3 text-xs md:text-sm font-medium text-gray-700 line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center justify-between mt-2">
        <div className="text-[10px] md:text-xs text-gray-500">
          <span className="line-through mr-2">{priceOld}</span>
          <span className="text-black font-semibold">{priceNew}</span>
        </div>
        <button className="text-gray-600 text-lg">+</button>
      </div>
    </div>
  );
};

export default ProductCard;
