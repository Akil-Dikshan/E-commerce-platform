import { Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Mebius</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Shoes
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              T-Shirt
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Shorts
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pants
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Socks
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon with Badge */}
            <button className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Sign In / Sign Up */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Sign In
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}