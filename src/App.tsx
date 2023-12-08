import { Routes, Route } from 'react-router-dom';
import HomePage from './app/HomePage';
import LoginPage from './app/LoginPage';
import SignupPage from './app/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
