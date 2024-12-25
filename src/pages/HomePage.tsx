import React from "react";
import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";
import ApartmentCard from "../components/ApartmentCard.tsx";
import "../styles/HomePage.css";

const apartments = [
  { id: 1, title: "Modern Studio", location: "Budapest", price: "$1000/month" },
  { id: 2, title: "Cozy Loft", location: "Budapest", price: "$1200/month" },
  {
    id: 3,
    title: "Luxury Apartment",
    location: "Budapest",
    price: "$2500/month",
  },
  { id: 4, title: "Budget Flat", location: "Budapest", price: "$800/month" },
];

const HomePage = () => {
  return (
    <main className="home-page">
      <Header />
      <div className="page-content">
        <section className="hero">
          <h2 id="hero-title" className="tagline">
            Find Your Perfect Home in Budapest!
          </h2>
          <SearchBar />
        </section>
        <section className="apartment-cards">
          <h3>Available Apartments</h3>
          <div className="card-container">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
