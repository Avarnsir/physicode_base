import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './components/HomePage';
import ProblemsPage from './components/ProblemsPage';
import ProblemView from './components/ProblemView';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleProblemSelect = (problem: any) => {
    setSelectedProblem(problem);
    setCurrentPage('problem');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />;
      case 'problems':
        return <ProblemsPage onProblemSelect={handleProblemSelect} />;
      case 'problem':
        return <ProblemView problem={selectedProblem} onBack={() => setCurrentPage('problems')} />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors">
        <Navigation currentPage={currentPage} onNavigate={handlePageChange} />
        {renderCurrentPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;