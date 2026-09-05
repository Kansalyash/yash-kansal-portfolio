import Link from "next/link";
import { mockWorkshops } from "@/lib/mockData";
import { MapPin, Calendar, Users, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function WorkshopsPage() {
  // In a real scenario, we'd fetch this from Sanity:
  // const workshops = await client.fetch(`*[_type == "workshop"]`)
  const workshops = mockWorkshops;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
      <div className="mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-8 uppercase">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">Knowledge Transfer</p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
          Workshops & Mentoring
        </h1>
        <p className="max-w-2xl text-lg text-muted leading-relaxed">
          Sharing lessons learned from building, flying, breaking, and fixing real UAV systems. A record of hands-on training sessions with students, professionals, and defense personnel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workshops.map((workshop) => (
          <Link href={`/workshops/${workshop.slug}`} key={workshop.slug} className="group block bg-card border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div className="relative w-full h-64 overflow-hidden bg-background">
              <Image 
                src={workshop.coverImage} 
                alt={workshop.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted mb-4 uppercase">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> {workshop.institution}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-accent" /> {workshop.date}</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3 text-accent" /> {workshop.audience.split(',')[0]}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{workshop.title}</h2>
              <div className="flex gap-2 flex-wrap mt-4">
                {workshop.topics.slice(0, 3).map(topic => (
                  <span key={topic} className="text-xs font-mono bg-background border border-border px-2 py-1 text-muted">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

