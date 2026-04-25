import { FiArrowRight } from "react-icons/fi";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <button className="flex items-center gap-2 bg-black text-white text-xs md:text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
        View All
        <FiArrowRight />
      </button>
    </div>
  );
};

export default SectionHeader;
