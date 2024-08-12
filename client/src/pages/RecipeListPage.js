import React from 'react';
import './RecipeListPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const RecipeListPage = () => {
  return (
    <div className="recipe-list-page">
      <Header />
      <main>
      <section className="header-hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Read eco-friendly recipe or article</h1>
        <p>We will also focus on eco-friendly cooking to help cut down on food waste. 
        You can generate new recipe using generative AI.</p>
      </div>
    </section>
    <SearchBar></SearchBar>
        <div className="recipe-list">
          <RecipeCard 
           title="Eco Friendly Recipe"
           image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           time="5 mins"
           difficulty="Easy"
          />
          <RecipeCard 
           title="Eco Friendly Recipe"
           image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           time="5 mins"
           difficulty="Easy"
          />
          <RecipeCard 
           title="Eco Friendly Recipe"
           image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           time="5 mins"
           difficulty="Easy"
          />
           <RecipeCard 
           title="Eco Friendly Recipe"
           image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           time="5 mins"
           difficulty="Easy"
          />
           <RecipeCard 
           title="Eco Friendly Recipe"
           image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           time="5 mins"
           difficulty="Easy"
          />
           <RecipeCard 
           title="Eco Friendly Recipe"
           image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           time="5 mins"
           difficulty="Easy"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipeListPage;
