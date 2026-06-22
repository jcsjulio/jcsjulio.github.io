import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import { useGithubRepos } from "../hooks/use-github-repos";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Ruby: "#CC342D",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Vue: "#41b883",
  Swift: "#F05138",
  C: "#555555",
  "C#": "#178600",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-5 h-40 animate-pulse">
      <div className="h-4 w-1/2 bg-white/10 rounded mb-3" />
      <div className="h-3 w-full bg-white/10 rounded mb-2" />
      <div className="h-3 w-4/5 bg-white/10 rounded" />
    </div>
  );
}

export function Projects({ username }: { username: string }) {
  const { data: repos, isLoading, isError } = useGithubRepos(username);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl">
            Recent open-source work and side projects, pulled directly from GitHub.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {isError && (
          <p className="text-red-400 text-sm">Failed to load projects. Check the GitHub username.</p>
        )}

        {repos && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                variants={item}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:text-primary transition-colors">
                    <Github className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-4 min-h-[2.5rem]">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#ccc" }}
                      />
                      {repo.language}
                    </div>
                  )}
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
