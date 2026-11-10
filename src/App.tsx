import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/pages/LandingPage';

export default function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}
