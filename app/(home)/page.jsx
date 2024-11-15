import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'
import RecentTracks from './components/RecentTracks'
import { config } from '@/config'

const Home = () => {
  return (
    <div>
      <HeroSection />

      {
        config.recentTracks ? (
          <RecentTracks />
        ) : (
          null
        )
      }
      <GithubProjects />
      <SkillsSection />
    </div>
  )
}

export default Home