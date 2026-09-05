import { mockCompetitions } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, Trophy, Crosshair, Users } from "lucide-react";
import Link from "next/link";

export default async function CompetitionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = mockCompetitions.find(c => c.slug === slug);

  if (!comp) {
    notFound();
  }

  return (
    <article className="w-full max-w-5xl mx-auto px-6 pt-16 pb-32">
      <Link href="/competitions" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-12 uppercase">
        <ArrowLeft className="w-4 h-4" /> Back to The Arena
      </Link>

      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-mono text-sm uppercase tracking-widest font-bold mb-6">
          <Trophy className="w-4 h-4" /> {comp.result}
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-8">
          {comp.event}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><MapPin className="w-3 h-3 text-accent"/> Arena</div>
            <div className="font-semibold text-sm">{comp.institution}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><Calendar className="w-3 h-3 text-accent"/> Timeline</div>
            <div className="font-semibold text-sm">{comp.year}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><Crosshair className="w-3 h-3 text-accent"/> Class</div>
            <div className="font-semibold text-sm">{comp.weightClass} {comp.category}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><Users className="w-3 h-3 text-accent"/> Identity</div>
            <div className="font-semibold text-sm">{comp.role}</div>
          </div>
        </div>
      </header>

      {comp.mainImage && (
        <div className="w-full flex justify-center mb-16">
          <Image 
            src={comp.mainImage} 
            alt="Competition Image" 
            width={600}
            height={800}
            className="rounded-xl border border-border bg-card shadow-2xl"
          />
        </div>
      )}

      {/* @ts-ignore */}
      {comp.videoUrl && (
        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-border shadow-2xl bg-black mb-16">
          <p className="text-xs font-mono text-accent uppercase tracking-widest px-4 pt-3 pb-2 border-b border-border/50">🎥 Victory Highlights</p>
          <video
            src={comp.videoUrl}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block"
          />
        </div>
      )}

      <div className="prose prose-invert prose-orange max-w-3xl mx-auto">
        {comp.story.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="text-muted text-lg leading-relaxed mb-6">{paragraph}</p>
        ))}
      </div>

      {/* @ts-ignore */}
      {comp.gallery && comp.gallery.length > 0 && (
        <div className="max-w-5xl mx-auto mt-16 pt-16 border-t border-border/50">
          <h2 className="text-2xl font-bold font-mono uppercase tracking-widest text-foreground mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* @ts-ignore */}
            {comp.gallery.map((img: string, idx: number) => (
              <div key={idx} className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`Gallery image ${idx + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

