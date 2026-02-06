import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import path from 'path';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 group">
              Mebius
              <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-gray-900"></span>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              {
                path: "/shop/shoes",
                label: "shoes",
              },
              {
                path: "/shop/tshirts",
                label:"T-Shirts",
              },
              {
                path: "/shop/shorts",
                label:"Shorts",
              },
              {
                path: "/shop/pants",
                label:"Pants",
              },
              {
                path: "/shop/socks",
                label:"Sockes",
              }
            ].map((item) => (
              <a
                key={item.path}
                href="#"
                className="text-gray-600 hover:text-black font-medium transition-colors relative group text-sm uppercase tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black transition-transform hover:scale-110">
              <Search className="w-5 h-5" />
            </button>

            <button className="text-gray-600 hover:text-black transition-transform hover:scale-110">
              <User className="w-5 h-5" />
            </button>

            <button className="group relative text-gray-600 hover:text-black transition-transform hover:scale-110">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {['Shoes', 'T-Shirt', 'Shorts', 'Pants', 'Socks'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="border-t border-gray-100 my-4 pt-4 flex justify-around">
            <button className="flex flex-col items-center text-gray-600 hover:text-black">
              <Search className="w-6 h-6 mb-1" />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-black">
              <User className="w-6 h-6 mb-1" />
              <span className="text-xs">Account</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-black">
              <ShoppingCart className="w-6 h-6 mb-1" />
              <span className="text-xs">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}