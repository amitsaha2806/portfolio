import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ExperienceSection = ({ experience, education }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-blue-700 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{exp.position}</h4>
                    <p className="text-blue-700 font-medium mb-2">{exp.institution}</p>
                    <p className="text-sm text-gray-600 mb-1">{exp.location}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                    {exp.supervisor && (
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Supervisor:</span> {exp.supervisor}
                      </p>
                    )}
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-blue-700 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-blue-700 font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-600 mb-1">{edu.location}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.year}</p>
                    {edu.grade && (
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Grade:</span> {edu.grade}
                      </p>
                    )}
                    {edu.thesis && (
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                    {edu.advisors && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Advisors:</span> {edu.advisors}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;