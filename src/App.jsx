import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">Shopify</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Wishlist</li>
          <li>Login</li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <p className="badge">New season collection is live</p>

          <h1>
            Shop smarter with curated products for modern living.
          </h1>

          <p className="description">
            Discover premium picks across fashion, electronics,
            home, beauty and lifestyle — all in one beautifully
            crafted shopping experience.
          </p>

          <div className="buttons">
            <button className="primary-btn">
              Shop Collection
            </button>

            <button className="secondary-btn">
              Browse Categories
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
            alt="fashion"
          />

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="mobile"
          />

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="home"
          />

          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
            alt="beauty"
          />
        </div>
      </div>
    </div>
  );
}

export default App;