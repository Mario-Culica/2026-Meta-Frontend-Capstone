import React from "react";

// Lista specialităților
const specials = [
  { 
    name: "Greek Salad", 
    price: "$12.99", 
    desc: "A refreshing mix of crisp romaine lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, drizzled with our house-made olive oil and lemon dressing. Perfect for a light, Mediterranean bite.", 
    img: "/images/salad.jpg", 
    rating: 4.5 
  },
  { 
    name: "Bruschetta", 
    price: "$5.99", 
    desc: "Grilled artisan bread topped with ripe tomatoes, fresh basil, garlic, and a hint of balsamic glaze. Crispy, flavorful, and ideal as a starter or snack with a touch of Mediterranean charm.", 
    img: "/images/bruschetta.jpg", 
    rating: 4 
  },
  { 
    name: "Lemon Dessert", 
    price: "$7.99", 
    desc: "A zesty lemon-infused dessert featuring a light and fluffy lemon mousse on a delicate pastry base, topped with fresh lemon zest. Sweet, tangy, and the perfect way to finish your meal.", 
    img: "/images/lemon-dessert.jpg", 
    rating: 5 
  },
];

// Funcție pentru generarea stelelor
function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else if (rating >= i - 0.5) {
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }
  return stars;
}

function Specials() {
  const handleOnlineMenu = () => {
    window.open("/online-menu.pdf", "_blank"); // deschide meniul online
  };

  return (
    <section className="specials">
      {/* Header secțiune */}
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="online-menu-btn" onClick={handleOnlineMenu}>
          Online Menu
        </button>
      </div>

      {/* Carduri */}
      <div className="cards">
        {specials.map((item) => (
          <div className="card" key={item.name}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="rating">{renderStars(item.rating)}</div>
            <p>{item.desc}</p>
            <span>{item.price}</span>
            <button className="order-btn"><i className="fa-solid fa-truck"></i> Order a delivery</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;