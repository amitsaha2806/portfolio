import React from "react";
import "@/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResearchSection from "./components/ResearchSection";
import PublicationsSection from "./components/PublicationsSection";
import ExperienceSection from "./components/ExperienceSection";
import TeachingSection from "./components/TeachingSection";
import AwardsSection from "./components/AwardsSection";
import Footer from "./components/Footer";
import {
  profileData,
  researchInterests,
  researchProjects,
  publications,
  experience,
  education,
  teaching,
  selectedTalks,
  awards,
  service
} from "./data/mockData";

function App() {
  return (
    <div className="App">
      <Header cvUrl={profileData.cvUrl} />
      <HeroSection profile={profileData} />
      <AboutSection profile={profileData} researchInterests={researchInterests} />
      <ResearchSection projects={researchProjects} />
      <PublicationsSection publications={publications} />
      <ExperienceSection experience={experience} education={education} />
      <TeachingSection teaching={teaching} talks={selectedTalks} />
      <AwardsSection awards={awards} service={service} />
      <Footer profile={profileData} />
    </div>
  );
}

export default App;
