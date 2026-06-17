import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { GithubCta } from './components/sections/GithubCta';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-surface selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <GithubCta />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
