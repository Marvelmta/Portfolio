import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:marcelcios01@gmail.com",
    handle: "marcelcios01@gmail.com"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/marcel-cios-bb9a9b325/",
    handle: "/in/marcelcios"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Marvelmta",
    handle: "@Marvelmta"
  },
];
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const SERVICE_ID = 'service_zfq8y4w';
  const TEMPLATE_ID = 'template_kswwu4s';
  const USER_ID = 'C6zBL5qUcHArElsbA';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    if (!formRef.current) return;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        setSending(false);
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSending(false);
        setSent(false);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-26">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
          Whether you have a question or just want to say hi, feel free to drop a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi!"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" className="w-full group" disabled={sending}>
                  {sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these platforms.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-foreground/20 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{link.name}</div>
                      <div className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.handle}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-600/20"
            >
              <h4 className="mb-2">Available for Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                I'm currently open to freelance projects and full-time positions. 
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border text-center text-muted-foreground"
        >
          <p>&copy; 2025 Marcel Cios. Built with React, TypeScript, and Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  );
}