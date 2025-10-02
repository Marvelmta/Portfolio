import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

const projects = [
  {
    id: 1,
    title: "The Movie Database",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    image: img1,
    tags: ["JavaScript"],
    liveUrl: "https://fe24-js1-slutprojekt-marcel-cios.netlify.app/",
    githubUrl: "https://github.com/Marvelmta/fe24-js1-slutprojekt-marcel-cios",
  },
  {
    id: 2,
    title: "Scrum Board",
    description: "An intuitive interface for generating and editing AI-powered content with custom templates and real-time previews.",
    image: img2,
    tags: ["TypeScript", "Firebase"],
    liveUrl: "https://fe24-js2-slutprojekt-marcel-cios.netlify.app/",
    githubUrl: "https://github.com/Marvelmta/fe24-js2-slutprojekt-marcel-cios",
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Real-time collaborative drawing tool with multi-user support, shapes, and export functionality.",
    image: img3,
    tags: ["React", "TailwindCSS", "Node.js"],
    liveUrl: "https://weather-app-sage-chi-90.vercel.app/",
    githubUrl: "https://github.com/Marvelmta/WeatherApp",
  },
  {
    id: 4,
    title: "Currency Converter",
    description: "Modern project management tool with kanban boards, time tracking, and team collaboration features.",
    image: img4,
    tags: ["TypeScript"],
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-26">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of projects showcasing my skills and passion for frontend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}