import './App.css';
import backgroundImage from '../src/images/background.jpeg';

function App() {
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
