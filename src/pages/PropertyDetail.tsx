// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "../styles/PropertyDetail.css";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// const PropertyDetail: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const property = location.state as {
//     id: number;
//     title: string;
//     location: string;
//     price: string;
//     image: string;
//   };

//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     const exists = favorites.some((fav: any) => fav.id === property?.id);
//     setIsFavorite(exists);
//   }, [property]);

//   const handleToggleFavorite = () => {
//     if (!property) return;
//     let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

//     if (isFavorite) {
//       favorites = favorites.filter((fav: any) => fav.id !== property.id);
//     } else {
//       favorites.push(property);
//     }

//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     setIsFavorite(!isFavorite);
//   };

//   if (!property) return <div>Property not found!</div>;

//   return (
//     <div className="property-detail-container">
//       <Navbar />

//       <section
//         className="property-hero"
//         style={{ backgroundImage: `url(${property.image})` }}
//       >
//         <div className="property-hero-overlay">
//           <h1>{property.title}</h1>
//           <p>{property.location}</p>
//           <h2>{property.price}</h2>
//         </div>
//       </section>

//       <section className="property-detail-section">
//         <div className="property-detail-card">
//           <h2>Property Description</h2>
//           <p>
//             This stunning property is located in {property.location}. Lorem
//             ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
//             odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
//           </p>
//           <ul>
//             <li>Bedrooms: 4</li>
//             <li>Bathrooms: 3</li>
//             <li>Area: 3500 sq.ft</li>
//             <li>Garage: 2 Cars</li>
//           </ul>

//           {/* Heart Icon */}
//           <button
//             onClick={handleToggleFavorite}
//             style={{
//               fontSize: "2rem",
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//               color: isFavorite ? "red" : "#333",
//             }}
//           >
//             {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
//           </button>

//           <button
//             onClick={() => navigate(-1)}
//             style={{
//               marginLeft: "10px",
//               padding: "0.5rem 1rem",
//               background: "#0078d7",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Back to Listings
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PropertyDetail;
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "../styles/PropertyDetail.css";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// const PropertyDetail: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extended property type with extra details
//   const property = location.state as {
//     id: number;
//     title: string;
//     location: string;
//     price: string;
//     image: string;
//     area?: string;
//     bedrooms?: number;
//     bathrooms?: number;
//     contact?: string;
//   };

//   const [isFavorite, setIsFavorite] = useState(false);

//   // Check if the property is already in favorites
//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     const exists = favorites.some((fav: any) => fav.id === property?.id);
//     setIsFavorite(exists);
//   }, [property]);

//   const handleToggleFavorite = () => {
//     if (!property) return;
//     let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

//     if (isFavorite) {
//       favorites = favorites.filter((fav: any) => fav.id !== property.id);
//     } else {
//       favorites.push(property);
//     }

//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     setIsFavorite(!isFavorite);
//   };

//   if (!property) return <div>Property not found!</div>;

//   return (
//     <div className="property-detail-container">
//       <Navbar />

//       {/* Hero Section */}
//       <section
//         className="property-hero"
//         style={{ backgroundImage: `url(${property.image})` }}
//       >
//         <div className="property-hero-overlay">
//           <h1>{property.title}</h1>
//           <p className="location">{property.location}</p>
//           <h2 className="price">{property.price}</h2>
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="property-detail-section">
//         <div className="property-detail-card">
//           <h2>Property Description</h2>
//           <p>
//             This beautiful property is located in {property.location}. It offers
//             comfort, luxury, and elegance for a perfect living experience.
//           </p>

//           <ul className="property-features">
//             <li>Bedrooms: {property.bedrooms || "N/A"}</li>
//             <li>Bathrooms: {property.bathrooms || "N/A"}</li>
//             <li>Area: {property.area || "N/A"}</li>
//             <li>Contact: {property.contact || "N/A"}</li>
//           </ul>

//           <div className="btn-group">
//             {/* Heart Icon */}
//             <button className="fav-btn" onClick={handleToggleFavorite}>
//               {isFavorite ? (
//                 <AiFillHeart size={20} style={{ marginRight: "5px" }} />
//               ) : (
//                 <AiOutlineHeart size={20} style={{ marginRight: "5px" }} />
//               )}
//               {isFavorite ? "Added to Favorites" : "Add to Favorites"}
//             </button>

//             <button className="back-btn" onClick={() => navigate(-1)}>
//               Back to Listings
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PropertyDetail;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/PropertyDetail.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const PropertyDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Accept all property details from Home
  const property = location.state as {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
    area?: string;
    bedrooms?: number;
    bathrooms?: number;
    garage?: string;
    contact?: string;
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = favorites.some((fav: any) => fav.id === property?.id);
    setIsFavorite(exists);
  }, [property]);

  const handleToggleFavorite = () => {
    if (!property) return;
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((fav: any) => fav.id !== property.id);
    } else {
      favorites.push(property);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (!property) return <div>Property not found!</div>;

  return (
    <div className="property-detail">
      <Navbar />

      {/* Hero Section */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${property.image})` }}
      >
        <div className="property-hero-overlay">
          <h1>{property.title}</h1>
          <p className="location">{property.location}</p>
          <h2 className="price">{property.price}</h2>
        </div>
      </section>

      {/* Details Section */}
      <section className="property-detail-section">
        <div className="property-detail-card">
          <h2>Property Description</h2>
          <p>
            This beautiful property is located in {property.location}. It offers
            comfort, luxury, and elegance for a perfect living experience.
          </p>

          <ul className="property-features">
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Bathrooms: {property.bathrooms}</li>
            <li>Area: {property.area}</li>
            <li>Garage: {property.garage}</li>
            <li>Contact: {property.contact}</li>
          </ul>

          <div className="btn-group">
            {/* Heart Icon */}
            <button className="fav-btn" onClick={handleToggleFavorite}>
              {isFavorite ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              {isFavorite ? " Added to Favorites" : " Add to Favorites"}
            </button>

            <button className="back-btn" onClick={() => navigate(-1)}>
              Back to Listings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
