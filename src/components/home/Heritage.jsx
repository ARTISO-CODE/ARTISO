import React from 'react';
import './Heritage.css';

const Heritage = () => {
  return (
    <section className="heritage" id="heritage">
      <div className="heritage-content">
        <div className="heritage-text">
          <h2>Notre Héritage</h2>
          <p className="subtitle">Un Art de Vivre Hérité des Générations Passées</p>
          <p className="description">
            Depuis des générations, les artisans marocains perpétuent des techniques ancestrales, transmettant un savoir-faire unique et précieux. Chaque pièce de notre collection incarne cet héritage vivant, unissant l'élégance de la tradition à un design contemporain pensé pour sublimer votre quotidien.
          </p>
          <div className="heritage-stats">
            <div className="stat">
              <span className="stat-number">+100</span>
              <span className="stat-label">Familles d'Artisans</span>
            </div>
            <div className="stat">
              <span className="stat-number">+50</span>
              <span className="stat-label">Ans de Tradition</span>
            </div>
            <div className="stat">
              <span className="stat-number">+1000</span>
              <span className="stat-label">Pièces Uniques</span>
            </div>
          </div>
        </div>
        <div className="heritage-image">
          <img src="https://amboora.com/cdn/shop/articles/artisanship-618689.jpg?v=1717511247" />
        </div>
      </div>
    </section>
  );
};

export default Heritage;