const reviews = [
  { name: "John", text: "Amazing food!", img: "/images/user1.jpg" },
  { name: "Bob", text: "Best restaurant ever!", img: "/images/user2.jpg" },
  { name: "Carollina", text: "Loved it!", img: "/images/user3.jpg" },
  
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="cards">
        {reviews.map((r) => (
          <div className="card" key={r.name}>
            <img src={r.img} alt={r.name} />
            <p>{r.text}</p>
            <span>{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;