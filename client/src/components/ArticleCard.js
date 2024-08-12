import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ image, title, description, date }) => {
    return (
        <div className="article-card">
            <img src={image} alt={title} className="article-image" />
            <div className="article-content">
                <a href='/article-page'><h2 className="article-title">{title}</h2></a>
                <p className="article-description">{description}</p>
                <p className="article-date">{date}</p>
            </div>
        </div>
    );
};

export default ArticleCard;
