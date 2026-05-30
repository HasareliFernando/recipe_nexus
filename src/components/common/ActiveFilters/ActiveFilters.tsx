import { IoClose } from "react-icons/io5";

interface ActiveFiltersProps {
  filters: string[];
  onRemove: (index: number) => void;
}

const ActiveFilters = ({ filters, onRemove }: ActiveFiltersProps) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <h3 className="text-lg font-bold text-gray-900">Active Filters</h3>
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-3 py-1 bg-amber-400 text-white text-xs font-medium rounded-full"
          >
            {filter}
            <button
              onClick={() => onRemove(index)}
              className="ml-1 hover:text-gray-200 transition-colors bg-transparent border-none text-white cursor-pointer"
            >
              <IoClose size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
