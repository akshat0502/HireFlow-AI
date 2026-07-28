import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg
hover:shadow-2xl
transition-all
duration-300 p-4 flex items-center gap-4"
    >
      <Search className="text-slate-400" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Jobs..."
        className="w-full outline-none"
      />
    </div>
  );
}

export default SearchBar;
