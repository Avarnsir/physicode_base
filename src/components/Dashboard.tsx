import React, { useState } from 'react';
import { Trophy, Target, Clock, TrendingUp, Calendar, Award, Zap, BookOpen, Users, Star, Medal, Crown, ChevronUp, ChevronDown, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // User progress data
  const userStats = {
    totalSolved: 47,
    totalProblems: 1800,
    easySolved: 25,
    easyTotal: 800,
    mediumSolved: 18,
    mediumTotal: 700,
    hardSolved: 4,
    hardTotal: 300,
    currentLevel: 12,
    currentXP: 2340,
    xpToNextLevel: 2500,
    rank: 1247,
    totalUsers: 12000,
    streak: 12,
    acceptanceRate: 78.4
  };

  // XP calculation: Easy = 10XP, Medium = 25XP, Hard = 50XP
  const calculateXP = () => {
    return (userStats.easySolved * 10) + (userStats.mediumSolved * 25) + (userStats.hardSolved * 50);
  };

  const getLevelFromXP = (xp: number) => {
    return Math.floor(xp / 200) + 1; // Every 200 XP = 1 level
  };

  const getXPForNextLevel = (currentXP: number) => {
    const currentLevel = getLevelFromXP(currentXP);
    return currentLevel * 200;
  };

  const getLevelTitle = (level: number) => {
    if (level < 5) return { title: 'Novice Physicist', color: 'from-gray-500 to-gray-600', icon: '🔬' };
    if (level < 10) return { title: 'Student Researcher', color: 'from-blue-500 to-blue-600', icon: '📚' };
    if (level < 15) return { title: 'Problem Solver', color: 'from-green-500 to-green-600', icon: '⚡' };
    if (level < 20) return { title: 'Physics Expert', color: 'from-purple-500 to-purple-600', icon: '🧠' };
    if (level < 30) return { title: 'Theoretical Master', color: 'from-orange-500 to-red-500', icon: '🏆' };
    return { title: 'Physics Legend', color: 'from-yellow-400 to-yellow-600', icon: '👑' };
  };

  const stats = [
    { label: 'Problems Solved', value: userStats.totalSolved.toString(), change: '+5 this week', icon: Target, color: 'from-blue-500 to-cyan-500' },
    { label: 'Current Streak', value: userStats.streak.toString(), change: 'days', icon: Zap, color: 'from-orange-500 to-red-500' },
    { label: 'Total XP', value: userStats.currentXP.toString(), change: '+180 this week', icon: Trophy, color: 'from-purple-500 to-pink-500' },
    { label: 'Global Rank', value: `#${userStats.rank}`, change: `Top ${Math.round((userStats.rank / userStats.totalUsers) * 100)}%`, icon: Medal, color: 'from-green-500 to-teal-500' },
  ];

  const recentActivity = [
    { problem: 'Simple Harmonic Motion - Spring-Mass', status: 'Solved', time: '2 hours ago', difficulty: 'Easy', xp: 10 },
    { problem: 'Electric Field of Point Charges', status: 'Solved', time: '1 day ago', difficulty: 'Easy', xp: 10 },
    { problem: 'Particle in a Box - Energy Eigenvalues', status: 'Attempted', time: '2 days ago', difficulty: 'Medium', xp: 0 },
    { problem: 'Carnot Engine Efficiency', status: 'Solved', time: '3 days ago', difficulty: 'Medium', xp: 25 },
  ];

  const topicProgress = [
    { topic: 'Classical Mechanics', solved: 15, total: 25, progress: 60, xp: 275, rank: 'Expert' },
    { topic: 'Electromagnetism', solved: 12, total: 20, progress: 60, xp: 220, rank: 'Advanced' },
    { topic: 'Quantum Mechanics', solved: 8, total: 18, progress: 44, xp: 150, rank: 'Intermediate' },
    { topic: 'Thermodynamics', solved: 7, total: 15, progress: 47, xp: 125, rank: 'Intermediate' },
    { topic: 'Electrodynamics', solved: 5, total: 16, progress: 31, xp: 100, rank: 'Beginner' },
    { topic: 'Atomic Physics', solved: 4, total: 14, progress: 29, xp: 85, rank: 'Beginner' },
    { topic: 'Particle Physics', solved: 3, total: 17, progress: 18, xp: 75, rank: 'Beginner' },
    { topic: 'Nuclear Physics', solved: 2, total: 12, progress: 17, xp: 50, rank: 'Beginner' },
    { topic: 'Statistical Mechanics', solved: 3, total: 12, progress: 25, xp: 75, rank: 'Beginner' },
    { topic: 'Special Relativity', solved: 1, total: 9, progress: 11, xp: 25, rank: 'Novice' },
    { topic: 'General Relativity', solved: 0, total: 8, progress: 0, xp: 0, rank: 'Novice' },
    { topic: 'Astronomy', solved: 2, total: 11, progress: 18, xp: 45, rank: 'Beginner' },
    { topic: 'Astrophysics', solved: 1, total: 13, progress: 8, xp: 25, rank: 'Novice' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Dr. Sarah Chen', xp: 8450, level: 42, solved: 234, avatar: '👩‍🔬' },
    { rank: 2, name: 'Prof. Michael Kumar', xp: 7890, level: 39, solved: 198, avatar: '👨‍🏫' },
    { rank: 3, name: 'Alex Rodriguez', xp: 7234, level: 36, solved: 187, avatar: '🧑‍🎓' },
    { rank: 4, name: 'Dr. Emily Watson', xp: 6789, level: 33, solved: 176, avatar: '👩‍💼' },
    { rank: 5, name: 'James Thompson', xp: 6234, level: 31, solved: 165, avatar: '👨‍🔬' },
    { rank: 1247, name: 'You', xp: userStats.currentXP, level: userStats.currentLevel, solved: userStats.totalSolved, avatar: '🧑‍🎓', isCurrentUser: true },
  ];

  const achievements = [
    { title: 'First Steps', description: 'Solved your first problem', icon: '🎯', unlocked: true, xp: 10 },
    { title: 'Problem Solver', description: 'Solved 10 problems', icon: '💡', unlocked: true, xp: 50 },
    { title: 'Consistent Learner', description: '7-day solving streak', icon: '🔥', unlocked: true, xp: 100 },
    { title: 'Topic Master', description: 'Complete a topic with 80%+', icon: '🏆', unlocked: false, xp: 200 },
    { title: 'Speed Demon', description: 'Solve 5 problems in one day', icon: '⚡', unlocked: true, xp: 75 },
    { title: 'Hard Hitter', description: 'Solve 10 hard problems', icon: '💪', unlocked: false, xp: 500 },
  ];

  // Generate contribution grid data (GitHub-style)
  const generateContributionData = () => {
    const data = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364); // 52 weeks

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      // Simulate random activity with some patterns
      let count = 0;
      const dayOfWeek = date.getDay();
      const random = Math.random();
      
      // More activity on weekdays, less on weekends
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        if (random < 0.7) count = Math.floor(Math.random() * 5) + 1;
      } else {
        if (random < 0.4) count = Math.floor(Math.random() * 3) + 1;
      }
      
      data.push({
        date: date.toISOString().split('T')[0],
        count,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      });
    }
    return data;
  };

  const contributionData = generateContributionData();
  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-slate-100';
    if (count <= 2) return 'bg-green-200';
    if (count <= 4) return 'bg-green-400';
    if (count <= 6) return 'bg-green-600';
    return 'bg-green-800';
  };

  const getContributionIntensity = (count: number) => {
    if (count === 0) return 'No problems solved';
    if (count <= 2) return `${count} problem${count > 1 ? 's' : ''} solved`;
    if (count <= 4) return `${count} problems solved`;
    if (count <= 6) return `${count} problems solved - Great day!`;
    return `${count} problems solved - Amazing!`;
  };

  const currentLevelInfo = getLevelTitle(userStats.currentLevel);
  const xpProgress = ((userStats.currentXP % 200) / 200) * 100;

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Expert': return 'text-purple-600 bg-purple-50';
      case 'Advanced': return 'text-blue-600 bg-blue-50';
      case 'Intermediate': return 'text-green-600 bg-green-50';
      case 'Beginner': return 'text-orange-600 bg-orange-50';
      case 'Novice': return 'text-gray-600 bg-gray-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Track your physics learning progress</p>
      </div>

      {/* Level and Progress Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Level Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${currentLevelInfo.color} rounded-full flex items-center justify-center text-2xl`}>
                {currentLevelInfo.icon}
              </div>
              <div>
                <div className="text-2xl font-bold">Level {userStats.currentLevel}</div>
                <div className="text-blue-100">{currentLevelInfo.title}</div>
              </div>
            </div>
            <div className="text-blue-100">
              Rank #{userStats.rank} • Top {Math.round((userStats.rank / userStats.totalUsers) * 100)}%
            </div>
          </div>

          {/* XP Progress */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Experience Points</span>
              <span className="text-blue-100">{userStats.currentXP} / {getXPForNextLevel(userStats.currentXP)} XP</span>
            </div>
            <div className="w-full bg-blue-500/30 rounded-full h-3 mb-4">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
            
            {/* Problem Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">{userStats.easySolved}</div>
                <div className="text-sm text-blue-100">Easy Solved</div>
                <div className="text-xs text-blue-200">{userStats.easySolved * 10} XP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">{userStats.mediumSolved}</div>
                <div className="text-sm text-blue-100">Medium Solved</div>
                <div className="text-xs text-blue-200">{userStats.mediumSolved * 25} XP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">{userStats.hardSolved}</div>
                <div className="text-sm text-blue-100">Hard Solved</div>
                <div className="text-xs text-blue-200">{userStats.hardSolved * 50} XP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-200 mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: Target },
            { id: 'stats', label: 'Topic Stats', icon: TrendingUp },
            { id: 'contributions', label: 'Contributions', icon: Activity },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
            { id: 'achievements', label: 'Achievements', icon: Award }
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

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                </div>
              );
            })}
          </div>

          {/* Problem Solving Progress */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Problem Solving Progress</h3>
            
            {/* Overall Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-900">Overall Progress</span>
                <span className="text-slate-600">{userStats.totalSolved}/{userStats.totalProblems}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                  style={{ width: `${(userStats.totalSolved / userStats.totalProblems) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-slate-500">
                {Math.round((userStats.totalSolved / userStats.totalProblems) * 100)}% complete • Acceptance Rate: {userStats.acceptanceRate}%
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">{userStats.easySolved}</div>
                <div className="text-sm text-green-700 font-medium mb-2">Easy Problems</div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(userStats.easySolved / userStats.easyTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-green-600 mt-1">
                  {Math.round((userStats.easySolved / userStats.easyTotal) * 100)}% • {userStats.easySolved * 10} XP
                </div>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-1">{userStats.mediumSolved}</div>
                <div className="text-sm text-orange-700 font-medium mb-2">Medium Problems</div>
                <div className="w-full bg-orange-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${(userStats.mediumSolved / userStats.mediumTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-orange-600 mt-1">
                  {Math.round((userStats.mediumSolved / userStats.mediumTotal) * 100)}% • {userStats.mediumSolved * 25} XP
                </div>
              </div>

              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-1">{userStats.hardSolved}</div>
                <div className="text-sm text-red-700 font-medium mb-2">Hard Problems</div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${(userStats.hardSolved / userStats.hardTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-red-600 mt-1">
                  {Math.round((userStats.hardSolved / userStats.hardTotal) * 100)}% • {userStats.hardSolved * 50} XP
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'Solved' ? 'bg-green-400' : 'bg-orange-400'
                  }`}></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{activity.problem}</div>
                    <div className="text-sm text-slate-500">{activity.time}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      activity.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      activity.difficulty === 'Medium' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {activity.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      activity.status === 'Solved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {activity.status}
                    </span>
                    {activity.xp > 0 && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
                        +{activity.xp} XP
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-8">
          {/* Topic Progress */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Physics Topics Progress</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {topicProgress.map((topic, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-slate-900">{topic.topic}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-slate-500">{topic.solved}/{topic.total} solved</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getRankColor(topic.rank)}`}>
                          {topic.rank}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">{topic.xp} XP</div>
                      <div className="text-xs text-slate-500">{topic.progress}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Rankings */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Your Topic Rankings</h3>
            <div className="space-y-4">
              {topicProgress
                .sort((a, b) => b.xp - a.xp)
                .slice(0, 5)
                .map((topic, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      index === 0 ? 'bg-yellow-100 text-yellow-700' :
                      index === 1 ? 'bg-gray-100 text-gray-700' :
                      index === 2 ? 'bg-orange-100 text-orange-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      #{index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{topic.topic}</div>
                      <div className="text-sm text-slate-500">{topic.solved} problems solved</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{topic.xp} XP</div>
                      <div className={`text-xs px-2 py-1 rounded ${getRankColor(topic.rank)}`}>
                        {topic.rank}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contributions' && (
        <div className="space-y-8">
          {/* Contribution Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {totalContributions} problems solved in the last year
                </h3>
                <p className="text-slate-600">
                  Your daily problem-solving activity • Current streak: {userStats.streak} days
                </p>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center space-x-4 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-slate-100 rounded-sm"></div>
                  <span>Less</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Contribution Grid */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <div className="grid grid-cols-53 gap-1 text-xs">
                  {/* Month labels */}
                  <div className="col-span-53 grid grid-cols-53 gap-1 mb-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                      <div key={month} className={`text-slate-500 text-center ${index === 0 ? 'col-start-1' : ''}`} style={{gridColumn: `${Math.floor(index * 4.4) + 1} / span 4`}}>
                        {month}
                      </div>
                    ))}
                  </div>

                  {/* Day labels */}
                  <div className="col-span-1 grid grid-rows-7 gap-1 text-slate-500 text-right pr-2">
                    <div></div>
                    <div>Mon</div>
                    <div></div>
                    <div>Wed</div>
                    <div></div>
                    <div>Fri</div>
                    <div></div>
                  </div>

                  {/* Contribution squares */}
                  <div className="col-span-52 grid grid-cols-52 gap-1">
                    {contributionData.map((day, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} hover:ring-2 hover:ring-blue-300 cursor-pointer transition-all`}
                        title={`${day.date}: ${getContributionIntensity(day.count)}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">{totalContributions}</div>
              <div className="text-sm text-slate-600">Total Problems Solved</div>
              <div className="text-xs text-green-600 mt-1">This Year</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">{userStats.streak}</div>
              <div className="text-sm text-slate-600">Current Streak</div>
              <div className="text-xs text-orange-600 mt-1">Days</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">
                {Math.round(totalContributions / 52)}
              </div>
              <div className="text-sm text-slate-600">Average per Week</div>
              <div className="text-xs text-blue-600 mt-1">Problems</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Global Leaderboard</h3>
          <div className="space-y-3">
            {leaderboard.map((user, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 ${
                  user.isCurrentUser 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200' 
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                  user.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                  user.rank === 2 ? 'bg-gray-100 text-gray-700' :
                  user.rank === 3 ? 'bg-orange-100 text-orange-700' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  {user.rank <= 3 ? (
                    user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'
                  ) : (
                    `#${user.rank}`
                  )}
                </div>
                
                <div className="text-2xl">{user.avatar}</div>
                
                <div className="flex-1">
                  <div className={`font-medium ${user.isCurrentUser ? 'text-blue-900' : 'text-slate-900'}`}>
                    {user.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    Level {user.level} • {user.solved} problems solved
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`font-bold ${user.isCurrentUser ? 'text-blue-600' : 'text-slate-900'}`}>
                    {user.xp.toLocaleString()} XP
                  </div>
                  <div className="text-xs text-slate-500">
                    {getLevelTitle(user.level).title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-center">
              <div className="text-sm text-blue-700 mb-2">
                You're currently ranked #{userStats.rank} out of {userStats.totalUsers.toLocaleString()} users
              </div>
              <div className="text-xs text-blue-600">
                Solve more problems to climb the leaderboard!
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:shadow-md' 
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <div className="font-medium text-slate-900 mb-1">{achievement.title}</div>
                <div className="text-sm text-slate-600 mb-3">{achievement.description}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-medium">+{achievement.xp} XP</span>
                  {achievement.unlocked && (
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">Unlocked</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center">
            <div className="text-sm mb-2">
              You've unlocked {achievements.filter(a => a.unlocked).length} out of {achievements.length} achievements
            </div>
            <div className="text-xs opacity-90">
              Keep solving problems to unlock more achievements and earn XP!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;