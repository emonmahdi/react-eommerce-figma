import React from "react";
import ProductCardMain from "./ProductCardMain";

import img1 from "../../assets/p1.jpg";
import img2 from "../../assets/p2.jpg";
import img3 from "../../assets/p1.jpg";
import img4 from "../../assets/p2.jpg";

type Product = {
  id: number;
  title: string;
  oldPrice: number;
  newPrice: number;
  discount: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Modern Double Bed with Storage",
    oldPrice: 350,
    newPrice: 299,
    discount: "-15%",
    image: img1,
  },
  {
    id: 2,
    title: "Luxury Sofa Set (3 + 2 Seater)",
    oldPrice: 500,
    newPrice: 420,
    discount: "-16%",
    image: img2,
  },
  {
    id: 3,
    title: "Wooden Dining Table Set (6 Chairs)",
    oldPrice: 600,
    newPrice: 540,
    discount: "-10%",
    image: img3,
  },
  {
    id: 4,
    title: "Minimalist Study Desk",
    oldPrice: 200,
    newPrice: 170,
    discount: "-15%",
    image: img4,
  },
  {
    id: 5,
    title: "Classic Wardrobe 3 Door",
    oldPrice: 450,
    newPrice: 399,
    discount: "-11%",
    image: img1,
  },
  {
    id: 6,
    title: "Comfort Recliner Chair",
    oldPrice: 300,
    newPrice: 260,
    discount: "-13%",
    image: img2,
  },
  {
    id: 7,
    title: "Coffee Table with Storage",
    oldPrice: 180,
    newPrice: 150,
    discount: "-17%",
    image: img3,
  },
  {
    id: 8,
    title: "Bedside Table (Set of 2)",
    oldPrice: 120,
    newPrice: 99,
    discount: "-18%",
    image: img4,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Grid */}
        <div
          className="
            grid gap-6
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
          "
        >
          {products.map((product) => (
            <ProductCardMain key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
