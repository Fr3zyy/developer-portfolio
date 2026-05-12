import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'

export const metadata = {
  title: {
    absolute: 'Fr3zy - Fullstack Developer Portfolio',
  },
  description:
    'Fr3zy - Fullstack developer. Explore recent GitHub projects, skills, and a live Spotify feed.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fr3zy - Fullstack Developer Portfolio',
    description:
      'Fullstack developer. Explore recent GitHub projects, skills, and a live Spotify feed.',
    url: '/',
  },
}

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
