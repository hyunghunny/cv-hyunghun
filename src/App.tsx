import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Search, 
  MapPin, 
  ArrowUpRight, 
  Briefcase, 
  Layers
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import MainFeed from "./components/MainFeed";
import { cvData } from "./data";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div id="cv-portfolio-root" className="min-h-screen bg-slate-50/40 text-slate-800 antialiased flex flex-col print:bg-white print:text-black">
      
      {/* Small Ambient Glow Elements (Hidden when printed or on small viewports) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none print:hidden" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none print:hidden" />

      {/* Primary Container Layout */}
      <div className="relative max-w-[1400px] w-full mx-auto flex flex-col md:flex-row flex-1 print:block print:max-w-none">
        
        {/* Left Side Profile & Command Center */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-[340px] lg:w-[380px] shrink-0 print:w-full print:block"
        >
          <Sidebar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
        </motion.div>

        {/* Right Side Portfolio Content Feed */}
        <motion.main 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex-1 bg-white/60 backdrop-blur-[2px] overflow-y-auto flex justify-center print:bg-transparent print:backdrop-none print:w-full print:block"
        >
          <MainFeed searchQuery={searchQuery} />
        </motion.main>
      </div>

      {/* Subtle Floating Banner describing the Search feature (Desktop only, Print hide) */}
      {searchQuery && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-mono select-none print:hidden">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-ping" />
          <span>Showing results matching "{searchQuery}"</span>
          <button 
            onClick={() => setSearchQuery("")} 
            className="ml-2 text-indigo-400 hover:text-white font-bold"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
