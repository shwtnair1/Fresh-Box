import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Recipes from './pages/Recipes';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
