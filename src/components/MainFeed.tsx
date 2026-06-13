import React from "react";
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  FolderGit2, 
  Terminal, 
  Users, 
  Layers, 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileText
} from "lucide-react";
import { cvData } from "../data";

interface MainFeedProps {
  searchQuery: string;
}

export default function MainFeed({ searchQuery }: MainFeedProps) {
  const { 
    personal, 
    education, 
    workExperience, 
    teachingExperience, 
    skills, 
    projects, 
    publications 
  } = cvData;

  const query = searchQuery.toLowerCase().trim();

  // Highlight check helper helper
  const matchesText = (text?: string): boolean => {
    if (!text) return false;
    return text.toLowerCase().includes(query);
  };

  const matchesArray = (arr?: string[]): boolean => {
    if (!arr) return false;
    return arr.some(item => item.toLowerCase().includes(query));
  };

  // Sections highlight or visibility states
  const hasHighlight = (type: "edu" | "work" | "teach" | "skill" | "proj" | "pub", id: string): boolean => {
    if (!query) return false;
    
    switch (type) {
      case "edu":
        const edu = education.find(e => e.id === id);
        return !!edu && (matchesText(edu.degree) || matchesText(edu.school) || matchesText(edu.dissertation) || matchesText(edu.advisor));
      case "work":
        const work = workExperience.find(w => w.id === id);
        return !!work && (matchesText(work.role) || matchesText(work.company) || matchesArray(work.description));
      case "teach":
        const teach = teachingExperience.find(t => t.id === id);
        return !!teach && (matchesText(teach.role) || matchesText(teach.company) || matchesArray(teach.description));
      case "skill":
        const cat = skills.find(s => s.id === id);
        return !!cat && (matchesText(cat.categoryName) || matchesArray(cat.skills));
      case "proj":
        const proj = projects.find(p => p.id === id);
        return !!proj && (matchesText(proj.name) || matchesText(proj.description) || matchesArray(proj.technologies));
      case "pub":
        const pub = publications.find(p => p.id === id);
        return !!pub && (matchesText(pub.authorsAndTitle) || matchesText(pub.venueAndDetails));
      default:
        return false;
    }
  };

  // Helper to render high-contrast matched keyword in matching elements
  const highlightMatch = (text: string, search: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === search.toLowerCase() ? (
            <mark key={i} className="bg-yellow-100 text-yellow-900 px-0.5 rounded font-medium">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div id="portfolio-feed" className="flex-1 p-8 md:p-16 flex flex-col gap-12 max-w-4xl bg-[#FAFAFA] print:p-0 print:bg-transparent print:gap-8">
      
      {/* Executive Summary / Overview block with Left Accent Border */}
      <section className="flex flex-col gap-3 min-h-[100px] border-l-4 border-indigo-600 pl-8 mb-4 print:pl-6 print:gap-1.5">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Profile Summary
        </h2>
        <p className="text-lg font-light text-slate-700 leading-relaxed max-w-2xl print:text-xs print:text-slate-900 leading-normal">
          {personal.summary}
        </p>
      </section>

      {/* Skills Showcase Grid */}
      <section className="flex flex-col gap-4 print:gap-2">
        <div className="flex items-center gap-2 border-b pb-2 border-slate-200">
          <Layers className="w-4 h-4 text-slate-400 print:text-slate-950" />
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 print:text-xs">
            Core Competencies & Tools
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 print:grid-cols-3 print:gap-2">
          {skills.map((category) => {
            const isHighlighted = hasHighlight("skill", category.id);
            return (
              <div 
                key={category.id} 
                className={`p-5 rounded-none border border-slate-200 bg-white transition duration-200 print:p-0 print:border-none print:bg-transparent ${
                  isHighlighted ? "ring-1 ring-indigo-500 border-indigo-500 bg-indigo-50/5" : ""
                } ${query && !isHighlighted ? "opacity-40" : ""}`}
              >
                <h3 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-[0.15em] mb-3 print:text-[11px] print:text-slate-950 print:mb-1">
                  {highlightMatch(category.categoryName, query)}
                </h3>
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`text-[11px] px-2.5 py-1 rounded-none font-mono border transition duration-150 print:px-0 print:py-0 print:bg-transparent print:border-none print:after:content-[',_'] print:last:after:content-none print:text-xs print:text-slate-850 ${
                        query && skill.toLowerCase().includes(query) 
                          ? "bg-amber-100 text-amber-900 border-amber-300" 
                          : "bg-slate-55 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {highlightMatch(skill, query)}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Publications List */}
      <section className="flex flex-col gap-4 print:gap-2">
        <div className="flex items-center justify-between border-b pb-2 border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-400 print:text-slate-950" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 print:text-xs">
              Peer-Reviewed Publications
            </h2>
          </div>
          <a 
            href={cvData.scholarUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] uppercase font-mono font-bold tracking-widest text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 print:hidden"
          >
            Google Scholar
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex flex-col gap-4 print:gap-3">
          {publications.map((pub) => {
            const isHighlighted = hasHighlight("pub", pub.id);
            return (
              <div 
                key={pub.id} 
                className={`group relative p-5 rounded-none border border-slate-200 bg-white hover:border-slate-300 transition duration-150 print:p-0 print:border-none print:bg-transparent ${
                  isHighlighted ? "bg-indigo-50/5 border-indigo-500 ring-1 ring-indigo-500" : ""
                } ${query && !isHighlighted ? "opacity-30" : ""}`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <p className="text-sm font-sans font-medium text-slate-800 leading-relaxed print:text-xs print:text-slate-900">
                      {highlightMatch(pub.authorsAndTitle, query)}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-indigo-600 uppercase print:text-slate-950">
                        {highlightMatch(pub.venueAndDetails, query)}
                      </span>
                    </div>
                  </div>
                  {pub.url && (
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 text-slate-400 hover:text-indigo-600 border border-slate-200 group-hover:bg-indigo-50 group-hover:border-indigo-400 transition duration-150 print:hidden"
                      title="View Article"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-4 print:gap-2">
        <div className="flex items-center gap-2 border-b pb-2 border-slate-200">
          <Briefcase className="w-4 h-4 text-slate-400 print:text-slate-950" />
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 print:text-xs">
            Professional Experience
          </h2>
        </div>

        <div className="flex flex-col gap-8 print:gap-4_">
          {workExperience.map((work) => {
            const isHighlighted = hasHighlight("work", work.id);
            return (
              <div 
                key={work.id} 
                className={`relative group transition duration-250 border-b border-dashed border-slate-200 pb-8 last:border-b-0 space-y-3 ${
                  isHighlighted ? "bg-indigo-50/5 border-indigo-200 p-4" : ""
                } ${query && !isHighlighted ? "opacity-30" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight print:text-xs_ print:font-bold">
                      {work.role ? highlightMatch(work.role, query) : <span className="italic text-slate-505">Research &amp; Education Lead</span>}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mt-1">
                      {highlightMatch(work.company, query)}
                    </p>
                  </div>
                  
                  <div className="text-xs font-mono text-slate-440 whitespace-nowrap uppercase tracking-wider print:text-slate-950 flex items-center gap-1">
                    <span>{work.startDate} — {work.endDate}</span>
                  </div>
                </div>

                <ul className="text-sm text-slate-600 space-y-2 leading-relaxed font-sans print:text-xs print:text-slate-850">
                  {work.description.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-indigo-500 font-bold select-none">•</span>
                      <span>{highlightMatch(bullet, query)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="flex flex-col gap-4 print:gap-2">
        <div className="flex items-center gap-2 border-b pb-2 border-slate-200">
          <FolderGit2 className="w-4 h-4 text-slate-400 print:text-slate-950" />
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 print:text-xs">
            Academic &amp; Industrial Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-1 print:gap-3">
          {projects.map((proj) => {
            const isHighlighted = hasHighlight("proj", proj.id);
            return (
              <div 
                key={proj.id} 
                className={`group p-6 rounded-none border border-slate-200 bg-white hover:border-slate-350 transition duration-200 flex flex-col justify-between print:p-0 print:border-none print:bg-transparent print:shadow-none ${
                  isHighlighted ? "border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50/5" : ""
                } ${query && !isHighlighted ? "opacity-30" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-bold text-lg text-slate-900 leading-tight">
                      {highlightMatch(proj.name, query)}
                    </h3>
                    {proj.url && (
                      <a 
                        href={proj.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] uppercase font-mono font-bold text-indigo-500 tracking-wider underline hover:text-indigo-700 flex items-center gap-0.5 print:hidden"
                      >
                        GitHub
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed mb-4 font-sans print:text-slate-800 print:mb-1">
                    {highlightMatch(proj.description, query)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 print:gap-1">
                  {proj.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded-none border transition-all print:border-slate-300 print:py-0 print:px-1.5 print:text-slate-950 ${
                        query && tech.toLowerCase().includes(query) 
                          ? "bg-amber-100 border-amber-300 text-amber-800" 
                          : "bg-slate-50 border-slate-205 text-slate-500 group-hover:bg-indigo-50/40 group-hover:border-indigo-100 group-hover:text-indigo-600"
                      }`}
                    >
                      {highlightMatch(tech, query)}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education Section */}
      <section className="flex flex-col gap-4 print:gap-2">
        <div className="flex items-center gap-2 border-b pb-2 border-slate-200">
          <GraduationCap className="w-4 h-4 text-slate-400 print:text-slate-950" />
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 print:text-xs">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6 print:border-none print:ml-0 print:pl-0 print:gap-4">
          {education.map((edu) => {
            const isHighlighted = hasHighlight("edu", edu.id);
            return (
              <div 
                key={edu.id} 
                className={`relative group transition-opacity duration-200 border-b border-dashed border-slate-200 pb-6 last:border-b-0 space-y-2 ${
                  isHighlighted ? "bg-indigo-50/5 border-indigo-100 p-4" : ""
                } ${query && !isHighlighted ? "opacity-30" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 tracking-tight leading-tight uppercase">
                      {highlightMatch(edu.degree, query)}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mt-0.5">
                      {highlightMatch(edu.school, query)}
                    </p>
                    <p className="text-xs text-slate-450 font-mono mt-0.5 flex items-center gap-1">
                      {edu.location}
                    </p>
                  </div>
                  
                  <div className="text-xs font-mono text-slate-400 whitespace-nowrap tracking-wider uppercase print:text-slate-950">
                    <span>{edu.date}</span>
                  </div>
                </div>

                {/* Ph.D Dissertation particulars */}
                {(edu.dissertation || edu.advisor || edu.gpa) && (
                  <div className="mt-2.5 bg-slate-50/60 p-4 border border-slate-200 rounded-none flex flex-col gap-2 font-sans print:p-0 print:bg-transparent print:border-none print:mt-1">
                    {edu.gpa && (
                      <div className="text-xs font-sans text-slate-600 print:text-slate-950 flex items-center gap-1.5">
                        <span className="font-mono text-[9px] tracking-wider text-indigo-600 border border-indigo-200 px-1.5 py-0.2 rounded-none font-bold uppercase print:text-slate-950 print:border-none print:p-0">
                          GPA
                        </span>
                        <span className="font-semibold text-slate-800 print:text-slate-950">{edu.gpa}</span>
                      </div>
                    )}
                    {edu.dissertation && (
                      <div className="text-xs leading-relaxed text-slate-705 font-sans border-l-2 border-indigo-500 pl-3">
                        <span className="font-mono text-[9px] tracking-widest text-slate-500 font-bold uppercase block sm:inline-block sm:mr-2 print:text-slate-950 print:mr-1">
                          Dissertation:
                        </span>
                        <span className="italic font-medium text-slate-800 print:text-slate-900">
                          "{highlightMatch(edu.dissertation, query)}"
                        </span>
                      </div>
                    )}
                    {edu.advisor && (
                      <div className="text-xs text-slate-600 font-sans flex items-center gap-1.5 print:text-xs">
                        <span className="font-mono text-[9px] tracking-widest text-slate-500 font-red uppercase print:text-slate-950">
                          Advisor:
                        </span>
                        <span className="font-semibold text-slate-800 print:text-slate-900">{highlightMatch(edu.advisor, query)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="flex flex-col gap-4 print:gap-2">
        <div className="flex items-center gap-2 border-b pb-2 border-slate-200">
          <Users className="w-4 h-4 text-slate-400 print:text-slate-950" />
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 print:text-xs">
            Teaching &amp; Lectures
          </h2>
        </div>

        <div className="flex flex-col gap-6 print:gap-3">
          {teachingExperience.map((teach) => {
            const isHighlighted = hasHighlight("teach", teach.id);
            return (
              <div 
                key={teach.id} 
                className={`p-6 rounded-none border border-slate-200 bg-white transition-opacity duration-200 print:p-0 print:border-none print:bg-transparent ${
                  isHighlighted ? "bg-indigo-55/5 border-indigo-200 ring-1 ring-indigo-500" : ""
                } ${query && !isHighlighted ? "opacity-30" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="font-bold text-[16px] text-slate-800 uppercase leading-none">
                      {highlightMatch(teach.role, query)}
                    </h4>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">
                      {highlightMatch(teach.company, query)}
                    </p>
                  </div>
                  
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-450 block w-fit h-fit print:border-none print:bg-transparent print:p-0 print:text-slate-950">
                    {teach.startDate} — {teach.endDate}
                  </span>
                </div>

                <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed print:text-slate-800 print:pl-3">
                  {teach.description.map((bullet, index) => (
                    <li key={index}>
                      {highlightMatch(bullet, query)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
