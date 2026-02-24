import React from 'react';
import { BookOpen, Target, Award } from 'lucide-react';
import { Card } from './ui/card';

const AboutSection = ({ profile, researchInterests }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Background</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{profile.bio}</p>
          </div>

          {/* Research Interests */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Research Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {researchInterests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;