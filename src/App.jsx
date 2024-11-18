import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Simulator } from './pages/Simulator';
import Base_Template from './components/base_template';
import AboutEntona from './pages/About';

export function App() {
    return (
        <Router>
            <Base_Template>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/simulator" element={<Simulator />} />
                    <Route path="/about" element={<AboutEntona />} />
                </Routes>
            </Base_Template>
        </Router>
    );
}

export default App;
