import ProductGrid from "./ui/ProductGrid";
import SectionHeader from "./ui/SectionHeader";

const MostPopularSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <SectionHeader
          title="Most Popular Products"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        />
      </div>
      <ProductGrid />
    </section>
  );
};

export default MostPopularSection;
