import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ profile }) => {
  const socialIcons = [
    {
      name: 'Google Scholar',
      url: profile.socialLinks.googleScholar,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1-5.5h2.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H11v5zm-3-6.5h5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H8v5zm0-7h7c.83 0 1.5-.67 1.5-1.5S15.83 2 15 2H8v3z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: profile.socialLinks.linkedin,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'ResearchGate',
      url: profile.socialLinks.researchGate,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-1.502 5.992c-1.289 0-2.327.458-3.116 1.373-.788.916-1.182 2.156-1.182 3.72 0 1.578.408 2.826 1.225 3.743.816.918 1.897 1.377 3.241 1.377.689 0 1.327-.102 1.914-.305.588-.203 1.13-.508 1.626-.914l-.814-1.008c-.357.305-.732.534-1.125.688-.393.154-.816.231-1.269.231-.836 0-1.499-.292-1.988-.877-.49-.584-.734-1.416-.734-2.494h6.246v-.688c0-1.564-.365-2.765-1.096-3.602-.73-.838-1.745-1.256-3.043-1.256zm.063 1.219c.672 0 1.196.224 1.572.672.377.448.565 1.083.565 1.905h-4.453c.042-.851.262-1.497.66-1.938.398-.44.938-.66 1.62-.66z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: profile.socialLinks.github,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Researcher
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              {profile.name}
            </h1>
            <p className="text-2xl text-blue-700 font-semibold mb-4">{profile.title}</p>
            <p className="text-xl text-gray-700 mb-6">{profile.currentAffiliation}</p>
            <p className="text-lg text-gray-600 max-w-3xl mb-8 leading-relaxed">
              {profile.tagline}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{profile.email}</span>
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all shadow-sm hover:shadow-md"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;