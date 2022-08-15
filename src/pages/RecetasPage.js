import React from "react";
import "../styles/components/pages/RecetasPage.css";

const RecetasPage = (props) => {
    return (
        <main className="holder fondo">
      <div className="recetas">
        <h2>Nuestras Recetas</h2>
      </div>
      <div className="containerrecetas">
        <div className="receta">
          <img src="img/recetaempanadas.jpg" alt="empanadas sin gluten" />
          <h3>Empanadas sin tacc</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Ullam nemo ad, tenetur repellendus cumque ipsum illum
            accusamus neque architecto cupiditate vel veritatis, aliquam
            mollitia maiores recusandae maxime accusantium.
          </p>
        </div>
        <div className="receta">
          <img
            src="img/recetasmilanesas.png"
            alt="milanesas aptas para celíacos"
          />
          <h3>Milanesas aptas para celíacos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Ullam nemo ad, tenetur repellendus cumque ipsum illum
            accusamus neque architecto cupiditate vel veritatis, aliquam
            mollitia maiores recusandae maxime accusantium.
          </p>
        </div>
        <div className="receta">
          <img src="img/recetasñoquis.jpg" alt="ñoquis si tacc" />
          <h3>Ñoquis rellenos aptos para celíacos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Ullam nemo ad, tenetur repellendus cumque ipsum illum
            accusamus neque architecto cupiditate vel veritatis, aliquam
            mollitia maiores recusandae maxime accusantium.
          </p>
        </div>
      </div>
      <div className="containerrecetas">
        <div className="receta">
          <img
            src="img/recetaalfajordechocolate.jpg"
            alt="alfajores sin tacc"
          />
          <h3>Alfajores de chocolate sin tacc</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Ullam nemo ad, tenetur repellendus cumque ipsum illum
            accusamus neque architecto cupiditate vel veritatis, aliquam
            mollitia maiores recusandae maxime accusantium.
          </p>
        </div>
        <div className="receta">
          <img src="img/recetabarritademuesli.png" alt="barritas de muesli" />
          <h3>Barritas de Muesli</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Ullam nemo ad, tenetur repellendus cumque ipsum illum
            accusamus neque architecto cupiditate vel veritatis, aliquam
            mollitia maiores recusandae maxime accusantium.
          </p>
        </div>
        <div className="receta">
          <img src="img/recetagalletitas.png" alt="galletas dulces sin tacc" />
          <h3>Galletitas dulces sin tacc</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Ullam nemo ad, tenetur repellendus cumque ipsum illum
            accusamus neque architecto cupiditate vel veritatis, aliquam
            mollitia maiores recusandae maxime accusantium.
          </p>
        </div>
      </div>
    </main>
    );
}

export default RecetasPage;