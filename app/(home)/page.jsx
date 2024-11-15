import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GithubProjects />
      <SkillsSection />
    </div>
  )
}

export default Home