import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import AboutSection from './components/AboutSection/AboutSection'
import ProjectsSection from './components/ProjectSection/ProjectSection'
import Footer from './components/Footer/Footer'
import AchievementsSection from './components/AchievementsSection/AchievementsSection'
import EmailSection from './components/EmailSection/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />      
        <EmailSection />  
      </div>      
      <Footer />
    </main>
  )
}
