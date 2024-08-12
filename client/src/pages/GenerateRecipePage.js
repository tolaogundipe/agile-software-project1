import React from 'react';
import './GenerateRecipePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenerateRecipePage = () => {
  return (
    <div className="generate-recipe-page">
      <Header />
      <main>
        <section className='generate-recipe-hero'>
            <div className="generate-recipe-hero-overlay"></div>
            <div className='generate-recipe-hero-content'>
                <h1>Create Eco-friendly Recipe with AI</h1>
                <form>
                    <input type="text" placeholder="Enter ingredients" />
                    <button type="submit">Generate Recipe</button>
                </form>
            </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default GenerateRecipePage;
