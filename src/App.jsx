import "./App.css";

import FeatureProducts from "./components/home/FeatureProducts";
import PromoBanner from "./components/home/PromoBanner";
import TrustHighlights from "./components/home/TrustHighlights";
import FeatureCategories from "./components/home/FeatureCategories";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Shopify</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Wishlist</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">

          <p className="badge">
            New season collection is live
          </p>

          <h1>
            Shop smarter with curated products for modern living.
          </h1>

          <p>
            Discover premium picks across fashion, electronics,
            home, beauty and lifestyle —
            all in one beautifully crafted shopping experience.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Collection
            </button>

            <button className="secondary-btn">
              Browse Categories
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
            alt="fashion"
          />

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="phone"
          />

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="home"
          />

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="beauty"
          />
        </div>
      </div>

      {/* Featured Products */}
      <FeatureProducts />

      {/* Offer Banner */}
      <PromoBanner />

      {/* Stats Section */}
      <TrustHighlights />

      {/* Categories */}
      <FeatureCategories />

    </div>
  );
}

export default App;