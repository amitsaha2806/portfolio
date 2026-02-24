import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{profile.email}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href={profile.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Google Scholar
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={profile.socialLinks.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                ResearchGate
              </a>
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              {profile.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {profile.title} at {profile.currentAffiliation}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">Last updated: {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;