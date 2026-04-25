import Hero from "./Hero";
import Navbar from "./Navbar";
import headerBg from "../assets/header-bg.jpg";

const Header = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${headerBg})`, // replace with your image
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
