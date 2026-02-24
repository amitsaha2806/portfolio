import React from 'react';
import { Award, Trophy, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AwardsSection = ({ awards, service }) => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          Awards & Service
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Trophy className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Honors & Awards</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Award className="w-5 h-5 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">{award.title}</h4>
                          <span className="text-sm text-gray-500 font-medium flex-shrink-0">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-blue-700 font-medium mb-1">{award.organization}</p>
                        {award.description && (
                          <p className="text-sm text-gray-600">{award.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Academic Service</h3>
            </div>
            <div className="space-y-6">
              {/* Leadership Roles */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Leadership Roles</h4>
                  <div className="space-y-2">
                    {service.leadership.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <div>
                          <span className="font-medium text-gray-900">{item.role}</span>
                          <span className="text-gray-600"> - {item.event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviewer Service */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Reviewer Service</h4>
                  <div className="space-y-2">
                    {service.reviewer.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;