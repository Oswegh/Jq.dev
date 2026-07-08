// src/components/Projects.jsx
import LazyImage from './LazyImage';

const projects = [
  {
    id: 1,
    title: "EcoBin",
    description: "Smart waste segregation with real-time points and rewards. Developed an IoT-enabled smart bin using Arduino and WebSockets, allowing users to track their recycling habits and earn rewards for proper waste disposal.",
    tech: ["React", "Node.js", "Express", "Arduino", "ESP32", "WebSockets", "Supabase", "TailwindCSS"],
    image: "/project-iot.jpg", // You can replace this with a real image later
  },
  {
    id: 2,
    title: "ML Image Classifier",
    description: "Created a machine learning pipeline using Python (TensorFlow) wrapped in an interactive React UI, capable of classifying custom datasets with 94% accuracy.",
    tech: ["React", "Python", "TensorFlow"],
    image: "/project-ml.jpg",
  },
  {
    id: 3,
    title: "TaskFlow API",
    description: "Designed a full-stack CRUD application with a Java Spring Boot backend and React frontend, featuring JWT authentication and real-time database updates.",
    tech: ["React", "Java", "PostgreSQL"],
    image: "/project-api.jpg",
  },
];

export default function Projects({ theme }) {
  const isDark = theme === "dark";

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-8">
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
          Featured Projects
        </h2>
        <p className={`mt-2 text-sm tracking-[0.15em] jetbrains-mono ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          THINGS I'VE BUILT
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isDark 
                ? 'bg-[#19195d] border border-white/10 hover:border-white/20' 
                : 'bg-[#f5f5fa] border border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Project Image */}
            <div className="aspect-video w-full bg-black/5 dark:bg-white/5">
              {/* If you don't have real images yet, this div acts as a placeholder */}
              <LazyImage 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                skeletonClassName="aspect-video"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className={`text-[10px] uppercase tracking-wider jetbrains-mono px-2 py-1 rounded-md ${
                      isDark 
                        ? 'bg-white/10 text-white/70' 
                        : 'bg-black/5 text-black/60'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title & Description with "Impact Metric" */}
              <h3 className={`text-lg font-bold jetbrains-mono mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {project.title}
              </h3>
              <p className={`text-sm leading-relaxed jetbrains-mono ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}