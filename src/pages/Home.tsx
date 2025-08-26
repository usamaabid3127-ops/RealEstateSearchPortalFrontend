import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  garage: string;
  contact: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa in Karachi",
    location: "Karachi, Pakistan",
    price: "PKR 12 Crore",
    image: "https://i.pinimg.com/736x/06/d2/bb/06d2bb1aa9cd7a750d7ad6edd4291f21.jpg",
    area: "5000 sq.ft",
    bedrooms: 5,
    bathrooms: 4,
    garage: "2 Cars",
    contact: "0300-1234567",
  },
  {
    id: 2,
    title: "Modern Apartment in Lahore",
    location: "Lahore, Pakistan",
    price: "PKR 3 Crore",
    image: "https://i.pinimg.com/736x/3b/01/36/3b013672e0cec500c26d2d901ec39906.jpg",
    area: "1500 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    garage: "1 Car",
    contact: "0301-2345678",
  },
  {
    id: 3,
    title: "Cozy House in Islamabad",
    location: "Islamabad, Pakistan",
    price: "PKR 15.5 Crore",
    image: "https://i.pinimg.com/736x/a6/56/d8/a656d884d513a61329235a6e32501eb4.jpg",
    area: "3500 sq.ft",
    bedrooms: 4,
    bathrooms: 3,
    garage: "2 Cars",
    contact: "0302-3456789",
  },
  {
    id: 4,
    title: "Penthouse in Karachi",
    location: "Karachi, Pakistan",
    price: "PKR 08 Crore",
    image: "https://i.pinimg.com/1200x/29/6f/28/296f28990e40ff42604c59bf8e336c94.jpg",
    area: "2800 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    garage: "1 Car",
    contact: "0303-4567890",
  },
  {
    id: 5,
    title: "Elegant Bungalow in Rawalpindi",
    location: "Rawalpindi, Pakistan",
    price: "PKR 7 Crore",
    image: "https://i.pinimg.com/736x/77/be/6f/77be6fd69189c11e32c49fa215df395f.jpg",
    area: "3200 sq.ft",
    bedrooms: 4,
    bathrooms: 3,
    garage: "2 Cars",
    contact: "0304-5678901",
  },
  {
    id: 6,
    title: "Seaside Villa in Gwadar",
    location: "Gwadar, Pakistan",
    price: "PKR 20 Crore",
    image: "https://i.pinimg.com/736x/a0/3a/34/a03a344705a0de7fdb90f9fb024a15e8.jpg",
    area: "5500 sq.ft",
    bedrooms: 6,
    bathrooms: 5,
    garage: "3 Cars",
    contact: "0305-6789012",
  },
  {
    id: 7,
    title: "Luxury Apartment in Islamabad",
    location: "Islamabad, Pakistan",
    price: "PKR 5.5 Crore",
    image: "https://i.pinimg.com/736x/ec/29/56/ec2956904610f4a83f78f5a0980a77ee.jpg",
    area: "1800 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    garage: "1 Car",
    contact: "0306-7890123",
  },
  {
    id: 8,
    title: "Modern Studio in Lahore",
    location: "Lahore, Pakistan",
    price: "PKR 1.8 Crore",
    image: "https://i.pinimg.com/1200x/09/7e/37/097e37b3a61d0e032b5ea0d90c216a33.jpg",
    area: "800 sq.ft",
    bedrooms: 1,
    bathrooms: 1,
    garage: "No Garage",
    contact: "0307-8901234",
  },
  {
    id: 9,
    title: "Farmhouse near Multan",
    location: "Multan, Pakistan",
    price: "PKR 6 Crore",
    image: "https://i.pinimg.com/1200x/13/c5/37/13c53775a8121ad773f3172fe6e05618.jpg",
    area: "4000 sq.ft",
    bedrooms: 4,
    bathrooms: 3,
    garage: "2 Cars",
    contact: "0308-9012345",
  },
  {
    id: 10,
    title: "Penthouse in Karachi Sea View",
    location: "Karachi, Pakistan",
    price: "PKR 14 Crore",
    image: "https://i.pinimg.com/736x/dd/2b/d6/dd2bd613f1ea422a699b92e1fb76132c.jpg",
    area: "3000 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    garage: "2 Cars",
    contact: "0309-0123456",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Property[]>([]);

  // Initialize favorites from localStorage
  useEffect(() => {
    const savedFavorites: Property[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  // Toggle favorite and persist in localStorage
  const toggleFavorite = (property: Property) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === property.id);
      let updated: Property[];
      if (exists) {
        updated = prev.filter((fav) => fav.id !== property.id);
      } else {
        updated = [...prev, property];
      }
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Search from thousands of properties across Pakistan</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by city, location, or property..."
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="property-section">
        <h2 className="section-title">Featured Properties</h2>
        <div className="property-grid">
          {properties.map((property) => {
            const isFav = favorites.some((fav) => fav.id === property.id);
            return (
              <div key={property.id} className="property-card">
                <img
                  src={property.image}
                  alt={property.title}
                  onClick={() =>
                    navigate(`/property/${property.id}`, { state: property })
                  }
                  style={{ cursor: "pointer" }}
                />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p>{property.location}</p>
                  <span>{property.price}</span>
                </div>
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorite(property)}
                >
                  {isFav ? "❤️ Remove" : "🤍 Add to Favorites"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Want to save your favorite properties?</h2>
        <p>Sign up today and start building your personalized list.</p>
        <button onClick={() => navigate("/signup")}>Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Real Estate App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
