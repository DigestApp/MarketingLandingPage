import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Clock, Link, Sparkles, ChevronRight, Cpu, Bell } from 'lucide-react';

function App() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      icon: Link,
      title: "Import Your Content",
      description: "Simply paste your article links or upload documents. Digest handles various formats, from blog posts to research papers."
    },
    {
      icon: Cpu,
      title: "AI-Powered Processing",
      description: "Our advanced AI analyzes your content, extracting key insights and organizing information into a clear, concise format."
    },
    {
      icon: Bell,
      title: "Ready to Learn",
      description: "Get notified when your digest is ready. Access bite-sized summaries, key takeaways, and actionable insights anytime, anywhere."
    }
  ];

  useEffect(() => {
    let interval: number;
    interval = window.setInterval(() => {
      setActiveStep((current) => {
        if (current < steps.length - 1) {
          return current + 1;
        } else {
          clearInterval(interval);
          return current;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="h-8 w-8 text-silver-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-silver-400 to-purple-400 text-transparent bg-clip-text">Digest</h1>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8">
            <span 
              className="bg-gradient-to-r from-indigo-400 via-silver-300 to-purple-400 text-transparent bg-clip-text"
              style={{
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                animation: 'shimmerWave 3s ease-in-out infinite'
              }}
            >
              Transform Information Overload
            </span>
            <br />
            <span 
              className="bg-gradient-to-r from-purple-400 via-silver-300 to-indigo-400 text-transparent bg-clip-text"
              style={{
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                animation: 'shimmerWave 3s ease-in-out infinite 0.5s'
              }}
            >
              Into Focused Knowledge
            </span>
          </h2>
          
          {/* Enhanced Value Proposition */}
          <div className="mb-12 space-y-6">
            <p className="max-w-3xl mx-auto text-xl text-slate-300">
              Digest transforms your growing reading list into actionable knowledge, helping you stay informed without the overwhelm. 
              Get the key insights from hours of content in just minutes.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-silver-500/10">
                <p className="text-3xl font-bold text-silver-300">85%</p>
                <p className="text-l text-slate-400">Time Saved</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-silver-500/10">
                <p className="text-3xl font-bold text-silver-300">3x</p>
                <p className="text-l text-slate-400">More Content Consumed</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-silver-500/10">
                <p className="text-3xl font-bold text-silver-300">100%</p>
                <p className="text-l text-slate-400">Key Insights Captured</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-silver-500 to-purple-500 hover:from-indigo-600 hover:via-silver-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              style={{
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                animation: 'shimmerWave 3s ease-in-out infinite'
              }}
            >
              Try Digest Free <ChevronRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 border border-silver-400/30 text-silver-300 rounded-full font-semibold hover:border-silver-400/50 hover:text-silver-200 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-indigo-400 via-silver-300 to-purple-400 text-transparent bg-clip-text">How Digest Works</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-28 left-0 w-full h-1 bg-indigo-950">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-silver-400 to-purple-500 transition-all duration-700 ease-in-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-300 ${
                      index <= activeStep ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                    }`}
                  >
                    <div className={`
                      bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border
                      transform transition-all duration-300
                      ${index === activeStep 
                        ? 'border-silver-500/50 shadow-lg shadow-silver-500/10 -translate-y-2' 
                        : 'border-silver-500/10'
                      }
                    `}>
                      <div className="relative">
                        <div className={`
                          h-16 w-16 rounded-2xl flex items-center justify-center mb-6 mx-auto
                          transition-all duration-300
                          ${index <= activeStep 
                            ? 'bg-gradient-to-br from-indigo-500 via-silver-500 to-purple-500' 
                            : 'bg-slate-700'
                          }
                        `}>
                          <Icon className={`h-8 w-8 ${index <= activeStep ? 'text-white' : 'text-slate-400'}`} />
                        </div>
                        <div className={`
                          absolute -top-4 -right-4 h-8 w-8 rounded-full flex items-center justify-center
                          transition-all duration-300 animate-pulse
                          ${index <= activeStep ? 'bg-silver-500/20' : 'bg-slate-700'}
                        `}>
                          <span className={`
                            font-bold transition-colors duration-300
                            ${index <= activeStep ? 'text-silver-400' : 'text-slate-400'}
                          `}>{index + 1}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                      <p className="text-slate-300">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-gradient-to-br from-indigo-600 via-silver-600 to-purple-600 rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Learning Smarter Today
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use Digest to stay on top of their reading lists and learn more effectively.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg">
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;