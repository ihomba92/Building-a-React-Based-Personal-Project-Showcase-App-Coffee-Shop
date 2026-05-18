


export default function SideBar({selectedLocation, setSelectedLocation}) {

    const locations = [
        { id: "City Center", label: "City Center" },
        { id: "Garden City Mall", label: "Garden City Mall" },
        { id: "Two Rivers Mall", label: "Two Rivers Mall" },
        { id: "Galleria Mall", label: "Galleria Mall" }
    ];
    
    
    return (
        <aside className="h-screen w-64 bg-[#1e140f] border-r border-stone-800 pt-6 pb-6 px-4 flex flex-col justify-start space-y-6 hidden md:flex">
         <p className=" text-xs font-bold uppercase tracking-wider text-amber-500/80 mb-4">
                    Café Locations
                </p>
        
         <nav className="space-y-1 flex flex-col gap-5 ">
            {locations.map(location => {
                const isActive = selectedLocation === location.id;
                return (
                    <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.id)}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition duration-200 ${
                            isActive ? "bg-amber-500 text-[#1e140f]" : "bg-[#2a1d16] text-stone-300 hover:bg-[#2a1d16]/80"
                        }`}
                    >
                        <span>{location.label}</span>
                    </button>
                )        
            })}
           </nav>
           </aside>
    )
}