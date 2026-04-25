import { FiArrowRight } from "react-icons/fi";

interface Props {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-left">
        <h2 className="text-[26px] md:text-[36px] font-semibold text-gray-800">
          {title}
        </h2>
        <p className="mt-3 text-gray-500 text-sm max-w-xl">{description}</p>
      </div>

      <button className="flex items-center gap-2 bg-black text-white text-xs md:text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
        View All
        <FiArrowRight />
      </button>
    </div>
  );
};

export default SectionHeader;
