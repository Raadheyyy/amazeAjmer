import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectModal({ selectedProject, setSelectedProject }: { selectedProject: any, setSelectedProject: (val: any) => void }) {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-background flex flex-col md:flex-row overflow-hidden"
        >
          {/* Left Sidebar Info */}
          <div className="w-full md:w-[35%] lg:w-[30%] h-full flex flex-col bg-background border-r border-border/40 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="p-8 md:p-12 flex flex-col h-full">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-ink hover:text-accent transition-colors mb-16 text-sm font-medium w-fit"
              >
                <ArrowLeft size={16} /> close
              </button>

              <h2 className="text-5xl md:text-6xl text-ink font-display font-medium mb-12">{selectedProject.title}</h2>
              
              <div className="flex flex-col gap-5 grow">
                {Object.entries(selectedProject.details).map(([key, value]) => (
                  <div key={key} className="border-b border-border/60 pb-2">
                    <div className="text-[11px] text-ink/40 mb-1">{key}</div>
                    <div className="text-sm text-ink font-medium">{value as string}</div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-accent font-display italic text-4xl">
                aa
              </div>
            </div>
          </div>

          {/* Right Images Scrollable Area */}
          <div className="w-full md:w-[65%] lg:w-[70%] h-full overflow-y-auto bg-muted [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-8">
              {selectedProject.images.map((img: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  className="w-full"
                >
                  <img src={img} alt={`${selectedProject.title} view ${i + 1}`} className="w-full h-auto object-cover rounded-sm shadow-sm" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
