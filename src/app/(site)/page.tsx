import Link from "next/link";
import { ArrowRight, Cpu, Plane, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start relative">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <p className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-6">
          UAV & Robotics Engineer
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-foreground mb-8">
          BUILD.<br />
          FLY.<br />
          BREAK.<br />
          LEARN.<br />
          <span className="text-accent">BUILD BETTER.</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-12">
          Builder · Pilot · Mentor.<br/>
          Hands-on work across UAV systems, competition robotics, flight testing, technical education, and engineering mentorship.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-accent text-white font-mono uppercase tracking-wider text-sm font-bold hover:bg-accent-hover transition-colors flex items-center gap-2"
          >
            Explore My Work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-4 border border-border text-foreground font-mono uppercase tracking-wider text-sm font-bold hover:border-muted transition-colors"
          >
            Technical Story
          </Link>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="w-full border-y border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricItem icon={<Plane />} value="15+" label="UAV Platforms Built" />
          <MetricItem icon={<Trophy />} value="15+" label="National Robotics Wins" />
          <MetricItem icon={<Users />} value="50+" label="Workshops Conducted" />
          <MetricItem icon={<Cpu />} value="3+" label="International Awards" />
        </div>
      </section>

      {/* CURRENTLY BUILDING - PLACEHOLDER */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12 border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Currently Building</h2>
          <Link href="/now" className="text-accent font-mono text-sm uppercase hover:underline">View All</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border p-6 hover:border-accent/50 transition-colors">
            <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded inline-block mb-4">TESTING</span>
            <h3 className="text-lg font-bold mb-2">Custom Flight Controller Logic</h3>
            <p className="text-sm text-muted">Iterating on IMU integration and stabilization loops for an experimental 5-inch platform.</p>
          </div>
          {/* Add more cards once CMS is hooked up */}
        </div>
      </section>
    </div>
  );
}

function MetricItem({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="text-accent">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black font-mono">{value}</div>
      <div className="text-sm text-muted uppercase tracking-widest">{label}</div>
    </div>
  )
}
