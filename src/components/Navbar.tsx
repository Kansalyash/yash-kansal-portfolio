"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-widest uppercase font-semibold text-accent" onClick={() => setIsOpen(false)}>
          Yash_Kansal<span className="animate-pulse">_</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-mono uppercase tracking-wider text-muted">
          <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="/competitions" className="hover:text-foreground transition-colors">Competitions</Link>
          <Link href="/workshops" className="hover:text-foreground transition-colors">Workshops</Link>
          <Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link>
          <Link href="/resume" className="hover:text-accent transition-colors">Resume</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border/50 flex flex-col items-center py-6 gap-6 shadow-xl">
          <Link href="/projects" className="font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/competitions" className="font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Competitions</Link>
          <Link href="/workshops" className="font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Workshops</Link>
          <Link href="/gallery" className="font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/resume" className="font-mono uppercase tracking-wider text-accent hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Resume</Link>
        </div>
      )}
    </nav>
  );
}
