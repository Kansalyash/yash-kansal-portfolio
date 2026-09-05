'use client';

import Link from 'next/link';
import { ArrowLeft, Rocket } from 'lucide-react';
import { mockProjects } from '@/lib/mockData';

export default function ProjectsIndex() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center text-sm text-theme-accent hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-orange-300">
            ENGINEERING
          </span>{' '}
          BUILDS
        </h1>
        <p className="text-xl text-theme-muted max-w-2xl">
          A showcase of custom flight controllers, UAV payload systems, and competitive robotics platforms I&apos;ve engineered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="group block">
            <article className="bg-theme-surface/50 border border-theme-border rounded-xl overflow-hidden hover:border-theme-accent/50 transition-colors h-full flex flex-col">
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                {project.videoUrl ? (
                  <video 
                    src={project.videoUrl}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : project.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" />
                ) : (
                  <Rocket className="w-12 h-12 text-theme-muted group-hover:text-theme-accent transition-colors" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-theme-bg to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-sm text-theme-accent font-mono">
                  <span>{project.timeline}</span>
                  <span className="w-1 h-1 rounded-full bg-theme-border"></span>
                  <span>{project.role}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-theme-accent transition-colors">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-theme-bg border border-theme-border rounded-full text-theme-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

