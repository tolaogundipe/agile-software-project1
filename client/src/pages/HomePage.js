import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";
import { stubRecipe } from "../constants/stub";

// prettier-ignore
const HomePage = () => {
    // If cannot fetch data from the server, use stub data
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/recipes");

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const text = await response.text();
                const data = JSON.parse(text);
                console.log("Parsed data:", data);
                setRecipes(data.recipes);
            } catch (error) {
                console.error("Error parsing JSON or network issue:", error);
            }
        };

        fetchData();
    }, []);
    
  return (  
    <>
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
                <SearchBar />
            </section>
            <section className="featured-recipes">
                <h3>Featured Recipes</h3>
                <div className="recipe-grid">
                    {recipes.map((recipes, index) => {
                        return (
                            <RecipeCard
                                key={index}
                                id={recipes._id}
                                title={recipes.title}
                                image={recipes.image}
                                time={recipes.time}
                                difficulty={recipes.difficulty}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
        <Footer />
    </>
  );
};

export default HomePage;
