import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe, 
  BookOpen
} from "lucide-react";
import { cvData } from "../data";

interface SidebarProps {
  onSearchQueryChange?: (q: string) => void;
  searchQuery?: string;
}

export default function Sidebar({ onSearchQueryChange, searchQuery = "" }: SidebarProps) {
  const { personal, languages, certifications, scholarUrl } = cvData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const fallbackImages = [
    "/portrait.jpg",
    "/portrait.png",
    "/portrait.jpeg",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  ];

  const handleImageError = () => {
    if (imageIndex < fallbackImages.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };



  return (
    <aside id="portfolio-sidebar" className="bg-slate-900 border-r border-slate-850 p-8 flex flex-col gap-8 h-full md:sticky md:top-0 md:max-h-screen overflow-y-auto print:border-none print:p-0 print:bg-transparent print:text-slate-950">
      {/* Profile summary block */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 print:items-start print:text-left">
        {/* Geometric Sharp Solid Shape Portrait Avatar */}
        <div className="relative group select-none print:hidden">
          <div className="w-56 h-56 bg-slate-800 mb-2 overflow-hidden border border-slate-700 shadow-xl relative transform transition-all duration-500 hover:scale-[1.04] hover:border-indigo-500">
            <img
              src={fallbackImages[imageIndex]}
              alt={personal.fullName}
              onError={handleImageError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-1 right-1 bg-slate-950 px-1.5 py-0.5 border border-slate-800 shadow">
              <span className="text-[8px] font-mono tracking-widest text-[#a5b4fc] font-bold">PH.D</span>
            </div>
          </div>
        </div>

        {/* Minimal Signature Logo when printed */}
        <div className="hidden print:block border-b-2 border-slate-950 pb-2 w-full">
          <h1 className="text-3xl font-display font-extrabold tracking-tight text-slate-950 uppercase">{personal.fullName}</h1>
          <p className="text-sm font-mono font-bold tracking-wider text-indigo-600 mt-1 uppercase">{personal.title}</p>
        </div>

        <div className="mt-1 print:hidden space-y-2">
          <h1 className="text-3xl font-display font-bold tracking-tight text-white uppercase leading-none">
            {personal.fullName}
          </h1>
          <span className="inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] bg-indigo-950 text-indigo-400 border border-indigo-800">
            {personal.title}
          </span>
        </div>
      </div>

      {/* Contact information detail blocks */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Contact Info</span>
          <button 
            onClick={copyEmailToClipboard}
            className="text-[9px] font-mono text-indigo-400 font-bold px-2 py-0.5 bg-indigo-950 hover:bg-indigo-900 border border-indigo-900 rounded-none transition-colors duration-150 print:hidden text-xs"
          >
            {copiedEmail ? "Copied!" : "Copy"}
          </button>
        </div>
        
        <div className="flex flex-col gap-2.5 text-sm text-slate-300">
          <div className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="p-1.5 bg-slate-800 rounded-none border border-slate-700/80 group-hover:bg-slate-750 print:p-0 print:border-none print:bg-transparent">
              <Mail className="w-3.5 h-3.5 text-slate-400 print:text-slate-950" />
            </div>
            <a href={`mailto:${personal.email}`} className="font-mono text-xs overflow-hidden text-ellipsis whitespace-nowrap print:text-slate-950">
              {personal.email}
            </a>
          </div>


          <div className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="p-1.5 bg-slate-800 rounded-none border border-slate-700/80 group-hover:bg-slate-750 print:p-0 print:border-none print:bg-transparent">
              <MapPin className="w-3.5 h-3.5 text-slate-400 print:text-slate-950" />
            </div>
            <span className="text-xs font-mono print:text-slate-950">{personal.location}</span>
          </div>
        </div>
      </div>

      {/* Social / Academic profiles */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Profiles & Scholar</span>
        <div className="flex flex-col gap-2.5 text-sm text-slate-300">
          <a 
            href={personal.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 hover:text-[#a5b4fc] group transition-colors"
          >
            <div className="p-1.5 bg-slate-800 rounded-none border border-slate-700/80 group-hover:bg-slate-750 transition-all print:p-0 print:border-none print:bg-transparent">
              <Github className="w-3.5 h-3.5 text-slate-450 group-hover:text-indigo-400 print:text-slate-950" />
            </div>
            <span className="font-mono text-xs overflow-hidden text-ellipsis print:text-slate-950">{personal.github}</span>
          </a>

          <a 
            href={`https://${personal.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 hover:text-[#a5b4fc] group transition-colors"
          >
            <div className="p-1.5 bg-slate-800 rounded-none border border-slate-700/80 group-hover:bg-slate-750 transition-all print:p-0 print:border-none print:bg-transparent">
              <Linkedin className="w-3.5 h-3.5 text-slate-450 group-hover:text-indigo-400 print:text-slate-950" />
            </div>
            <span className="font-mono text-xs overflow-hidden text-ellipsis print:text-slate-950">{personal.linkedin}</span>
          </a>

          <a 
            href={scholarUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 hover:text-[#a5b4fc] group transition-colors"
          >
            <div className="p-1.5 bg-slate-800 rounded-none border border-slate-700/80 group-hover:bg-slate-750 transition-all print:p-0 print:border-none print:bg-transparent">
              <BookOpen className="w-3.5 h-3.5 text-slate-450 group-hover:text-indigo-400 print:text-slate-950" />
            </div>
            <span className="font-mono text-xs font-semibold text-indigo-400 underline group-hover:text-[#a5b4fc] print:text-slate-950 print:no-underline">
              Google Scholar Profile
            </span>
          </a>
        </div>
      </div>

      {/* Languages Grid */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Languages</span>
        <div className="flex flex-col gap-2">
          {languages.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-dashed border-slate-800 pb-1.5 last:border-0 last:pb-0">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-500 print:text-slate-950" />
                <span className="text-xs font-semibold text-slate-300 font-mono print:text-slate-955">{item.name}</span>
              </div>
              <span className="text-[9px] font-mono py-0.5 px-2 bg-slate-850 text-slate-300 border border-slate-800 font-medium print:bg-transparent print:border print:border-slate-300 print:text-slate-950">
                {item.proficiency.trim()}
              </span>
            </div>
          ))}
        </div>
      </div>



      {/* Spacer & Sidebar Footer Tools */}
      <div className="mt-auto pt-6 border-t border-slate-800/80 flex flex-col gap-3 print:hidden">
        <p className="text-[9px] font-mono tracking-wider text-center text-slate-500 select-none uppercase">
          {new Date().getFullYear()} POWERED BY &copy;GOOGLE AI STUDIO
        </p>
      </div>
    </aside>
  );
}
