import React from 'react';
import { Beaker, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ResearchSection = ({ projects }) => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Research Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My research advances the field of quantum computing through innovative approaches to circuit
            synthesis, error mitigation, and quantum algorithm optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-white border-gray-200"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Beaker className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{project.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.topic}</p>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{project.mentor}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;