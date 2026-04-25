import { FiUser, FiShoppingCart } from "react-icons/fi";
import IconButton from "./IconButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 text-balck">
      <div className="font-bold">LOGO</div>

      <div className="flex gap-8 text-sm">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Contact Us</a>
        <a href="#">Blog</a>
      </div>

      <div className="flex gap-4">
        <IconButton>
          <FiUser className="text-lg" />
        </IconButton>

        <IconButton>
          <FiShoppingCart className="text-lg" />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
