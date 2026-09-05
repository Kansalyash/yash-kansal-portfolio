import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { mockProjects } from '@/lib/mockData';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = mockProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/projects" className="inline-flex items-center text-sm text-theme-accent hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      <header className="mb-12 border-b border-theme-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 text-sm font-mono text-theme-muted mb-6">
          <div className="flex items-center gap-2">
            <span className="text-theme-accent">TIMELINE_</span>
            {project.timeline}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-theme-accent">ROLE_</span>
            {project.role}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-theme-surface border border-theme-border rounded-full text-xs font-mono text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {project.videoUrl && (
        <div className="mb-12 rounded-xl overflow-hidden border border-theme-border shadow-2xl bg-black">
          <video 
            src={project.videoUrl} 
            controls 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full max-h-[70vh] object-contain"
          />
        </div>
      )}

      <div className="prose prose-invert prose-orange max-w-none mb-16 font-sans">
        {project.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

