
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Favorites.css"; 

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
}

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Property[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const handleRemove = (id: number) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <Navbar />
        <div className="favorites-hero">
          <h1>Your Favorites</h1>
          <p>You haven’t added any properties yet!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <Navbar />
      <div className="favorites-hero">
        <h1>My Favorite Properties</h1>
        <p>Click a property to view details or remove it from your favorites.</p>
      </div>

      <section className="favorites-grid">
        {favorites.map((property) => (
          <div key={property.id} className="favorites-card">
            <div
              className="favorites-img"
              style={{ backgroundImage: `url(${property.image})` }}
              onClick={() =>
                navigate(`/property/${property.id}`, { state: property })
              }
            />
            <div className="favorites-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <span>{property.price}</span>
              <button
                className="remove-btn"
                onClick={() => handleRemove(property.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Favorites;
