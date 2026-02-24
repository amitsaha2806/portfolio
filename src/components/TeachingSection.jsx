import React from 'react';
import { Users, Presentation } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const TeachingSection = ({ teaching, talks }) => {
  return (
    <section id="teaching" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          Teaching & Invited Talks
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Teaching Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Teaching</h3>
            </div>
            <div className="space-y-4">
              {teaching.map((item, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.role}</h4>
                    <p className="text-blue-700 font-medium mb-1">{item.institution}</p>
                    <p className="text-gray-700 mb-2">{item.course}</p>
                    <p className="text-sm text-gray-500">{item.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Selected Talks */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Presentation className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Selected Invited Talks</h3>
            </div>
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{talk.title}</h4>
                    <p className="text-blue-700 font-medium mb-1">{talk.event}</p>
                    <p className="text-sm text-gray-600 mb-1">{talk.location}</p>
                    <p className="text-sm text-gray-500">{talk.date}</p>
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

export default TeachingSection;