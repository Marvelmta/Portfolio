import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-26">
          <div className="flex items-center justify-between h-16">


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors relative ${
                    activeSection === item.href.substring(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(item.href.substring(1));
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background md:hidden pt-16"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={e => {
                    e.preventDefault();
                    setIsOpen(false);
                    const el = document.getElementById(item.href.substring(1));
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`text-2xl transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{
          scaleX: 0,
        }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0 }}
      />
    </>
  );
}