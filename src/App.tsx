import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { BuildingViewer } from './components/building-viewer';
import { MapViewer } from './components/map-viewer';
import { LoginForm } from './components/login-form';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/building" element={<BuildingViewer />} />
          <Route path="/map" element={<MapViewer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}
//rota base redireciona pra login msm
export default App;
