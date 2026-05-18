
export default function Search({onSearchChange, searchTerm}) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search coffee..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-xl px-4 py-3 pl-11 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"            />
        </div>
    )
}