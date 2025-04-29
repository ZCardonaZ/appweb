import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/Characters/CharacterList';
import CharacterDetail from './components/Characters/CharacterDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;