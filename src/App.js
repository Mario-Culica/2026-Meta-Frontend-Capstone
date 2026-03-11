import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Specials Section */}
        <section id="menu">
          <Specials />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Booking Form Section */}
        <section id="reservations">
          <BookingForm />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;