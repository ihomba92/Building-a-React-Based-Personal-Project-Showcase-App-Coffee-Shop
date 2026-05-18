
import { useState } from "react"
import Search from "./Search"

export default function CoffeList({coffees, location, }) {

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
        <div className="p-8 max-w-5xl mx-auto w-full flex flex-col space-y-12">

            <div>
            <h1 className="text-3xl font-black text-[#f7f4f0] mb-6 text-center border-b border-stone-800 pb-4">
                Coffee <span className="text-amber-500">Menu</span>
            </h1>
            <p className="text-center text-lg text-stone-400 tracking-wide font-medium uppercase">
                Viewing Menu For: <span className="text-amber-400 font-bold">{location}</span>
            </p>
            <Search onSearchChange={setSearchTerm} searchTerm={searchTerm} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredCoffees.map(coffee => (
                    <div key={coffee.id} className="bg-[#1e140f] border border-stone-800 rounded-lg p-6 flex flex-col space-y-4">
                        <div className="space-y-1 max-w-[70%]" >
                        <h2 className="text-xl font-semibold text-[#f7f4f0]">{coffee.type}</h2>
                        <p className="text-sm text-stone-400">Origin: {coffee.origin}</p>
                        <p className="text-sm text-stone-400">{coffee.description}</p>
                        </div>

                        <div className="text-right">
                             <span className="text-xl font-black text-amber-500">
                           KES {getPriceForLocation(coffee.price)}
                            </span>
                    </div>                   
             </div>
                ))}
                {filteredCoffees.length === 0 && (
                        <p className="text-stone-500 text-center col-span-2 py-8">No coffees listed on the menu yet.</p>
                    )}
            </div>
            </div>           
     </div>

    )
}