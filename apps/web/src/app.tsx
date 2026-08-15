import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { Navbar } from './components/navbar';

export function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
