import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code2 } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* 1. Navigation Bar (Sticky) */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span className="font-bold text-xl tracking-wider text-white">DEV<span className="text-cyan-400">.</span>PORTFOLIO</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About & Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <a 
                href="/path-to-your-resume.pdf" 
                download
                className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
              <a href="#home" onClick={toggleMenu} className="block px-3 py-2 hover:text-cyan-400">Home</a>
              <a href="#about" onClick={toggleMenu} className="block px-3 py-2 hover:text-cyan-400">About</a>
              <a href="#projects" onClick={toggleMenu} className="block px-3 py-2 hover:text-cyan-400">Projects</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 hover:text-cyan-400">Contact</a>
              <a href="/path-to-your-resume.pdf" download className="mt-4 flex items-center gap-2 px-5 py-2 bg-cyan-500 text-slate-950 rounded-md font-medium">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
          <p className="text-cyan-400 font-mono mb-4">Hi,  I am </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
           Saloni Kumari
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-500 mb-6">
            I build things for the web.
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            I specialize in [1-2 sentences about what you do, e.g., designing and developing exceptional digital experiences. I focus on creating scalable, user-centric web applications.]
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-md hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-md hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* 3. About & Skills Section */}
        <section id="about" className="py-24 border-t border-slate-800/50">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-lg leading-relaxed text-slate-400 space-y-4">
              <p>
                [Insert a brief 2-3 sentence professional bio here. Example: Hello! I'm a passionate developer who enjoys creating clean, functional, and visually appealing interfaces. My journey in web development started back in 2020, and since then, I've had the privilege of working on various scalable projects.]
              </p>
              <p>
                Whether it's building interactive user interfaces or robust backend logic, I bring ideas to life using modern technologies.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {/* Replace these skills with your own */}
                {['JavaScript (ES6+)', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript', 'Next.js', 'PostgreSQL', 'Git & GitHub'].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.02)] hover:border-cyan-400/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects Section */}
        <section id="projects" className="py-24 border-t border-slate-800/50">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            Some Things I've Built
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Template (Repeated 3 times) */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
                {/* Image Placeholder */}
                <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                  {/* Replace with actual <img> tag */}
                  <span className="text-slate-500 font-mono">Project {item} Image</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    [Project {item} Name]
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    [1-2 sentences describing what this project is, the problem it solves, and its main features.]
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">React</span>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">Tailwind</span>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Contact Section */}
        <section id="contact" className="py-24 border-t border-slate-800/50 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <form 
            className="space-y-6 text-left bg-slate-900 p-8 rounded-xl border border-slate-800"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none" placeholder="Hello..."></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-md hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center flex flex-col items-center">
        <div className="flex items-center gap-6 mb-6">
          <a href="[Your GitHub URL]" className="text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="[Your LinkedIn URL]" className="text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:[Your Email]" className="text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} Designed & Built by [Your Name].
        </p>
      </footer>
    </div>
  );
}