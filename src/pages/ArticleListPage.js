import React from 'react';
import './ArticleListPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';

const ArticleListPage = () => {
  return (
    <div className="article-list-page">
      <Header />
      <main>
      <section className="header-hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Read eco-friendly article</h1>
        <p>We will also focus on eco-friendly cooking to help cut down on food waste. 
        You can generate new recipe using generative AI.</p>
      </div>
    </section>
    <SearchBar></SearchBar>
        <div className="article-list">
            <ArticleCard 
                image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Article Title 1"
                description="We will also focus on eco-friendly cooking to help cut down on food waste. You can generate new recipe using generative AI."
                date="2024/04/20"
            />
            <ArticleCard 
                image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Article Title 2"
                description="Another description for a different article. More content here."
                date="2024/04/21"
            />
            <ArticleCard 
                image="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg"
                title="Article Title 3"
                description="Another description for a different article. More content here."
                date="2024/04/22"
            />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleListPage;
