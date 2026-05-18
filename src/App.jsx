import { useState, useEffect  } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Hero from './components/Hero'
import SideBar from './layout/SideBar'
import CoffeeList from './components/CoffeeList'
import CoffeeForm from './components/CoffeeForm'
import Footer from './layout/Footer'

function App() {
  // const[showCoffeeList, setShowCoffeeList] = useState(false);
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

  
 
  return (
    <Router>
    <div className="flex flex-col min-h-screen bg-[#1e140f]">
      <NavBar />
        <div className="flex flex-1 flex-row w-full">
      
      <Routes>
        <Route path="/shop" element={
      <SideBar 
      selectedLocation={selectLocation}
      setSelectedLocation={setSelectLocation} />
        } />
        {/* show nothing when any other URL is clicked */}
        <Route path="*" element={null} /> 
     </Routes>
      {/* This moves everything on the right of the sidebar */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Hero />} />

          {/* Shop/menu page route */}
          <Route path="/shop" element={
             <CoffeeList
             coffees={coffees}
            location={selectLocation}
          onAddCoffee={handleAddCoffee}
          />
          } />

          {/* Admin portal route */}
          <Route path="/admin-portal" element={
            <div className="p-6">
              <CoffeeForm onAddCoffee={handleAddCoffee} />
            </div>
          } />
            {/* for any other URL, redirect to home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      </div>
  </div>
  <Footer />
 </Router>
  )
}

export default App
