import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-16">
      <div>
        <div className="flex items-center h-16 gap-8">
          {/* Spacer */}
          <div className="flex-none w-8"></div>
          
          {/* Logo */}
          <a href="/" className="font-bold text-2xl flex-none">
            Mebius
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 gap-6 flex-1 justify-center">
            {[
              {
                path: "/shop/shoes",
                label: "Shoes",
              },
              {
                path: "/shop/tshirts",
                label: "T-Shirt",
              },
              {
                path: "/shop/shorts",
                label: "Shorts",
              },
              {
                path: "/shop/pants",
                label: "Pants",
              },
              {
                path: "/shop/socks",
                label: "Socks",
              },
            ].map((item) => {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className="font-medium hover:text-gray-500"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Icons - added mr-8 to move left */}
          <div className="flex items-center space-x-4 gap-4 mr-8">
            <button aria-label="Search" className="p-1">
              <Search size={20} />
            </button>
            <a
              href="/shop/cart"
              aria-label="Shopping Bag"
              className="p-1 relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {0}
              </span>
            </a>
            <div className="hidden md:block">
              <div className="flex items-center gap-4 ">
                <a href="/sign-in">Sign In</a>
                <a href="/sign-up">Sign Up</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {[
              { path: "/shop/shoes", label: "Shoes" },
              { path: "/shop/tshirts", label: "T-Shirt" },
              { path: "/shop/shorts", label: "Shorts" },
              { path: "/shop/pants", label: "Pants" },
              { path: "/shop/socks", label: "Socks" },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="block md:hidden px-4 ">
            <div className="flex items-center gap-4">
              <a href="/sign-in">Sign In</a>
              <a href="/sign-up">Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}