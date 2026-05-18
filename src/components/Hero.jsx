
import { useNavigate } from "react-router-dom"


export default function Hero() {
    const navigate = useNavigate(); // this initializes instantiation of the useNavigate hook from react-router-dom, which allows us to programmatically navigate to different routes in our application
    return (
        <div className="w-full max-w-7xl mx-auto min-h-[80vh] bg-[#1e140f] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 relative overflow-hidden gap-12">
            {/* the glowing background element */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-[150px] opacity-15 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>         
        
            <div className="flex flex-col space-y-6 flex-1 z-10 text-left">
                <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">
                    Welcome to
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f7f4f0] leading-tight break-words">                    
                    The Local <span className="text-amber-500">Host</span> Sips
                </h1>
                <p className="text-stone-300 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">             
                    Your one-stop shop for all things coffee
                </p>
                <div className="pt-2">
                    <button
                      className="bg-amber-500 hover:bg-amber-600 text-[#1e140f] font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:shadow-amber-500/10 active:scale-[0.98] cursor-pointer text-base"              
                      onClick={() => navigate("/shop")}> 
                        Explore Menu
                    </button>
                </div>
            </div>

           <div className="flex justify-center items-center flex-1 z-10 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition duration-500"></div>                  
                    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd25oZXN0OWdhM202djd3b2ZzYXRkanpyZmh6cnR2bnkzN3VhbTNxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q6joirtIBHUsw/giphy.gif" 
                        alt="coffee logo" 
                        className="w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-4 border-amber-500/20 shadow-2xl relative z-10 transition-transform duration-500 "                        />               
                </div>
             </div>            
        </div>
    )
}