import Link from "next/link";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-sm tracking-widest uppercase font-semibold text-accent">
            Yash_Kansal<span className="animate-pulse">_</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-mono uppercase tracking-wider text-muted">
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="/competitions" className="hover:text-foreground transition-colors">Competitions</Link>
            <Link href="/workshops" className="hover:text-foreground transition-colors">Workshops</Link>
            <Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link>
            <Link href="/resume" className="hover:text-accent transition-colors">Resume</Link>
          </div>
        </div>
      </nav>
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="w-full border-t border-border/50 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest font-semibold text-foreground">Yash Kansal</p>
            <p className="text-muted text-sm mt-1">UAV · Robotics · Engineering</p>
          </div>
          <div className="text-muted text-sm text-right">
            <p>Built around real projects, real experiments, and lessons from the field.</p>
            <p className="mt-2 font-mono opacity-50">&copy; {new Date().getFullYear()} Yash Kansal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

