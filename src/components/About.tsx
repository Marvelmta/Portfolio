import { motion } from "motion/react";
import { GraduationCap, Code } from "lucide-react";

const education = [
  {
    degree: "Grit Academy - Frontend Development",
    institution: "Vocational University",
    period: "2024 - 2026",
    description: "Comprehensive program covering modern frontend technologies, UI/UX principles, and project-based learning."
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-26">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-l text-muted-foreground mb-6">
              I'm a frontend developer currently studying at Grit Academy with a solid foundation in modern web technologies. I enjoy crafting clean, responsive and user-friendly interfaces.
            </p>
            <p className="text-l text-muted-foreground mb-6">
              Outside of my studies, I enjoy working on personal projects, experimenting with new frameworks, and sharpening my skills to grow as a developer. I’m passionate about creative problem-solving and always curious to learn more.
            </p>

            <p className="text-l text-muted-foreground">
              Collaboration is something I truly value—I thrive when collaborating with others and believe that sharing knowledge is key to improving as a developer.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}


        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{edu.institution}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}