import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e140f] border-t border-stone-800 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        
       
        <div className="flex flex-col space-y-3 max-w-sm">
          <Link to="/" className="text-xl font-black text-[#f7f4f0] no-underline">
            Local<span className="text-amber-500">Host</span>Sips
          </Link>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            Crafting perfect morning routines and hosting community connections across our local café branches. 
          </p>
        </div>
       
        <div className="flex flex-col space-y-3">
          <h4 className="text-amber-500 font-bold tracking-wider uppercase text-xs">
            Contact Us
          </h4>
          <div className="text-stone-300 text-sm space-y-1 font-light">
            <p><span className="font-medium text-stone-200">Phone:</span> +254 712 345 678</p>
            <p><span className="font-medium text-stone-200">Email:</span> info@localhostsips.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="text-amber-500 font-bold tracking-wider uppercase text-xs">
            Brewing Hours
          </h4>
          <div className="text-stone-300 text-sm space-y-1 font-light">
            <p><span className="font-medium text-stone-200">Mon - Fri:</span> 6:30 AM - 8:00 PM</p>
            <p><span className="font-medium text-stone-200">Sat - Sun:</span> 7:30 AM - 9:00 PM</p>
            <p><span className="font-medium text-stone-200">Public Holidays:</span> 9:30 AM - 7:00 PM</p>

          </div>
        </div>

      </div>

      <div className="border-t border-stone-900/60 bg-[#160e0a] py-4 px-8 text-center">
        <p className="text-stone-500 text-xs font-light tracking-wide">
          &copy; {currentYear} LocalHostSips. All rights reserved. Built with passion & caffeine. ☕
        </p>
      </div>
    </footer>
  )
}