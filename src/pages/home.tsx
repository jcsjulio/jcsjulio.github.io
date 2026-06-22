import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Footer } from "../components/footer";

// --- EDITE AQUI ---
const GITHUB_USERNAME = "jcsjulio"; // Coloque seu username do GitHub
// ------------------

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.05),transparent_40%)]" />
      <Navbar username={GITHUB_USERNAME} />
      <main>
        <Hero username={GITHUB_USERNAME} />
        <Projects username={GITHUB_USERNAME} />
      </main>
      <Footer />
    </div>
  );
}
