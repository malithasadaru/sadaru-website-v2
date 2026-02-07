"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUpRight, Mail, Terminal, Layers, Copy, Check, Activity, Copyright } from "lucide-react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

export default function Home() {
  const [copied, setCopied] = useState(false);

  // -- CONFIGURATION -- (Change the links and PGP key as needed)
  const links = {
    github: "https://github.com/malithasadaru",
    twitter: "https://twitter.com/malithasadaru_",
    linkedin: "https://linkedin.com/in/malithasadaru",
    email: "mailto:me@sadaru.com",
    status: "https://status.sadaru.com"
  };

  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=44yT
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12 md:py-24 flex flex-col justify-between">
      
      {/* --- TOP BAR: Logo + Theme Toggle --- */}
      <header className="flex items-center justify-between mb-24">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight">SADARU<span className="text-neutral-400">.COM</span></h1>
          <span className="text-xs font-mono text-neutral-500">Arch Linux / Python / AI</span>
        </div>
        <ThemeToggle />
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="space-y-16">
        
        {/* 1. THE HOOK */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* STATUS PILL (Interactive) */}
          <a 
            href={links.status} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-green-500/50 hover:bg-green-500/5 transition-all cursor-pointer group"
          >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 group-hover:text-green-600 dark:group-hover:text-green-400">
               System Online
             </span>
             <Activity className="w-3 h-3 text-neutral-400 group-hover:text-green-500 ml-1" />
          </a>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
            I build autonomous systems that <span className="text-neutral-400 dark:text-neutral-600">remove human inefficiency.</span>
          </h2>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            Full-Stack Engineer specialized in <strong>Python</strong> automations and <strong>AI</strong> integration. 
              I design and deploy self-sustaining systems that operate with minimal human intervention,
          </p>
        </div>

        {/* 2. SELECTED WORK (Minimal Cards) */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">/// DEPLOYMENTS</h3>
          
          {/* Project 1 */}
          <Link href="https://github.com/malithasadaru/wealth-terminal" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors duration-300">
            <div className="flex items-start justify-between mb-4">
               <div className="p-3 bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <Terminal size={20} />
               </div>
               <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="text-lg font-bold mb-2">Wealth Terminal</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Automated bot tracking Net Worth across CSE & Crypto protocols using Python & Telegram API.</p>
          </Link>

           {/* Project 2 */}
           <Link href="#" className="group block p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors duration-300">
            <div className="flex items-start justify-between mb-4">
               <div className="p-3 bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <Layers size={20} />
               </div>
               <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="text-lg font-bold mb-2">System Infrastructure</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Self-hosted cloud ecosystem on Hetzner VPS. Dockerized services, Nginx reverse proxy, and Cloudflare security.</p>
          </Link>
        </div>

      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div>
            <h3 className="font-bold text-lg mb-1">Ready to deploy?</h3>
            <p className="text-neutral-500 text-sm">Send a signal. I respond to clear proposals.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href={links.github} target="_blank" className="p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={links.twitter} target="_blank" className="p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <TwitterIcon size={20} />
            </a>
            <a href={links.linkedin} target="_blank" className="p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <LinkedInIcon size={20} />
            </a>
            <a href={links.email} className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold hover:opacity-80 transition-opacity flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
          </div>

        </div>

        {/* PGP KEY WITH COPY BUTTON */}
        <div className="mt-12 group relative">
          <div className="flex items-center justify-between mb-2">
            <p className="text-neutral-500 font-mono text-xs">// SECURE COMMUNICATION (PGP PUBLIC KEY)</p>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              {copied ? "COPIED" : "COPY KEY"}
            </button>
          </div>
          
          <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden relative">
             <pre className="font-mono text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap break-all selection:bg-purple-500 selection:text-white h-32 overflow-y-auto custom-scrollbar">
                {pgpKey}
             </pre>
             {/* Fade overlay at bottom to suggest scrolling */}
             <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-xs font-mono text-neutral-400 flex justify-between items-center">
            <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                REALITY DISTORTION: ACTIVE
            </span>
            <span className="flex items-center">
                <Copyright size={15} className="inline-block mr-1" /> 
                {new Date().getFullYear()} MalithaSadaru
            </span>
        </div>
      </footer>
    </main>
  );
}