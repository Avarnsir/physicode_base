import React from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  Target, 
  Trophy, 
  Users, 
  Zap, 
  Award,
  Clock,
  Star,
  Play,
  CheckCircle,
  TrendingUp,
  Brain,
  Atom
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const topics = [
    { name: 'Classical Mechanics', problems: 247, color: 'from-blue-500 to-cyan-500', icon: '⚖️' },
    { name: 'Electromagnetism', problems: 189, color: 'from-purple-500 to-pink-500', icon: '⚡' },
    { name: 'Quantum Mechanics', problems: 156, color: 'from-indigo-500 to-purple-500', icon: '🔬' },
    { name: 'Thermodynamics', problems: 134, color: 'from-orange-500 to-red-500', icon: '🌡️' },
    { name: 'Statistical Mechanics', problems: 98, color: 'from-green-500 to-teal-500', icon: '📊' },
    { name: 'Nuclear Physics', problems: 76, color: 'from-red-500 to-pink-500', icon: '☢️' },
  ];

  const features = [
    {
      icon: Target,
      title: 'Topic-wise Practice',
      description: 'Master physics concepts with problems organized by classical mechanics, E&M, quantum, and more.',
    },
    {
      icon: Trophy,
      title: 'Difficulty Levels',
      description: 'Progress from easy undergraduate problems to challenging graduate-level and research questions.',
    },
    {
      icon: Brain,
      title: 'Smart Hints System',
      description: 'Get contextual hints and step-by-step guidance without spoiling the learning experience.',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics and personalized learning insights.',
    },
  ];

  const stats = [
    { label: 'Total Problems', value: '900+', icon: BookOpen },
    { label: 'Active Users', value: '12K+', icon: Users },
    { label: 'Universities', value: '50+', icon: Award },
    { label: 'Success Rate', value: '89%', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>The LeetCode for Physics Students</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Master Physics Through
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
              Daily Practice
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of physics students and professionals practicing core concepts, 
            preparing for entrance exams, and sharpening their problem-solving skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => onNavigate('problems')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Start Practicing</span>
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Browse Problems</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/50 backdrop-blur-sm border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Practice by <span className="text-blue-600">Topic</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from our comprehensive collection of physics problems, organized by major areas of study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-slate-100"
              onClick={() => onNavigate('problems')}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${topic.color} rounded-xl mb-4 text-white text-xl`}>
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{topic.name}</h3>
              <p className="text-slate-600 mb-4">{topic.problems} problems available</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Start practicing</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to <span className="text-blue-400">Excel</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built by physicists, for physicists. Our platform provides all the tools you need to master physics concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Physics Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students already improving their physics problem-solving skills daily.
            </p>
            <button 
              onClick={() => onNavigate('problems')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;