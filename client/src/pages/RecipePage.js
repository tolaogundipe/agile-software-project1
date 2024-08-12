import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RecipePage.css';

const RecipePage = () => {
    return (
        <div>
            <Header />
            <main className="recipe-main">
                <section className="recipe-hero">
                    <img
                        src="https://images.pexels.com/photos/20183046/pexels-photo-20183046/free-photo-of-close-up-of-baklava-pieces-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Baklava"
                        className="recipe-image"
                    />
                    <div className="recipe-details">
                        <h1>Baklava</h1>
                        <p className="recipe-author">by Garrett McCord</p>
                        <div className="recipe-rating">
                            <span>★★★★★</span>
                        </div>
                        <p className="recipe-description">
                            Layers of syrup soaked phyllo dough meet honey, nuts and warming spices in this traditional baklava recipe.
                        </p>
                        <div className="recipe-buttons">
                            <button className="save-button">Save recipe</button>
                            <button className="print-button">Print recipe</button>
                        </div>
                    </div>
                </section>
                <section className="recipe-ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        <li><span>1</span> List item <input type="checkbox" /></li>
                        <li><span>2</span> List item <input type="checkbox" /></li>
                        <li><span>3</span> List item <input type="checkbox" /></li>
                    </ul>
                </section>
                <section className="recipe-directions">
                    <h2>Direction</h2>
                    <ul>
                        <li><span>1</span> List item <input type="checkbox" /></li>
                        <li><span>2</span> List item <input type="checkbox" /></li>
                        <li><span>3</span> List item <input type="checkbox" /></li>
                    </ul>
                </section>
                <section className="recipe-video">
                    <h2>How to cook</h2>
                    <div className="video-placeholder">
                        <div className="play-button">▶</div>
                    </div>
                </section>
                <section className="nutrition-info">
                    <h2>Nutrition Information</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Calories</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>Total Fat</td>
                                <td>10g</td>
                            </tr>
                            <tr>
                                <td>Saturated Fat</td>
                                <td>5g</td>
                            </tr>
                            <tr>
                                <td>Cholesterol</td>
                                <td>50mg</td>
                            </tr>
                            <tr>
                                <td>Sodium</td>
                                <td>500mg</td>
                            </tr>
                            <tr>
                                <td>Total Carbohydrates</td>
                                <td>20g</td>
                            </tr>
                            <tr>
                                <td>Dietary Fiber</td>
                                <td>5g</td>
                            </tr>
                            <tr>
                                <td>Sugars</td>
                                <td>2g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>20g</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </div>
    );
};
export default RecipePage;
