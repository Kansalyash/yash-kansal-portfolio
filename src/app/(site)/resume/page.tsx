import { Download, Briefcase, GraduationCap, Award, Cpu, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-24 pb-32">
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/50 pb-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-8 uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">Curriculum Vitae</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
            Yash Kansal
          </h1>
          <p className="max-w-2xl text-lg text-muted leading-relaxed">
            Experienced Robotics Trainer and Drone Instructor with strong hands-on expertise in UAV systems, embedded electronics, and competition-grade robotics. 
          </p>
        </div>
        <Link 
          href="/resume.pdf" 
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold uppercase tracking-wider hover:bg-accent transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Main Column */}
        <div className="md:col-span-2 space-y-16">
          {/* Experience */}
          <section>
            <div className="flex items-center gap-3 mb-8 text-xl font-bold uppercase tracking-tight">
              <Briefcase className="w-6 h-6 text-accent" /> Experience
            </div>
            
            <div className="space-y-12">
              <div className="relative pl-6 border-l border-border/50">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                <div className="text-xs font-mono text-muted mb-2 uppercase">08/2024 — Current</div>
                <h3 className="text-xl font-bold">STEM Teacher</h3>
                <div className="text-accent font-mono text-sm mb-4">Qonevo Technologies Pvt Ltd · Gurugram</div>
                <ul className="space-y-2 text-muted list-disc list-outside ml-4">
                  <li>Facilitated hands-on experiments to enhance student understanding of scientific concepts.</li>
                  <li>Developed and implemented technology-based lesson plans and interactive learning experiences.</li>
                  <li>Led after-school clubs focused on robotics, engineering, and computer programming.</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l border-border/50">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                <div className="text-xs font-mono text-muted mb-2 uppercase">09/2024 — 07/2025</div>
                <h3 className="text-xl font-bold">Drone Test Pilot & Support Engineer</h3>
                <div className="text-accent font-mono text-sm mb-4">AITMC Ventures Ltd · Gurugram</div>
                <ul className="space-y-2 text-muted list-disc list-outside ml-4">
                  <li>Conducted test flights and acceptance flights to evaluate UAV stability, control response, and overall performance.</li>
                  <li>Performed flight controller calibration and tuning (IMU, compass, ESC, radio).</li>
                  <li>Executed flight log analysis to diagnose vibrations, sensor errors, failsafes, and power issues.</li>
                  <li>Assembled, integrated, and troubleshot multirotor UAV systems (motors, ESCs, GPS, telemetry).</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l border-border/50">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                <div className="text-xs font-mono text-muted mb-2 uppercase">04/2024 — 07/2024</div>
                <h3 className="text-xl font-bold">Drone Pilot</h3>
                <div className="text-accent font-mono text-sm mb-4">Garuda Aerospace · Chennai</div>
                <ul className="space-y-2 text-muted list-disc list-outside ml-4">
                  <li>Operated professional UAV platforms for industrial and commercial applications.</li>
                  <li>Performed mission planning, pre-flight checks, troubleshooting, and maintenance.</li>
                  <li>Maintained strict adherence to aviation safety standards and operational compliance.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-3 mb-8 text-xl font-bold uppercase tracking-tight">
              <GraduationCap className="w-6 h-6 text-accent" /> Education & Certifications
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-card border border-border">
                <div className="text-xs font-mono text-muted mb-2 uppercase">Graduated 07/2024</div>
                <h3 className="text-lg font-bold">Bachelor of Science: Computer Science</h3>
                <div className="text-accent font-mono text-sm">MIET College, Meerut</div>
              </div>
              
              <div className="p-6 bg-card border border-border">
                <div className="text-xs font-mono text-muted mb-2 uppercase">Certified 10/2023</div>
                <h3 className="text-lg font-bold">Remote Pilot Certificate (Small Category)</h3>
                <div className="text-accent font-mono text-sm">Dronachariya Drone Academy, Meerut</div>
              </div>

              <div className="p-6 bg-card border border-border">
                <div className="text-xs font-mono text-muted mb-2 uppercase">Interview Pending</div>
                <h3 className="text-lg font-bold">Trainer Training (TTT): Drone Instructor</h3>
                <div className="text-accent font-mono text-sm">Flapone Aviation, New Delhi</div>
              </div>

              <div className="bg-card border border-accent/30 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/certifications/solidworks-internshala.png" alt="SOLIDWORKS Certificate" className="w-full h-auto border-b border-border/50" />
                <div className="p-6">
                  <div className="text-xs font-mono text-accent uppercase mb-1">🏆 Top Performer · Certified 06/2025</div>
                  <h3 className="text-lg font-bold">SOLIDWORKS — Certificate of Training</h3>
                  <div className="text-accent font-mono text-sm mb-3">Internshala Trainings</div>
                  <p className="text-muted text-sm mb-4">8-week training: SolidWorks Introduction, Sketching, Features & Material, Assembly, Drawing, Portfolio Building, and Final Project — Air Piston-Cylinder Assembly.</p>
                  <a href="https://trainings.internshala.com/view_certificate/2co2pnlvx17/8zf6ai3x5mq/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline uppercase tracking-wide">↗ Verify Certificate</a>
                </div>
              </div>

              <div className="bg-card border border-accent/30 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/certifications/3d-printing-internshala.png" alt="3D Printing Certificate" className="w-full h-auto border-b border-border/50" />
                <div className="p-6">
                  <div className="text-xs font-mono text-accent uppercase mb-1">Certified 06/2025</div>
                  <h3 className="text-lg font-bold">3D Printing — Certificate of Training</h3>
                  <div className="text-accent font-mono text-sm mb-3">Internshala Trainings</div>
                  <p className="text-muted text-sm mb-4">8-week training: Introduction to 3D Printing, Principles, Technologies & Materials, The Printing Journey, Applications, Merits, Advancements & Scope, and Final Project modules.</p>
                  <a href="https://trainings.internshala.com/view_certificate/gsWjviuc/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline uppercase tracking-wide">↗ Verify Certificate</a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-16">
          
          <section>
            <div className="flex items-center gap-3 mb-6 text-xl font-bold uppercase tracking-tight">
              <Cpu className="w-6 h-6 text-accent" /> Technical Skills
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Drone Systems</h4>
                <div className="flex flex-wrap gap-2">
                  {['FPV Drones', 'Payload Drones (2-5kg)', 'Autonomous UAVs', 'Pixhawk', 'Custom FC'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-card border border-border text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Embedded & Programming</h4>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'Arduino', 'ESP32', 'Raspberry Pi', 'ROS1 (Learning)'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-card border border-border text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Hardware & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['GPS/IMU', 'ESCs', '3D Printing', 'SOLIDWORKS', 'Electronics Prototyping'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-card border border-border text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 text-xl font-bold uppercase tracking-tight">
              <Award className="w-6 h-6 text-accent" /> Awards & Honors
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                <p className="text-sm">15+ National-Level Robotics Competition Wins</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                <p className="text-sm">3+ International Robotics Awards</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                <p className="text-sm">1st Place at competitions hosted by IIT Bombay, IIT Delhi, and IIT Ropar</p>
              </li>
            </ul>
          </section>

        </div>
      </div>

      {/* Recommendations Section — full width */}
      <div className="mt-24 pt-16 border-t border-border/50">
        <div className="flex items-center gap-3 mb-4 text-xl font-bold uppercase tracking-tight">
          <Award className="w-6 h-6 text-accent" /> Official Recommendations
        </div>
        <p className="text-sm font-mono text-muted mb-10 uppercase tracking-widest">Signed letters from academic institutions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-accent/30 overflow-hidden rounded-xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/certifications/maha-kumbh-lor.jpg" alt="Reviving India - Letter of Recommendation" className="w-full h-auto" />
            <div className="p-5 bg-card">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">Reviving India · CIMAGE College</div>
              <div className="text-xs font-mono text-muted">18 Sep 2024</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">"His in-depth knowledge of drone technology and robotics allowed him to not only successfully showcase advanced projects but also to engage with the audience, making complex concepts accessible... I strongly recommend YASH KANSAL without reservation."</p>
            </div>
          </div>
          <div className="border border-accent/30 overflow-hidden rounded-xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/certifications/maha-kumbh-certificate.jpg" alt="Certificate of Appreciation - Maha Kumbh" className="w-full h-auto" />
            <div className="p-5 bg-card">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">Certificate of Appreciation</div>
              <div className="text-xs font-mono text-muted">Maha Kumbh-24 Drone and Robotics Show</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">"In recognition of outstanding contribution to the successful demonstration of Drone and Robotics technology at Mahakumbh, CIMAGE College, Patna."</p>
            </div>
          </div>
          <div className="border border-accent/30 overflow-hidden rounded-xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/certifications/sgt-recommendation-1.jpg" alt="SGT University Recommendation - Skyward Dynamics" className="w-full h-auto" />
            <div className="p-5 bg-card">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">Skyward Dynamics · SGT University</div>
              <div className="text-xs font-mono text-muted">Ref: SGTU/FEAT/ME/2024/209 · 21 Nov 2024</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">"The workshop leaders displayed remarkable dedication, expertise, and professionalism… We wholeheartedly recommend Skyward Dynamics for conducting workshops in the fields of drones and robotics."</p>
            </div>
          </div>
          <div className="border border-accent/30 overflow-hidden rounded-xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/certifications/sgt-recommendation-2.jpg" alt="SGT University Recommendation - Nexgen Automation" className="w-full h-auto" />
            <div className="p-5 bg-card">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">Nexgen Automation · SGT University</div>
              <div className="text-xs font-mono text-muted">Ref: SGTU/FEAT/ME/2024/210 · 21 Nov 2024</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">"Mr. Yash Kansal exhibited exemplary dedication and expertise. Their teaching methods engaged students effectively, blending technical knowledge with practical applications."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

