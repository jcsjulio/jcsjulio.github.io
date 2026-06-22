import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Mail, Linkedin } from "lucide-react";

export function Hero({ username }: { username: string }) {
  return (
    <section id="about" className="py-20 pt-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="flex-shrink-0">
            <img
              src={`https://github.com/${username}.png`}
              alt={`${username} avatar`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-white/10 shadow-lg"
            />
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Building digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                experiences
              </span>{" "}
              that matter.
            </h1>
            <p className="text-base text-muted-foreground mb-7 max-w-xl leading-relaxed">
              Focused on crafting clean, user-centric products.
              Obsessed with performance, aesthetics, and code that scales.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <SiGithub className="w-4 h-4" />
                GitHub
              </a>
              <span className="text-white/10">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="text-white/10">·</span>
              <a
                href="mailto:wjcsjulio+github@gmail.com"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
