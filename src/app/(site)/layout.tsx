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
          <div className="text-muted text-sm text-right">
            <p>Built around real projects, real experiments, and lessons from the field.</p>
            <p className="mt-2 font-mono opacity-50">&copy; {new Date().getFullYear()} Yash Kansal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
