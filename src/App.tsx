import "./App.css";
import CategorySection from "./components/CategorySection";
import FlashSale from "./components/FlashSale";
import Header from "./components/Header";
import MostPopularSection from "./components/MostPopularSection";

function App() {
  return (
    <>
      <Header />
      <FlashSale />
      <CategorySection />
      <MostPopularSection />
    </>
  );
}

export default App;
