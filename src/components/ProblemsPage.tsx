import React, { useState } from 'react';
import { Search, Filter, Clock, Star, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  acceptance: number;
  solved: boolean;
  likes: number;
  timeEstimate: string;
}

interface ProblemsPageProps {
  onProblemSelect: (problem: Problem) => void;
}

const ProblemsPage: React.FC<ProblemsPageProps> = ({ onProblemSelect }) => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    'All', 'Classical Mechanics', 'Electromagnetism', 'Electrodynamics', 'Quantum Mechanics', 
    'Atomic Physics', 'Particle Physics', 'Nuclear Physics', 'Thermodynamics', 
    'Statistical Mechanics', 'Special Relativity', 'General Relativity', 'Astronomy', 'Astrophysics'
  ];

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const problems: Problem[] = [
    {
      id: 1,
      title: 'Simple Harmonic Motion - Spring-Mass System',
      difficulty: 'Easy',
      topic: 'Classical Mechanics',
      acceptance: 78.4,
      solved: true,
      likes: 234,
      timeEstimate: '15 min'
    },
    {
      id: 2,
      title: 'Electric Field of Point Charges',
      difficulty: 'Easy',
      topic: 'Electromagnetism',
      acceptance: 72.1,
      solved: true,
      likes: 189,
      timeEstimate: '20 min'
    },
    {
      id: 3,
      title: 'Particle in a Box - Energy Eigenvalues',
      difficulty: 'Medium',
      topic: 'Quantum Mechanics',
      acceptance: 45.6,
      solved: false,
      likes: 312,
      timeEstimate: '35 min'
    },
    {
      id: 4,
      title: 'Carnot Engine Efficiency',
      difficulty: 'Medium',
      topic: 'Thermodynamics',
      acceptance: 52.3,
      solved: false,
      likes: 267,
      timeEstimate: '25 min'
    },
    {
      id: 5,
      title: 'Central Force Motion - Kepler Problem',
      difficulty: 'Hard',
      topic: 'Classical Mechanics',
      acceptance: 28.9,
      solved: false,
      likes: 445,
      timeEstimate: '60 min'
    },
    {
      id: 6,
      title: 'Maxwell Equations - Wave Propagation',
      difficulty: 'Hard',
      topic: 'Electromagnetism',
      acceptance: 31.2,
      solved: false,
      likes: 389,
      timeEstimate: '55 min'
    },
    {
      id: 7,
      title: 'Hydrogen Atom - Radial Wave Functions',
      difficulty: 'Hard',
      topic: 'Quantum Mechanics',
      acceptance: 24.7,
      solved: false,
      likes: 512,
      timeEstimate: '75 min'
    },
    {
      id: 8,
      title: 'Phase Transitions - Critical Phenomena',
      difficulty: 'Hard',
      topic: 'Statistical Mechanics',
      acceptance: 19.8,
      solved: false,
      likes: 298,
      timeEstimate: '90 min'
    }
  ];

  const filteredProblems = problems.filter(problem => {
    const matchesTopic = selectedTopic === 'All' || problem.topic === selectedTopic;
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.topic.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTopic && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return CheckCircle;
      case 'Medium': return AlertCircle;
      case 'Hard': return XCircle;
      default: return CheckCircle;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Physics Problems</h1>
        <p className="text-slate-600">Practice and master core physics concepts</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Topic Filter */}
          <div>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-center md:justify-start">
            <span className="text-slate-600 font-medium">
              {filteredProblems.length} problems found
            </span>
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map((problem) => {
          const DifficultyIcon = getDifficultyIcon(problem.difficulty);
          
          return (
            <div
              key={problem.id}
              onClick={() => onProblemSelect(problem)}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {problem.solved ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-slate-300 rounded-full" />
                    )}
                    <h3 className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                      {problem.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-md font-medium flex items-center space-x-1 ${getDifficultyColor(problem.difficulty)}`}>
                      <DifficultyIcon className="w-3 h-3" />
                      <span>{problem.difficulty}</span>
                    </span>
                    <span className="text-slate-500">{problem.topic}</span>
                    <div className="flex items-center space-x-1 text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{problem.timeEstimate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{problem.likes}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-slate-900">{problem.acceptance}%</div>
                    <div className="text-xs">Acceptance</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProblems.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No problems found</h3>
          <p className="text-slate-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProblemsPage;