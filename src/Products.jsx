import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 4999,
    rating: 4.5,
    reviews: 128,
    stock: "In Stock",
    description: "Premium over-ear headphones with 30hr battery life and active noise cancellation.",
    badge: "Best Seller",
    color: "#6C63FF",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 3499,
    rating: 4.3,
    reviews: 95,
    stock: "In Stock",
    description: "Track your health 24/7 with heart rate, SpO2, sleep monitoring and GPS.",
    badge: "New",
    color: "#FF6584",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    category: "Accessories",
    price: 2799,
    rating: 4.7,
    reviews: 213,
    stock: "In Stock",
    description: "RGB backlit mechanical keyboard with tactile switches for ultimate gaming performance.",
    badge: "Top Rated",
    color: "#43C6AC",
  },
  {
    id: 4,
    name: "4K Ultra HD Monitor",
    category: "Electronics",
    price: 28999,
    rating: 4.6,
    reviews: 67,
    stock: "Limited",
    description: "27-inch 4K IPS display with 144Hz refresh rate, perfect for design and gaming.",
    badge: "Hot",
    color: "#F7971E",
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 1999,
    rating: 4.2,
    reviews: 184,
    stock: "In Stock",
    description: "360° surround sound with IPX7 waterproofing and 20-hour playtime.",
    badge: "",
    color: "#56CCF2",
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 12499,
    rating: 4.4,
    reviews: 52,
    stock: "Out of Stock",
    description: "Lumbar support, adjustable armrests, and breathable mesh back for all-day comfort.",
    badge: "Sale",
    color: "#A8EDEA",
  },
];

const StarRating = ({ rating }) => {
  return (
    <span className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
      <span className="rating-value">{rating}</span>
    </span>
  );
};

const Products = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");
  const {pid} =useParams()
  console.log("valeu is "+pid)

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filtered =
    filter === "All"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  const addToCart = (product) => {
    if (product.stock === "Out of Stock") return;
    setCart((prev) =>
      prev.find((i) => i.id === product.id) ? prev : [...prev, product]
    );
  };

  return (
    <div className="products-page">
      {/* Header */}
      <Link to="/about">to about</Link>
      <div className="products-header">
        <h1 className="products-title">Our Products</h1>
        <p className="products-subtitle">
          Explore our curated collection of premium products
        </p>
        <div className="cart-indicator">
          🛒 Cart: <strong>{cart.length}</strong> item{cart.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            {/* Color Accent Top */}
            <div
              className="card-accent"
              style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}99)` }}
            >
              <div className="product-icon">
                {product.category === "Electronics" && "💻"}
                {product.category === "Wearables" && "⌚"}
                {product.category === "Accessories" && "⌨️"}
                {product.category === "Audio" && "🎵"}
                {product.category === "Furniture" && "🪑"}
              </div>
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
            </div>

            {/* Card Body */}
            <div className="card-body">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-rating">
                <StarRating rating={product.rating} />
                <span className="review-count">({product.reviews} reviews)</span>
              </div>

              <div className="product-footer">
                <div className="price-stock">
                  <span className="product-price">₹{product.price.toLocaleString()}</span>
                  <span
                    className={`stock-badge ${
                      product.stock === "In Stock"
                        ? "in-stock"
                        : product.stock === "Limited"
                        ? "limited"
                        : "out-stock"
                    }`}
                  >
                    {product.stock}
                  </span>
                </div>
                <button
                  className={`add-cart-btn ${product.stock === "Out of Stock" ? "disabled" : ""} ${
                    cart.find((i) => i.id === product.id) ? "added" : ""
                  }`}
                  onClick={() => addToCart(product)}
                  disabled={product.stock === "Out of Stock"}
                >
                  {cart.find((i) => i.id === product.id)
                    ? "✔ Added"
                    : product.stock === "Out of Stock"
                    ? "Unavailable"
                    : "+ Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
