

export default function Hero({onExploreMenu}) {
    return (
        <div className="w-full min-h-[70vh] bg-[#1e140f] flex flex-row items-center justify-between px-8 md:px-16 py-12 relative overflow-hidden">
            {/* the glowing background element */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex flex-col space-y-6 max-w-[50%] z-10">
                <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
                    Welcome to
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-[#f7f4f0] leading-tight">
                    The Local <span className="text-amber-500">Host</span> Sips
                </h1>
                <p className="text-stone-300 text-base md:text-lg font-light leading-relaxed">
                    Your one-stop shop for all things coffee
                </p>
                <div className="pt-2">
                    <button
                    className="bg-amber-500 text-[#1e140f] font-bold px-6 py-3 rounded-lg shadow-lg "
                    onClick={onExploreMenu}>
                        Explore Menu
                    </button>
                </div>
            </div>

            
            <div className="flex justify-center items-center z-10 max-w-[45%]">
                    <img 
                        src="https://cdn.creativefabrica.com/2023/07/06/Coffee-cup-vector-logo-design-Graphics-73825280-1.jpg" 
                        alt="coffee logo" 
                        className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-amber-500/30 shadow-2xl relative z-10"
                    />               
            </div>
        </div>
    )
}