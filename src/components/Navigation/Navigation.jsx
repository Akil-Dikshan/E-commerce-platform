import { userState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";


export default function Navigation() { 
    const [isMenuOpen, setIsMenuOpen] = userState(false);

    const closeMobileMenu = () => setIsMenuOpen(false);
    return (
        <header className="bg-white border-b border-gray-200 px-4 lg:px-16">
            <div className="flex items-center justify-between h-16">
                {/*logo*/}
                <a href="/" className="font-bold text-2xl">
                Mebius
                </a>
                {/*desktop navigation*/}
                <nav className="hidden md:flex space-x-8">
                    {[
                        {
                            path: "/shop/shoes",
                            label: "Shoes",
                        },
                        {
                            path: "/shop/T-shirts",
                            label: "T-shirts",
                        },
                        {
                            path: "/shop/Shorts",
                            label: "Shorts"
                        },
                        {
                            path: "/shop/Pants",
                            label: "Pants",
                        }
                    ].map((item) => { 
                        return (
                            <a href={item.path}
                                className="font-medium hover:text-gray-600">
                                { item.label}
                            </a>
                        )
                    })}
                </nav>    
                <div className={s.controls}>
                    <div className="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                    </div>
                    <div className="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                    </div>
                    <a href="">Sign In</a>
                    <a href="">Sign Up</a>
                </div>
            </div>
        </header>
    )
}