import Navbar from "@/components/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="w-full border-t border-border/50 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest font-semibold text-foreground">Yash Kansal</p>
            <p className="text-muted text-sm mt-1">UAV & Robotics & Engineering</p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-muted text-sm text-left md:text-right">
            <p>Built around real projects, real experiments, and lessons from the field.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/yash-kansal-robotics-enthusiast" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors font-mono uppercase text-xs tracking-widest">LinkedIn</a>
              <a href="https://www.youtube.com/@skyward_dynamics" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors font-mono uppercase text-xs tracking-widest">YouTube</a>
            </div>
            <p className="mt-2 font-mono opacity-50">&copy; {new Date().getFullYear()} Yash Kansal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
