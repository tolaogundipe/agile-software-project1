import React from 'react';
import './ArticlePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';

const ArticlePage = () => {
    return (
        <div>
            <Header />
            <main className="article-main">
                <section className="article-hero">
                    <h1 className="article-page-title">Best Ever Fish and Chips Recipe</h1>
                    <p className="article-author">By Author Name</p>
                    <img
                        src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
                        alt="Fish and Chips"
                        className="article-page-image"
                    />
                </section>
                <section className="article-page-content">
                    <p>
                        When you want your whole family to adopt healthier eating habits without anyone feeling like they're missing out, you can’t go wrong with the Mediterranean diet. It’s based on the way people actually live in the region — and that includes kids.
                    </p>
                    <p>
                        Family-friendly meal planning for the Mediterranean diet lets you include healthy versions of your children's favorites, like chicken tenders, meatballs, and fish sticks, along with abundant fresh fruit and vegetables. And thanks to sophisticated but familiar seasoning with herbs and spices, kid-friendly Mediterranean diet recipes will satisfy the grown-ups, too. Check out this Mediterranean diet meal plan, which features a full week’s worth of dinners your family will love, as well as snacks — and even dessert.
                    </p>
                </section>
                <section className="featured-articles">
                    <h3>Featured Articles</h3>
                    <div className="article-grid">
                        <ArticleCard 
                            image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            title="Healthy life recipe" 
                        />
                        <ArticleCard 
                            image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            title="Eco friendly recipe"
                        />
                        <ArticleCard 
                            image="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg"
                            title="Recipe life article"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ArticlePage;
