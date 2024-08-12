import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      <main className="about-main">
        <section className="about-section">
          <h2>About Us</h2>
          <p>We are dedicated to promoting eco-friendly cooking practices. Our mission is to reduce food waste and inspire sustainable cooking habits.</p>
          <p>Our app allows you to generate new recipes using generative AI, ensuring that you can always find new and exciting ways to use your ingredients.</p>
          <p>Join us in our journey to make the world a greener place, one recipe at a time.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
