import React from 'react';
import { GithubIcon, LinkedinIcon, Globe, Mail, Phone } from 'lucide-react';
import { resumeData } from './data/resume';
import { Section } from './components/Section';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e2532] text-white py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl font-bold mb-4">{resumeData.personal.name}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-200">
            <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail size={20} />
              {resumeData.personal.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone size={20} />
              {resumeData.personal.phone}
            </span>
            <div className="flex gap-6 ml-auto items-center">
              <a href={resumeData.personal.links.LinkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                <LinkedinIcon size={20} />
                LinkedIn
              </a>
              <a href={resumeData.personal.links.GitHub} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                <GithubIcon size={20} />
                GitHub
              </a>
              <a href={resumeData.personal.links.Portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                <Globe size={20} />
                Portfolio
              </a>
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-medium">
                2+ Year Experience
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Summary */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {resumeData.summary.map((item, index) => (
              <div key={index} className="bg-[#4a5568] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-200 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                <span className="text-gray-600">{edu.period}</span>
              </div>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-600">{edu.gpa}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                <span className="text-gray-600">{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-2">{exp.role} • {exp.team}</p>
              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <p className="text-sm list-outside pl-5 text-gray-500">Technologies: {exp.skills}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-8 border-b pb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
  <div className="space-y-6">
    {resumeData.projects.map((project, index) => (
      <div key={index}>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.name}
        </h3>
        <ul className="list-disc list-outside pl-5 text-gray-600 mb-3 space-y-2">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <p className="text-sm list-outside pl-5 text-gray-500">Technologies: {project.technologies}</p>
      </div>
    ))}
  </div>
</div>


     {/* Technical Skills */}
  <div className="mb-8 border-b pb-6">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">SKILLS</h2>
  <div className="border-t pt-2">
    <p><strong className="text-gray-800">Programming Languages:</strong> <span className="text-gray-500">{resumeData.technicalSkills.languages.join(", ")}</span></p>
    <p><strong className="text-gray-800">Databases:</strong> <span className="text-gray-500">{resumeData.technicalSkills.databases.join(", ")}</span></p>
    <p><strong className="text-gray-800">Frameworks & Libraries:</strong> <span className="text-gray-500">{resumeData.technicalSkills.frameworks.join(", ")}</span></p>
    <p><strong className="text-gray-800">Tools & Technologies:</strong> <span className="text-gray-500">{resumeData.technicalSkills.tools.join(", ")}</span></p>
    <p><strong className="text-gray-800">Additional Skills:</strong> <span className="text-gray-500">{resumeData.technicalSkills.additional.join(", ")}</span></p>
    <p><strong className="text-gray-800">Certification:</strong> <span className="text-gray-500">{resumeData.technicalSkills.certification}</span></p>
  </div>
</div>




        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievements</h2>
          <ul className="space-y-3">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600">
                {typeof achievement === 'string' ? (
                  <p className="font-semibold">{achievement}</p>
                ) : (
                  <div>
                    <p className="font-semibold text-gray-800">{achievement.title}</p>
                    {achievement.description && (
                      <p className="text-gray-600 mt-1">{achievement.description}</p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;