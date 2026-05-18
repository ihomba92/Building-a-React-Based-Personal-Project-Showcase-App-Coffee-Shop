import { useState, useEffect  } from 'react'
import NavBar from './layout/NavBar'
import Hero from './components/Hero'
import SideBar from './layout/SideBar'
import CoffeeList from './components/CoffeeList'

function App() {
  const[showCoffeeList, setShowCoffeeList] = useState(false);
  const [coffees, setCoffees] = useState([]);
  const[selectLocation, setSelectLocation] = useState("City Center")
  
  //function to fetch coffees from json server
  useEffect(() => {
    fetch("http://localhost:9292/coffees")
    .then(response => response.json())
    .then(data => setCoffees(data))
    .catch(error => console.error("Error fetching coffees:", error))
  }, []);  

  // function to handle add new coffee form submission
  function handleAddCoffee(newCoffee) {
    setCoffees(prevCoffees => [...prevCoffees, newCoffee])
  }

  function toggleCoffeeList() {
    setShowCoffeeList(true); // this switches the menu view to the coffee list when the "Explore Menu" button is clicked in the Hero component
  }
 
  return (
    <div className="flex flex-col min-h-screen bg-[#1e140f]">
      <NavBar />
        <div className="flex flex-1 flex-row w-full">
      {/* sidebar is pinned to the left of the main content */}
     {/*only show the sidebar only when the user click the "Explore Menu" button in the Hero component */}
      {showCoffeeList && (
      <SideBar 
      selectedLocation={selectLocation}
      setSelectedLocation={setSelectLocation} />
      )}
     
      {/* This moves everything on the right of the sidebar */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {!showCoffeeList ? ( // this passes the toggleCoffeeList function as a prop to the Hero component, allowing the button in the Hero to trigger the display of the CoffeeList when clicked
          <Hero onExploreMenu={toggleCoffeeList} />
        ) : (
          <CoffeeList
          coffees={coffees}
          location={selectLocation}
          onAddCoffee={handleAddCoffee}
          />
        )}
      </main>
      </div>
  </div>
  )
}

export default App
