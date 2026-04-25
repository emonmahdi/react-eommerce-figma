import product1 from "../assets/p1.jpg";
import product2 from "../assets/p2.jpg";
import product3 from "../assets/p1.jpg";
import product4 from "../assets/p2.jpg";
import ProductCardMain from "./ui/ProductCardMain";
import SectionHeader from "./ui/SectionHeader";

const products = [
  {
    id: 1,
    title: "Double Bed & Side Tables",
    oldPrice: 230,
    newPrice: 200,
    discount: "-13%",
    image: product1,
  },
  {
    id: 2,
    title: "Double Bed & Side Tables",
    oldPrice: 230,
    newPrice: 200,
    discount: "-13%",
    image: product2,
  },
  {
    id: 3,
    title: "Double Bed & Side Tables",
    oldPrice: 230,
    newPrice: 200,
    discount: "-13%",
    image: product3,
  },
  {
    id: 4,
    title: "Double Bed & Side Tables",
    oldPrice: 230,
    newPrice: 200,
    discount: "-13%",
    image: product4,
  },
];

const FlashSale = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeader title="Flash Sale" />

      {/* Product Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCardMain key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
