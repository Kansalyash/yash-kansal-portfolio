'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon, Sparkles } from 'lucide-react';
import { mockWorkshops, mockCompetitions, mockProjects, mockMoments } from '@/lib/mockData';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos' | 'moments'>('images');

  // Aggregate all images from workshops and competitions
  const allImages: string[] = [];
  mockWorkshops.forEach(w => {
    if (w.coverImage) allImages.push(w.coverImage);
    w.gallery?.forEach(img => { if (!allImages.includes(img)) allImages.push(img) });
  });
  mockCompetitions.forEach(c => {
    if (c.mainImage && !allImages.includes(c.mainImage)) allImages.push(c.mainImage);
    // @ts-ignore
    if (c.gallery) c.gallery.forEach(img => { if (!allImages.includes(img)) allImages.push(img) });
  });

  // Collect videos from projects and workshops
  const allVideos: string[] = [];
  mockProjects.forEach(p => {
    if (p.videoUrl) allVideos.push(p.videoUrl);
  });
  mockWorkshops.forEach(w => {
    // @ts-ignore
    if (w.videoUrl && !allVideos.includes(w.videoUrl)) allVideos.push(w.videoUrl);
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center text-sm text-theme-accent hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-orange-300">
            MEDIA
          </span>{' '}
          GALLERY
        </h1>
        <p className="text-xl text-theme-muted max-w-2xl">
          A visual record of workshops, competitions, and engineering builds in action.
        </p>
      </div>

      <div className="flex space-x-4 border-b border-theme-border mb-8">
        <button
          onClick={() => setActiveTab('images')}
          className={`pb-4 px-2 flex items-center gap-2 font-mono text-sm transition-colors relative ${
            activeTab === 'images' ? 'text-white' : 'text-theme-muted hover:text-gray-300'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          IMAGES ({allImages.length})
          {activeTab === 'images' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent rounded-t"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`pb-4 px-2 flex items-center gap-2 font-mono text-sm transition-colors relative ${
            activeTab === 'videos' ? 'text-white' : 'text-theme-muted hover:text-gray-300'
          }`}
        >
          <VideoIcon className="w-4 h-4" />
          VIDEOS ({allVideos.length})
          {activeTab === 'videos' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent rounded-t"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('moments')}
          className={`pb-4 px-2 flex items-center gap-2 font-mono text-sm transition-colors relative ${
            activeTab === 'moments' ? 'text-white' : 'text-theme-muted hover:text-gray-300'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          MOMENTS ({mockMoments.length})
          {activeTab === 'moments' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent rounded-t"></span>
          )}
        </button>
      </div>

      {activeTab === 'images' && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {allImages.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-xl overflow-hidden border border-theme-border shadow-lg bg-theme-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="columns-1 sm:columns-2 gap-8 space-y-8">
          {allVideos.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-xl overflow-hidden border border-theme-border shadow-lg bg-black">
              <video 
                src={src} 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'moments' && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {mockMoments.map((moment, index) => (
            <div key={index} className="break-inside-avoid rounded-xl overflow-hidden border border-theme-border shadow-lg bg-theme-surface group">
              <div className="h-72 flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* @ts-ignore */}
                {(moment.gallery || [moment.image]).map((img, i) => (
                  <div key={i} className="min-w-full h-full snap-center relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`${moment.title} - ${i + 1}`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs font-mono text-theme-accent mb-2">
                  <Sparkles className="w-3 h-3" />
                  {moment.date} · {moment.location}
                </div>
                <h3 className="text-white font-semibold mb-2">{moment.title}</h3>
                <p className="text-theme-muted text-sm leading-relaxed line-clamp-3">{moment.caption.split('\n\n')[0]}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

