import { useState } from "react"
import Search from "./Search"
import { COFFEE_IMAGES } from "./ImagesGallery";

export default function CoffeList({ coffees, location }) {
    const [searchTerm, setSearchTerm] = useState("")
  
    function getPriceForLocation(basePrice) {
        const parsePrice = parseFloat(basePrice) || 0;
        switch (location) {
            case "Garden City Mall": return parsePrice + 50;
            case "Two Rivers Mall": return parsePrice + 150;
            case "Galleria Mall": return parsePrice + 100;
            case "City Center": default: return parsePrice;
        }
    }

    const filteredCoffees = coffees.filter(coffee => {
        const matchesType = coffee.type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesOrigin = coffee.origin.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType || matchesOrigin;
    });

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto w-full flex flex-col space-y-8 md:space-y-12">
            <div>
                <h1 className="text-2xl md:text-3xl font-black text-[#f7f4f0] mb-4 text-center border-b border-stone-800 pb-4">
                    Coffee <span className="text-amber-500">Menu</span>
                </h1>
                <p className="text-center text-lg text-stone-400 tracking-wide font-medium uppercase">
                    Viewing Menu For: <span className="text-amber-400 font-bold">{location}</span>
                </p>
                <Search onSearchChange={setSearchTerm} searchTerm={searchTerm} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                    {filteredCoffees.map(coffee => {
                        //  Look up the dynamic asset matching the key assigned by the admin
                        // If no key exists or it doesn't match, fall back to "Standard Brew" (Mocha)
                        const coffeeImageSrc = COFFEE_IMAGES[coffee.imageKey] || COFFEE_IMAGES["Standard Brew"];

                        return (
                            <div 
                                key={coffee.id} 
                                className="bg-[#1e140f] border border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-stone-700 transition duration-200 shadow-xl"
                            >
                                {/*  NEW IMAGE BLOCK ADDED HERE */}
                                <div className="h-48 w-full overflow-hidden bg-stone-900 relative">
                                    <img 
                                        src={coffeeImageSrc} 
                                        alt={coffee.type} 
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Details Container */}
                                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                                   
                                    <div className="space-y-1.5">
                                        <h2 className="text-xl font-semibold text-[#f7f4f0]">{coffee.type}</h2>
                                        <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider">Origin: {coffee.origin}</p>
                                        <p className="text-sm text-stone-400 font-light leading-relaxed">{coffee.description}</p>
                                    </div>

                                    <div className="text-right border-t border-stone-800/60 pt-3 flex justify-between items-center">
                                        <span className="text-xs text-stone-500 font-medium md:hidden">Price</span>
                                        <span className="text-xl font-black text-amber-500">
                                            KES {getPriceForLocation(coffee.price)}
                                        </span>
                                    </div> 
                                </div>                 
                            </div>
                        );
                    })}
                </div>

                {filteredCoffees.length === 0 && (
                    <p className="text-stone-500 text-center col-span-2 py-8">No coffees listed on the menu yet.</p>
                )}
            </div>           
        </div>
    )
}