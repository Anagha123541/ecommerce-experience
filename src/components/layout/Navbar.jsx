import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();

  const wishlistCount = useSelector(
    (state) => state.wishlist.items.length
  );

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/cart", label: "Cart" },
    { to: "/wishlist", label: "Wishlist" },
  ];

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg font-bold text-purple-600">
          Shopify
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${
                location.pathname === item.to
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Wishlist */}
          <div className="relative cursor-pointer">
            🤍
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Account */}
          <button className="border px-3 py-1 rounded text-sm">
            Account
          </button>

          {/* Cart */}
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
            Cart (0)
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;