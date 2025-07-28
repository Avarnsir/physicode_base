import React from 'react';
import { Atom, BookOpen, Trophy, User, Menu, X, Moon, Sun, Crown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AuthModal from './AuthModal';
import SubscriptionModal from './SubscriptionModal';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'signin' | 'signup'>('signin');
  const [subscriptionModalOpen, setSubscriptionModalOpen] = React.useState(false);
  
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', icon: Atom },
    { id: 'problems', label: 'Problems', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: Trophy },
  ];

  return (
    <>
    <nav className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors ${
      isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isDarkMode ? 'text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}>
                PhysicsCode
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? isDarkMode ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'
                      : isDarkMode ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-yellow-400 hover:bg-slate-800' 
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setSubscriptionModalOpen(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isDarkMode ? 'text-slate-300 hover:text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Crown className="w-4 h-4" />
              <span className="font-medium">Upgrade</span>
            </button>
            <button 
              onClick={() => { setAuthMode('signin'); setAuthModalOpen(true); }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isDarkMode ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Sign In</span>
            </button>
            <button 
              onClick={() => { setAuthMode('signup'); setAuthModalOpen(true); }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'text-slate-300 hover:bg-slate-800' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t py-4 ${
            isDarkMode ? 'border-slate-700' : 'border-slate-200'
          }`}>
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                      currentPage === item.id
                        ? isDarkMode ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'
                        : isDarkMode ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className={`pt-4 border-t mt-4 space-y-2 ${
              isDarkMode ? 'border-slate-700' : 'border-slate-200'
            }`}>
              <button
                onClick={toggleDarkMode}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  isDarkMode ? 'text-slate-300 hover:text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button 
                onClick={() => { setSubscriptionModalOpen(true); setIsMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  isDarkMode ? 'text-slate-300 hover:text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>Upgrade</span>
              </button>
              <button 
                onClick={() => { setAuthMode('signin'); setAuthModalOpen(true); setIsMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                  isDarkMode ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Sign In
              </button>
              <button 
                onClick={() => { setAuthMode('signup'); setAuthModalOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    
    <AuthModal
      isOpen={authModalOpen}
      onClose={() => setAuthModalOpen(false)}
      mode={authMode}
      onModeChange={setAuthMode}
    />
    
    <SubscriptionModal
      isOpen={subscriptionModalOpen}
      onClose={() => setSubscriptionModalOpen(false)}
    />
    </>
  );
};

export default Navigation;