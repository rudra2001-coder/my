import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import CertificationsSection from '../components/CertificationsSection'
import ExperienceSection from '../components/ExperienceSection'
import WorkflowSection from '../components/WorkflowSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import YouTubeSection from '../components/YouTubeSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import FloatingCTA from '../components/FloatingCTA'

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100, easing: 'ease-out-cubic' })
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ExperienceSection />
      <WorkflowSection />
      <ProjectsSection />
      <TestimonialsSection />
      <YouTubeSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </>
  )
}
