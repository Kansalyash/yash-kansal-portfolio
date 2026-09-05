'use client';

import Link from "next/link";
import { mockCompetitions } from "@/lib/mockData";
import { Trophy, MapPin, Calendar, Crosshair, ArrowLeft } from "lucide-react";

export default function CompetitionsPage() {
  const competitions = mockCompetitions;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
      <div className="mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-8 uppercase">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">The Arena</p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
          Robotics Competitions
        </h1>
        <p className="max-w-2xl text-lg text-muted leading-relaxed">
          150+ events. Broken chassis, burnt motors, and podium finishes. This is the combat log of Karmayodha Bots and my journey through India&apos;s toughest robotics arenas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competitions.map((comp) => (
          <Link href={`/competitions/${comp.slug}`} key={comp.slug} className="group block bg-card border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div className="relative w-full h-64 overflow-hidden bg-background border-b border-border/50">
              {/* @ts-ignore */}
              {comp.videoUrl ? (
                <video
                  // @ts-ignore
                  src={comp.videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={comp.mainImage}
                  alt={comp.event}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded inline-flex mb-4 uppercase font-bold">
                <Trophy className="w-3 h-3" /> {comp.result}
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">{comp.event}</h2>
              <div className="space-y-2 mt-4 text-xs font-mono text-muted uppercase">
                <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {comp.institution}</div>
                <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {comp.year}</div>
                <div className="flex items-center gap-2"><Crosshair className="w-3 h-3" /> {comp.weightClass} {comp.category}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
