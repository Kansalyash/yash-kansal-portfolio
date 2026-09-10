"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Plane, Trophy, Users, Crosshair, Battery, Radio, BookOpen } from "lucide-react";
import { mockProjects, mockMoments, mockArticles } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden relative">
      {/* ENGINEERING GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-background/80 -z-10 pointer-events-none" />

      {/* HERO SECTION - DRONE HUD STYLE */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start z-10"
        >
          <p className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-6 flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 shadow-[0_0_15px_rgba(255,85,0,0.15)]">
            <Radio className="w-4 h-4 animate-pulse" />
            UAV & Robotics Engineer
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-foreground mb-8">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>BUILD.</motion.span><br />
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>FLY.</motion.span><br />
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>BREAK.</motion.span><br />
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>LEARN.</motion.span><br />
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-accent drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">BUILD BETTER.</motion.span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 border-l-2 border-accent/50 pl-4">
            <div className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-xl overflow-hidden border border-accent/30 shadow-[0_0_15px_rgba(255,85,0,0.2)] shrink-0 group">
              <img src="/profile.webp" alt="Yash Kansal - Drone Pilot" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <p className="max-w-xl text-lg md:text-xl text-muted leading-relaxed">
              Builder · Pilot · Mentor.<br/>
              Hands-on work across UAV systems, competition robotics, flight testing, and engineering mentorship.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-accent text-white font-mono uppercase tracking-wider text-sm font-bold hover:bg-accent-hover transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:shadow-[0_0_30px_rgba(255,85,0,0.6)] hover:-translate-y-1"
            >
              Explore My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://www.linkedin.com/in/yash-kansal-robotics-enthusiast" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-border text-foreground font-mono uppercase tracking-wider text-sm font-bold hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent/5"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        {/* DRONE HUD VIDEO FRAME */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] lg:aspect-square bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Main Video */}
          <video 
            src="/projects/featured-project/video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          />
          
          {/* HUD Overlay Elements */}
          <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between font-mono text-xs md:text-sm text-accent/80 transition-opacity duration-500">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 bg-background/60 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>REC 00:14:23</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                <Battery className="w-4 h-4" />
                <span>22.2V 98%</span>
              </div>
            </div>
            
            {/* Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 flex items-center justify-center group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
              <Crosshair className="w-16 h-16 md:w-24 md:h-24 stroke-[1px] text-accent drop-shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            </div>

            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1 bg-background/60 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                <span>ALT: 42.5m</span>
                <span>SPD: 18.2m/s</span>
              </div>
              <div className="flex flex-col gap-1 items-end bg-background/60 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                <span>MODE: ACRO</span>
                <span>GPS: 3D FIX</span>
              </div>
            </div>
          </div>
          
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-accent/10 to-transparent w-full h-10 animate-[scan_3s_ease-in-out_infinite] mix-blend-overlay" />
        </motion.div>
      </section>

      {/* TECH MARQUEE */}
      <section className="w-full border-y border-border/50 bg-accent/5 overflow-hidden py-4 flex backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-mono text-accent text-sm uppercase tracking-widest font-bold drop-shadow-[0_0_5px_rgba(255,85,0,0.3)]">
          {Array(4).fill("PIXHAWK • ARDUPILOT • BETAFLIGHT • ROS • SOLIDWORKS • CARBON FIBER • 3D PRINTING • CUSTOM FLIGHT CONTROLLERS • FPV SYSTEMS • ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md relative">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricItem icon={<Plane />} value="100+" label="Drone Builds" delay={0.1} />
          <MetricItem icon={<Trophy />} value="80+" label="Robotics Wins" delay={0.2} />
          <MetricItem icon={<Users />} value="50+" label="Workshops" delay={0.3} />
          <MetricItem icon={<Cpu />} value="3+" label="International Podiums" delay={0.4} />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 border-b border-border/50 pb-4"
        >
          <h2 className="text-4xl font-black uppercase tracking-tight">Latest Builds</h2>
          <Link href="/projects" className="text-accent font-mono text-sm uppercase hover:underline flex items-center gap-1 group">
            View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mockProjects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link href={`/projects/${project.slug}`} className="group flex flex-col bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl overflow-hidden hover:border-accent/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.15)] hover:-translate-y-2 h-full">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {/* @ts-ignore */}
                  {project.videoUrl ? (
                    <video 
                      /* @ts-ignore */
                      src={project.videoUrl} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      autoPlay loop muted playsInline
                    />
                  ) : project.coverImage ? (
                    <>
                      {/* Background Blur */}
                      <img src={project.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-125" />
                      {/* Foreground Contained */}
                      <img src={project.coverImage} alt={project.title} className="relative w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                      <Plane className="w-12 h-12 text-accent/30 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded font-mono text-xs text-accent uppercase tracking-widest border border-white/5">
                    {project.role}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3 mt-auto">{project.summary}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIVE ACTION / MOMENTS GALLERY */}
      <section className="w-full bg-card/20 border-t border-border/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent -z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 border-b border-border/50 pb-4"
          >
            <h2 className="text-4xl font-black uppercase tracking-tight">On The Ground</h2>
            <Link href="/gallery" className="text-accent font-mono text-sm uppercase hover:underline flex items-center gap-1 group">
              View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            {mockMoments.slice(0, 4).map((moment, i) => (
              <motion.div
                key={moment.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group block cursor-pointer ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
              >
                <Link href="/gallery" className="absolute inset-0 w-full h-full">
                  {/* @ts-ignore */}
                  <img 
                    /* @ts-ignore */
                    src={moment.gallery ? moment.gallery[0] : moment.image} 
                    alt={moment.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-500 z-10" />
                  
                  <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-mono text-accent mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {moment.date}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white leading-tight">{moment.title}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THOUGHTS & PUBLICATIONS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-t border-border/50 bg-background/50 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 border-b border-border/50 pb-4"
        >
          <h2 className="text-4xl font-black uppercase tracking-tight">Thoughts & Insights</h2>
          <a href="https://medium.com/@the-yashkansal" target="_blank" rel="noreferrer" className="text-accent font-mono text-sm uppercase hover:underline flex items-center gap-1 group">
            Read on Medium <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.slice(0, 3).map((article, i) => (
            <motion.a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-card/60 backdrop-blur-sm border border-border/50 hover:border-accent/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,85,0,0.1)] relative overflow-hidden h-full"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 group-hover:-rotate-6 transform">
                <BookOpen className="w-32 h-32 text-accent" />
              </div>
              <p className="text-xs font-mono text-accent mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {article.pubDate}
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-6 group-hover:text-accent transition-colors leading-snug pr-4 relative z-10">
                {article.title.replace(/"/g, '')}
              </h3>
              <div className="mt-auto flex items-center text-sm font-mono font-bold text-muted group-hover:text-white transition-colors relative z-10">
                Read Article <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* THE AVIATION DREAM - SPECIAL SECTION (MOVED TO BOTTOM) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-t border-border/50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch gap-0 bg-card/40 border border-border/50 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Subtle glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] -z-10 pointer-events-none" />

          <div className="w-full lg:w-5/12 aspect-[4/5] lg:aspect-auto lg:min-h-[500px] relative shrink-0">
            <img src="/special-plane.jpg" alt="Yash Kansal with an Airplane" className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-transparent to-transparent opacity-80 lg:opacity-100" />
          </div>
          
          <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center text-left relative z-10 bg-gradient-to-t lg:bg-gradient-to-r from-background to-transparent lg:to-background/0">
            <span className="text-xs font-mono text-accent uppercase tracking-widest mb-4 bg-accent/10 px-3 py-1 rounded-full border border-accent/20 shadow-[0_0_10px_rgba(255,85,0,0.1)]">The Aviation Dream</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-foreground drop-shadow-md">
              BEYOND THE DRONES.
            </h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
              "Aviation has always been more than just engineering for me. From building my first RC planes and programming drones, to standing right next to the massive commercial machines that inspired it all. Everything I build is driven by a lifelong passion for the skies."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-[2px] bg-accent shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
              <p className="text-accent font-mono text-sm tracking-widest uppercase font-bold">
                Yash Kansal
              </p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

function MetricItem({ icon, value, label, delay }: { icon: React.ReactNode, value: string, label: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center md:items-start gap-4 p-6 rounded-2xl hover:bg-accent/5 border border-transparent hover:border-accent/20 transition-colors group"
    >
      <div className="text-accent bg-accent/10 p-3 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-5xl md:text-6xl font-black font-mono text-foreground group-hover:text-accent transition-colors">{value}</div>
      <div className="text-sm text-muted font-bold uppercase tracking-widest">{label}</div>
    </motion.div>
  )
}
