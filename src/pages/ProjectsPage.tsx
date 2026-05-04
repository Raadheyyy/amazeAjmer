import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const tags = ['ALL', 'RESIDENCE', 'COMMERCIAL', 'HOSPITALITY'];

  const filteredProjects = filter === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 container-projects px-8 md:px-14 min-h-screen bg-background">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl text-ink font-display font-light mb-8">selected <span className="text-accent italic font-normal">work</span></h1>
        
        <div className="flex flex-wrap gap-4 border-b border-border/50 pb-8">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-[10px] tracking-luxe uppercase px-4 py-2 rounded-full transition-colors border ${
                filter === tag 
                  ? 'bg-ink text-background border-ink' 
                  : 'bg-transparent text-ink/60 border-border hover:border-ink hover:text-ink'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-4/5 bg-muted mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-[10px] tracking-luxe uppercase text-ink font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h3 className="text-lg font-medium text-ink mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-[10px] tracking-luxe uppercase text-ink/60">{project.category}</p>
                </div>
                <span className="text-[10px] tracking-luxe uppercase text-ink/60">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  );
}
