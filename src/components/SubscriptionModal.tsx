import React from 'react';
import { X, Check, Crown, Zap, Atom } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const plans = [
    {
      name: 'Feynman',
      subtitle: 'Essential Physics',
      price: 199,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Ad-free experience',
        'Access to all basic problems',
        'Progress tracking',
        'Basic hints system',
        'Community discussions',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Einstein',
      subtitle: 'Advanced Learning',
      price: 399,
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Feynman',
        'Advanced problem sets',
        'Detailed video solutions',
        'Mock exam simulations',
        'Priority support',
        'Offline problem downloads',
        'Custom study plans',
        'Research-level problems'
      ],
      popular: true
    },
    {
      name: 'Newton',
      subtitle: 'Master Physicist',
      price: 699,
      icon: Crown,
      color: 'from-yellow-400 to-orange-500',
      features: [
        'Everything in Einstein',
        'One-on-one mentorship',
        'Exclusive masterclasses',
        'Interview preparation',
        'Research paper discussions',
        'Direct professor access',
        'Career guidance',
        'Certification programs',
        'Early access to new features'
      ],
      popular: false
    }
  ];

  const handleSubscribe = (planName: string, price: number) => {
    console.log(`Subscribing to ${planName} plan for ₹${price}`);
    // Handle subscription logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-6xl rounded-2xl shadow-2xl ${
        isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
      } max-h-[90vh] overflow-y-auto`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Choose Your Physics Journey
            </h2>
            <p className={`mt-2 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Unlock your potential with our physics-themed subscription plans
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-slate-700 text-slate-400 hover:text-white' 
                : 'hover:bg-slate-100 text-slate-500 hover:text-slate-700'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Plans */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                      : isDarkMode
                        ? 'border-slate-600 hover:border-slate-500'
                        : 'border-slate-200 hover:border-slate-300'
                  } ${
                    isDarkMode ? 'bg-slate-700' : 'bg-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {plan.subtitle}
                      </p>
                      <div className="mt-4">
                        <span className={`text-4xl font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          ₹{plan.price}
                        </span>
                        <span className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          /month
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className={`text-sm ${
                            isDarkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Subscribe Button */}
                    <button
                      onClick={() => handleSubscribe(plan.name, plan.price)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                          : isDarkMode
                            ? 'bg-slate-600 hover:bg-slate-500 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                      }`}
                    >
                      Choose {plan.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className={`text-sm ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              All plans include a 7-day free trial. Cancel anytime. Prices in INR.
            </p>
            <div className="mt-4 flex items-center justify-center space-x-6 text-xs">
              <span className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>
                🔒 Secure payment
              </span>
              <span className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>
                💳 All major cards accepted
              </span>
              <span className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>
                🔄 Easy cancellation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;