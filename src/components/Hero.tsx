import IconButton from "./ui/IconButton";
import ProductCard from "./ProductCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import productImg from "../assets/table.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Text */}
      <div className="flex flex-col items-center text-center text-white mt-16">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug max-w-[800px] p-4">
          Crafting Comfort, Redefining Spaces.
          <br />
          Your Home, Your Signature Style!
        </h1>

        <p className="mt-4 text-sm text-gray-200 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis
          pulvinar.
        </p>
      </div>

      {/* Product Slider */}
      <div className="flex items-center justify-center gap-6 mt-16">
        <IconButton>
          <FiChevronLeft className="text-xl" />
        </IconButton>

        <ProductCard
          title="Double Bed & Side Tables"
          image={productImg}
          priceOld="$230.00"
          priceNew="$200.00"
          discount="-13%"
        />

        <ProductCard
          title="Double Bed & Side Tables"
          image={productImg}
          priceOld="$230.00"
          priceNew="$200.00"
          discount="-13%"
        />

        <ProductCard
          title="Double Bed & Side Tables"
          image={productImg}
          priceOld="$230.00"
          priceNew="$200.00"
          discount="-13%"
        />

        <IconButton>
          <FiChevronRight className="text-xl" />
        </IconButton>
      </div>
    </div>
  );
};

export default Hero;
