import { useState } from "react"
import { COFFEE_OPTIONS } from "./ImagesGallery"


export default function CoffeeForm( {onAddCoffee}) {

const [coffee, setCoffee] = useState({
    type: "",
    description: "",
    origin: "",
    price: "",
    imageKey: COFFEE_OPTIONS[0].key
})

function handleOnChange(event) {
    const { name, value } = event.target
    setCoffee(prevCoffee => ({
        ...prevCoffee,
        [name]: value
    }))
}

 function handleSubmit(event) {
    event.preventDefault();
    if (!coffee.type || !coffee.description || !coffee.origin || !coffee.price) {
        alert("Please fill in all fields")
        return;
    }
    if (onAddCoffee) {
        onAddCoffee(coffee) // pushes the new coffee to the coffee list in the CoffeeList component through the onAddCoffee prop function passed down from App.jsx
    }
      
//Revert form to initial state after successful submission
        setCoffee({
        type: "",
        description: "",
        origin: "",
        price: "",
        imageKey: COFFEE_OPTIONS[0].key
    })
    }


    return (
         
          <form onSubmit={handleSubmit} className="bg-[#2a1d16]/30 border border-stone-800 p-6 rounded-2xl max-w-xl mx-auto space-y-4">
             <h2 className="text-xl font-bold text-[#f7f4f0] border-b border-stone-800 pb-2">
             Add New <span className="text-amber-500">Menu Item</span>
            </h2>
            <div className="flex flex-col space-y-2">
               <label htmlFor="type" className="text-amber-400 font-medium text-sm tracking-wide">Coffee Name:
                </label> 
               <input type="text" id="type" name="type" placeholder="Coffee name"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
               required
               value={coffee.type}
               onChange={handleOnChange}
               />
             
              </div>
             
               <div className="flex flex-col space-y-2">
               <label htmlFor="origin" className="text-amber-400 font-medium text-sm tracking-wide">Origin:
               </label>
               <input type="text" id="origin" name="origin" placeholder="Coffee origin"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
               required
                value={coffee.origin}
                onChange={handleOnChange}
               />
              </div>
                <div className="flex flex-col space-y-1">
                <label className="text-xs text-stone-400 uppercase font-semibold">Menu Presentation Image</label>
                <select 
                name="imageKey" 
                value={coffee.imageKey} 
                onChange={handleOnChange}
                className="bg-[#1e140f] text-[#f7f4f0] border border-stone-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                {COFFEE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-[#1e140f]">
                    {option}
                    </option>
                ))}
                </select>
                    </div>


               <div className="flex flex-col space-y-2">
               <label htmlFor="price" className="text-amber-400 font-medium text-sm tracking-wide">price:
               </label>
               <input type="number" id="price" name="price" placeholder="Coffe price"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
               required
               min={"0"} step={"0.1"}
                value={coffee.price}
                onChange={handleOnChange}
               />
              </div>
               <div className="flex flex-col space-y-2">
               <label htmlFor="description" className="text-amber-400 font-medium text-sm tracking-wide">Description:
               </label>
               <textarea id="description" name="description" placeholder="Coffee description"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
              required
              value={coffee.description}
              onChange={handleOnChange}
              />
              </div>
              <button type="Submit" 
              className=" w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                Submit
              </button>
            </form>
       
    )
}