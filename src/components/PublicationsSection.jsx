import React, { useState } from 'react';
import { BookOpen, Award, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';

const PublicationsSection = ({ publications }) => {
  const [journalFilter, setJournalFilter] = useState('all');

  const years = [...new Set(publications.journals.map((p) => p.year))].sort((a, b) => b - a);

  const filteredJournals =
    journalFilter === 'all'
      ? publications.journals
      : publications.journals.filter((p) => p.year === parseInt(journalFilter));

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Publications
          </h2>
          <p className="text-lg text-gray-600">
            Peer-reviewed publications in leading quantum computing journals and conferences
          </p>
        </div>

        <Tabs defaultValue="journals" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="journals">Journal Papers</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
          </TabsList>

          {/* Journal Papers */}
          <TabsContent value="journals">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={journalFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setJournalFilter('all')}
                  className={journalFilter === 'all' ? 'bg-blue-700 hover:bg-blue-800' : ''}
                >
                  All Years
                </Button>
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={journalFilter === year.toString() ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setJournalFilter(year.toString())}
                    className={
                      journalFilter === year.toString() ? 'bg-blue-700 hover:bg-blue-800' : ''
                    }
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredJournals.map((pub, index) => (
                <Card key={pub.id} className="hover:shadow-md transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-sm">
                          {filteredJournals.length - index}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                        <p className="text-sm text-blue-700 font-medium mb-3">
                          {pub.venue} ({pub.year})
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.doi && (
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm hover:bg-blue-100 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              DOI
                            </a>
                          )}
                          {pub.arxiv && (
                            <a
                              href={`https://arxiv.org/abs/${pub.arxiv.replace('arXiv:', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              arXiv
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Conference Papers */}
          <TabsContent value="conferences">
            <div className="space-y-4">
              {publications.conferences.map((pub, index) => (
                <Card key={pub.id} className="hover:shadow-md transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{pub.title}</h3>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium flex-shrink-0">
                            {pub.type}
                          </span>
                        </div>
                        {pub.authors && (
                          <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                        )}
                        <p className="text-sm text-blue-700 font-medium mb-3">
                          {pub.venue} ({pub.year})
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.doi && (
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm hover:bg-blue-100 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              DOI
                            </a>
                          )}
                          {pub.arxiv && (
                            <a
                              href={`https://arxiv.org/abs/${pub.arxiv.replace('arXiv:', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              arXiv
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Patents */}
          <TabsContent value="patents">
            <div className="space-y-4">
              {publications.patents.map((patent, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{patent.title}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium flex-shrink-0">
                            {patent.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Applicant:</span> {patent.applicant}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Filing Number:</span> {patent.filingNumber}
                        </p>
                        <p className="text-sm text-blue-700 font-medium">{patent.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PublicationsSection;