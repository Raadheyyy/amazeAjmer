import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';
import { projectsData, testimonialsData, servicesData, videosData } from '../data';

export default function Home({ showHero }: { showHero: boolean }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden selection:bg-accent/20">

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, filter: 'blur(10px)' }}
            animate={showHero ? { scale: 1.05, filter: 'blur(3px)' } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero.png"
            alt="Aerial architecture"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/40"></div>
          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-ink/30"></div>
        </div>

        <div className="relative z-10 container-projects px-8 md:px-14 w-full h-full flex flex-col justify-between py-20">
          <div></div>
          <div className="text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-2 text-accent text-7xl md:text-8xl font-display italic drop-shadow-lg"
            >
              aa
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="md:col-span-8 text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] drop-shadow-2xl font-display uppercase tracking-widest">
                Amaze Architects <span className="block mt-4 text-2xl md:text-3xl tracking-[0.3em] font-light text-accent-gradient">& Consultant</span>
              </h1>
              <div className="mt-8 text-[11px] md:text-sm tracking-[0.5em] uppercase text-white/60 font-light">
                Your Dreams Our Designs
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="md:col-span-2 text-right hidden md:block text-white/90 text-[11px] tracking-luxe leading-loose uppercase drop-shadow-md"
            >
              <div className="text-accent mb-2 font-bold">Studio</div>
              <div>Ajmer</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={showHero ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-between items-end text-[10px] tracking-luxe uppercase text-white/90 drop-shadow-md"
          >
            <div>EST / 2009</div>
            <div className="flex flex-col items-center gap-2">
              <span>Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-6 bg-accent"
              />
            </div>
            <div className="hidden md:block">Architecture By Intention</div>
          </motion.div>
        </div>
      </section>

      {/* Projects - Horizontal 2x3 Grid */}
      <section id="work" className="py-20 container-projects px-8 md:px-14 overflow-hidden bg-background">
        <div className="flex justify-between items-baseline mb-16 border-b border-border/50 pb-8">
          <h2 className="text-5xl md:text-6xl text-ink font-display font-light">projects</h2>
          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-luxe uppercase text-ink/60 hidden md:inline-block">Selected Work • {projectsData.length}</span>
            <Link to="/projects" className="text-[11px] tracking-luxe uppercase text-accent hover:text-ink transition-colors border border-accent px-4 py-2 rounded-full">
              View All
            </Link>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          className="grid grid-rows-2 grid-flow-col gap-6 md:gap-10 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ gridAutoColumns: 'minmax(280px, 35vw)' }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer snap-start flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden grow aspect-4/3 md:aspect-3/2 bg-muted mb-4">
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
                  <h3 className="text-base md:text-lg font-medium text-ink mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-[10px] tracking-luxe uppercase text-ink/60">{project.category}</p>
                </div>
                <span className="text-[10px] tracking-luxe uppercase text-ink/60">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-muted relative">
        <div className="container-projects px-8 md:px-14">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-6 h-px bg-accent"></div>
            <span className="text-[10px] tracking-luxe uppercase text-accent">Our Expertise</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 border border-border/20">
            {servicesData.map((service, idx) => (
              <div key={idx} className="bg-background p-8 md:p-6 hover:bg-muted transition-colors duration-500 group">
                <div className="text-accent mb-4 font-display italic text-2xl md:text-xl group-hover:translate-x-1 transition-transform duration-500">0{idx + 1}</div>
                <h3 className="text-xl md:text-sm font-medium text-ink mb-3 md:mb-2">{service.title}</h3>
                <p className="text-base md:text-[11px] text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="py-20 bg-background relative overflow-hidden">
        <div className="container-content px-8 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-accent"></div>
                <span className="text-[10px] tracking-luxe uppercase text-accent">Studio</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-8">
                Architecture & <span className="text-accent italic font-display">Consultancy.</span>
              </h2>
              <p className="text-ink/80 text-base md:text-[15px] max-w-lg mb-8 leading-relaxed">
                At Amaze Architects & Consultant, we blend creativity with precision to deliver exceptional design, construction, and consultancy services. Our talented team transforms visions into reality with innovative, functional, and sustainable designs.
              </p>
              <p className="text-ink/80 text-base md:text-[15px] max-w-lg mb-16 leading-relaxed italic border-l-2 border-accent/20 pl-6">
                "We ensure superior construction quality through advanced techniques and meticulous attention to detail."
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl md:text-4xl text-accent font-display italic mb-2">180+</div>
                  <div className="text-[10px] tracking-luxe uppercase text-ink/60">Projects Realised</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-accent font-display italic mb-2">15</div>
                  <div className="text-[10px] tracking-luxe uppercase text-ink/60">Years in Practice</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-accent font-display italic mb-2">06</div>
                  <div className="text-[10px] tracking-luxe uppercase text-ink/60">Cities Served</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-4/5 md:aspect-3/4 overflow-hidden bg-muted relative shadow-2xl">
                <img src="/studio.png" alt="Studio Interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media / YouTube Section */}
      <section id="media" className="py-20 bg-ink text-background overflow-hidden">
        <div className="container-projects px-8 md:px-14">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-6 h-px bg-accent"></div>
                <span className="text-[10px] tracking-luxe uppercase text-accent">Educational Media</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-light">latest <span className="text-accent italic font-normal">insights</span></h2>
            </div>
            <a href="#" className="text-[10px] tracking-luxe uppercase text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-all">Visit YouTube Channel</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videosData.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video bg-muted overflow-hidden mb-4 ring-1 ring-white/10 shadow-lg">
                  <iframe 
                    className="w-full h-full scale-[1.01]"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-base md:text-[13px] font-medium leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">{video.title}</h3>
                <div className="text-[10px] md:text-[9px] tracking-widest uppercase text-background/30 mt-2">Amaze Educational</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="pt-20 pb-0 bg-background text-ink relative border-t border-border/50">
        <div className="container-projects px-8 md:px-14">
          <div className="flex justify-between items-center mb-24">
            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-accent"></div>
              <span className="text-[10px] tracking-luxe uppercase text-accent">Testimonials</span>
            </div>
            <span className="text-[10px] tracking-luxe uppercase text-ink/40">Since 2009</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 relative flex flex-col md:flex-row gap-8">
              {/* Project Image associated with Testimonial */}
              <div className="w-full md:w-2/5 aspect-4/5 overflow-hidden relative shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTestimonial}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src={testimonialsData[activeTestimonial].image}
                    alt={testimonialsData[activeTestimonial].project}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* Quote and Author */}
              <div className="w-full md:w-3/5 flex flex-col justify-center relative">
                <span className="absolute -top-16 left-0 text-8xl text-accent/20 font-display select-none">"</span>
                <div className="min-h-[140px] flex items-center relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl md:text-3xl lg:text-4xl text-ink font-display font-light leading-snug"
                    >
                      {testimonialsData[activeTestimonial].quote}
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                <div className="flex justify-between items-end border-t border-border/20 pt-8 mt-8">
                  <div>
                    <div className="text-sm font-medium mb-1">{testimonialsData[activeTestimonial].author}</div>
                    <div className="text-[10px] tracking-luxe uppercase text-ink/60">{testimonialsData[activeTestimonial].project}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] tracking-luxe uppercase text-accent mb-1">Location</div>
                    <div className="text-xs text-ink/60">{testimonialsData[activeTestimonial].location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-scrolling selectors */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-16 lg:border-l border-border/20">
              {testimonialsData.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`text-left group flex items-center gap-6 pb-6 border-b border-border/20 transition-all ${activeTestimonial === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <span className={`text-[10px] tracking-luxe uppercase ${activeTestimonial === idx ? 'text-accent' : 'text-background/50'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-sm relative text-ink">
                    {t.author}
                    {activeTestimonial === idx && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-[-25px] left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  );
}
