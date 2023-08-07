import $ from 'jquery';
import React, { useEffect } from "react";
import "./App.css";
import backgroundImage from "./images/UFMS.jpg";

function App() {
  useEffect(() => {
    $(".name-label").click(() => {
      $(".details-wrapper").toggleClass("open"); // adiciona ou remove a classe "open" na div "details-wrapper"
      $(".background-image-wrapper").toggleClass("open"); // adiciona ou remove a classe "open" na div "background-image-wrapper"
    });
  }, []);

  return (
    <div className="App">
      <div className="background">
        <img src={backgroundImage} alt="background" />
      </div>
      <nav className="nav-bar">
        <div className="nav-container">
          {/* seu conteúdo da navegação */}
        </div>
      </nav>
    </div>
  );
}

export default App;