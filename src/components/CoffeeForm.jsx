import { useState } from "react"


export default function CoffeeForm( {onAddCoffee}) {

const [coffee, setCoffee] = useState({
    type: "",
    description: "",
    origin: "",
    price: ""
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
    fetch("http://localhost:9292/coffees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffee)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(data => {
        console.log("Coffee saved:", data)
        if (onAddCoffee) {
            onAddCoffee(data) // pushes the new coffee to the coffee list in the CoffeeList component through the onAddCoffee prop function passed down from App.jsx
        }   
//Revert form to initial state after successful submission
        setCoffee({
        type: "",
        description: "",
        origin: "",
        price: ""
    })
})
    .catch(error => {
        console.error("Error saving coffee:", error)
       })
 }


    return (
        <div className="w-full max-w-lg mx-auto bg-[#1e140f] border border-stone-800 p-8 rounded-2xl shadow-2xl my-10">            <h1>Coffee Form</h1>
            <h1 className="text-3xl font-black text-[#f7f4f0] mb-6 text-center border-b border-stone-800 pb-4">
                Add New <span className="text-amber-500">Coffee</span>
            </h1>
            <form className="flex flex-col space-y-5"
            onSubmit={handleSubmit}>
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
               <label htmlFor="description" className="text-amber-400 font-medium text-sm tracking-wide">Description:
               </label>
               <textarea id="description" name="description" placeholder="Coffee description"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
              required
              value={coffee.description}
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
              <button type="Submit" 
              className=" w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                Submit
              </button>
            </form>
        </div>
    )
}