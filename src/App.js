import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import "./css/Baselines.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Example navigation component
import Footer from './components/Footer';
import About from './about/About';
import Academics from './academics/Academics';
import Gallery from './gallery/Gallery';
import Home from './home/Home';
import Professional from './professional/Professional';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// 404 Page
const NotFound = () => <h2 style={{ textAlign: 'center' }}>404 - Page Not Found</h2>;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar /> {/* Navigation Bar */}
        <Container sx={{ mt: 4 , mb: 4}}> {/* Adds spacing */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/home" element={<Home />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
