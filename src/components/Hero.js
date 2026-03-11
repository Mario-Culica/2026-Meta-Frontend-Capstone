import React from "react";

function Hero() {
  const handleScroll = () => {
    const bookingSection = document.getElementById("reservations");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon Chicago</h1>
        <p>
          Experience the vibrant flavors of the Mediterranean in the heart of Chicago. 
Fresh ingredients, handcrafted dishes, and a cozy atmosphere await you.
        </p>
        <button onClick={handleScroll}>Reserve Table</button>
      </div>

      <div className="hero-image">
        <img src="/images/hero.jpg" alt="Restaurant Interior" />
      </div>
    </section>
  );
}

export default Hero;