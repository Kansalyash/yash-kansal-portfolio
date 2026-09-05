import { mockWorkshops } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, Users, Target, Cpu } from "lucide-react";
import Link from "next/link";

export default async function WorkshopDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workshop = mockWorkshops.find(w => w.slug === slug);

  if (!workshop) {
    notFound();
  }

  return (
    <article className="w-full max-w-5xl mx-auto px-6 pt-16 pb-32">
      <Link href="/workshops" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-12 uppercase">
        <ArrowLeft className="w-4 h-4" /> Back to Workshops
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-8">
          {workshop.title}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><MapPin className="w-3 h-3 text-accent"/> Location</div>
            <div className="font-semibold text-sm">{workshop.institution}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><Calendar className="w-3 h-3 text-accent"/> Date</div>
            <div className="font-semibold text-sm">{workshop.date}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><Users className="w-3 h-3 text-accent"/> Audience</div>
            <div className="font-semibold text-sm">{workshop.attendees}+ Attendees</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted uppercase mb-1 flex items-center gap-1"><Target className="w-3 h-3 text-accent"/> Duration</div>
            <div className="font-semibold text-sm">{workshop.duration}</div>
          </div>
        </div>
      </header>

      <div className="w-full relative aspect-[21/9] bg-card border border-border mb-16 overflow-hidden">
         <Image 
          src={workshop.coverImage} 
          alt="Workshop Cover" 
          fill
          className="object-cover"
        />
      </div>

      {/* @ts-ignore */}
      {workshop.videoUrl && (
        <div className="w-full rounded-xl overflow-hidden border border-border shadow-2xl bg-black mb-16">
          <p className="text-xs font-mono text-accent uppercase tracking-widest px-4 pt-3 pb-2 border-b border-border/50">Workshop Highlights — Video</p>
          <video 
            src={workshop.videoUrl} 
            controls 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-auto block"
          />
        </div>
      )}

      <div className="grid md:grid-cols-[1fr_300px] gap-16">
        <div className="prose prose-invert prose-orange max-w-none">
          {workshop.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-muted text-lg leading-relaxed mb-6">{paragraph}</p>
          ))}
          
          {workshop.gallery.length > 1 && (
            <div className="my-16">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-foreground">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {workshop.gallery.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-video bg-card border border-border overflow-hidden">
                    <Image src={img} alt={`Gallery image ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* @ts-ignore */}
          {workshop.recommendations && workshop.recommendations.length > 0 && (
            <div className="my-16">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground flex items-center gap-3">
                <span className="text-accent">★</span> Official Recommendations
              </h3>
              <p className="text-sm font-mono text-muted mb-8 uppercase tracking-widest">Signed by Head of Department, SGT University</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* @ts-ignore */}
                {workshop.recommendations.map((rec, idx) => (
                  <div key={idx} className="border border-accent/30 rounded-xl overflow-hidden shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rec.image} alt={`Recommendation ${idx + 1}`} className="w-full h-auto" />
                    <div className="p-4 bg-card">
                      <div className="text-xs font-mono text-accent uppercase tracking-widest">{rec.org}</div>
                      <div className="text-xs font-mono text-muted mt-1">Ref: {rec.ref} · Date: 21/11/2024</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div className="bg-card border border-border p-6">
            <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Core Topics
            </h3>
            <ul className="space-y-3">
              {workshop.topics.map(topic => (
                <li key={topic} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-accent mt-0.5">▹</span> {topic}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border p-6">
            <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Hardware Stack
            </h3>
            <ul className="space-y-3">
              {workshop.hardware.map(item => (
                <li key={item} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-accent mt-0.5">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
