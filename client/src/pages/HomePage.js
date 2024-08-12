import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import './HomePage.css';

const HomePage = () => (
    <div>
        <Header />
        <main>
            <section className="hero">
                <div className='hero-group'>
                    <div className='hero-text-container'>
                        <h2>Create eco-friendly Recipes</h2>
                        <p>We will also focus on eco-friendly cooking to help cut down on food waste. </p>
                        <p>You can generate new recipe using generative AI.</p>
                        <button ><a href='/create-recipe'>Get Started</a></button>
                    </div>
                    <div className='hero-image-container'>
                        <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" alt="Delicious food" className="hero-image" />
                    </div>
                    
                </div>
                <SearchBar></SearchBar>
            </section>
            <section className="featured-recipes">
                <h3>Featured Recipes</h3>
                <div className="recipe-grid">
                    <RecipeCard 
                        title="Eco Friendly Recipe"
                        image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        time="5 mins"
                        difficulty="Easy"
                    />
                    <RecipeCard
                        title="Eco Friendly Recipe"
                        image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        time="5 mins"
                        difficulty="Easy"
                    />
                    <RecipeCard
                        title="Eco Friendly Recipe"
                        image="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg"
                        time="5 mins"
                        difficulty="Easy"
                    />
                    <RecipeCard
                        title="Eco Friendly Recipe"
                        image="https://images.pexels.com/photos/2181151/pexels-photo-2181151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        time="5 mins"
                        difficulty="Easy"
                    />
                    <RecipeCard
                        title="Eco Friendly Recipe"
                        image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        time="5 mins"
                        difficulty="Easy"
                    />
                    <RecipeCard
                        title="Eco Friendly Recipe"
                        image="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        time="5 mins"
                        difficulty="Easy"
                    />
                    {/* Add more RecipeCard components as needed */}
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default HomePage;
