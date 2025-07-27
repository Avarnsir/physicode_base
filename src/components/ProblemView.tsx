import React, { useState } from 'react';
import { ArrowLeft, Clock, Star, BookOpen, Lightbulb, CheckCircle, AlertCircle, Share2 } from 'lucide-react';

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

interface ProblemViewProps {
  problem: Problem | null;
  onBack: () => void;
}

const ProblemView: React.FC<ProblemViewProps> = ({ problem, onBack }) => {
  const [activeTab, setActiveTab] = useState('problem');
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Problem not found</h2>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Problems
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Hard': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // In a real app, this would validate against the correct answer
  };

  const problemContent = {
    1: {
      statement: `A mass m = 2.0 kg is attached to a spring with spring constant k = 200 N/m. The mass is displaced from equilibrium by x₀ = 0.1 m and released.

**Find:**
1. The angular frequency ω of oscillation
2. The period T of oscillation  
3. The maximum velocity v_max
4. Write the position equation x(t) assuming the mass starts at maximum displacement

**Given:**
- Mass: m = 2.0 kg
- Spring constant: k = 200 N/m  
- Initial displacement: x₀ = 0.1 m
- Initial velocity: v₀ = 0 m/s`,
      
      hint: `Remember that for simple harmonic motion:
- Angular frequency: ω = √(k/m)
- Period: T = 2π/ω
- Energy conservation: ½kx₀² = ½mv_max²
- General solution: x(t) = A cos(ωt + φ)`,
      
      solution: `**Solution:**

1. **Angular frequency:**
   ω = √(k/m) = √(200/2.0) = √100 = 10 rad/s

2. **Period:**
   T = 2π/ω = 2π/10 = π/5 ≈ 0.628 s

3. **Maximum velocity:**
   Using energy conservation: ½kx₀² = ½mv_max²
   v_max = x₀√(k/m) = 0.1 × 10 = 1.0 m/s

4. **Position equation:**
   Since the mass starts at maximum displacement with zero velocity:
   x(t) = 0.1 cos(10t) m

**Answer:** ω = 10 rad/s, T = 0.628 s, v_max = 1.0 m/s, x(t) = 0.1 cos(10t) m`
    }
  };

  const currentProblem = problemContent[problem.id as keyof typeof problemContent] || {
    statement: "Problem content loading...",
    hint: "Hint not available",
    solution: "Solution not available"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Problems</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{problem.title}</h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-lg font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              <span className="text-slate-600">{problem.topic}</span>
              <div className="flex items-center space-x-1 text-slate-500">
                <Clock className="w-4 h-4" />
                <span>{problem.timeEstimate}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex items-center space-x-1 text-slate-500">
              <Star className="w-4 h-4" />
              <span>{problem.likes}</span>
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-medium text-slate-900">{problem.acceptance}%</span> Acceptance
            </div>
            <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Problem Statement */}
        <div className="space-y-6">
          {/* Tabs */}
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8">
              {[
                { id: 'problem', label: 'Problem', icon: BookOpen },
                { id: 'hint', label: 'Hint', icon: Lightbulb },
                { id: 'solution', label: 'Solution', icon: CheckCircle }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            {activeTab === 'problem' && (
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-line text-slate-700 leading-relaxed">
                  {currentProblem.statement}
                </div>
              </div>
            )}

            {activeTab === 'hint' && (
              <div className="prose prose-slate max-w-none">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-900">Hint</h3>
                  </div>
                  <div className="text-blue-800 whitespace-pre-line">
                    {currentProblem.hint}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="prose prose-slate max-w-none">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-900">Official Solution</h3>
                  </div>
                  <div className="text-green-800 whitespace-pre-line">
                    {currentProblem.solution}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Answer Submission */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Submit Your Answer</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Solution
                </label>
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your solution here... Show your work step by step."
                  className="w-full h-40 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  Submit Solution
                </button>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Get Hint
                </button>
              </div>
            </div>

            {submitted && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <h4 className="font-medium text-blue-900">Solution Submitted!</h4>
                </div>
                <p className="text-blue-800 mt-2">
                  Your solution has been recorded. Check the "Solution" tab to compare with the official answer.
                </p>
              </div>
            )}
          </div>

          {/* Problem Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Problem Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Acceptance Rate</span>
                <span className="font-medium text-slate-900">{problem.acceptance}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Submissions</span>
                <span className="font-medium text-slate-900">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Successful Attempts</span>
                <span className="font-medium text-slate-900">978</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Average Time</span>
                <span className="font-medium text-slate-900">{problem.timeEstimate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemView;