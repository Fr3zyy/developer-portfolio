"use client";
import { useState, useEffect } from 'react';
import ProfileCard from '@/components/Profile';
import SocialLinks from '@/components/Card/SocialLinks';
import config from '@/../config';
import { fetchGithubData } from '@/lib/user';
import GithubRepositories from '@/components/Card/GithubRepositories';
import SkillsGrid from '@/components/Card/Skills';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="rounded-md h-12 w-12 border-4 border-t-4 border-white animate-spin absolute" />
  </div>
);

export default function Home() {
  const [discordData, setDiscordData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const lanyardResponse = await fetch(`https://api.lanyard.rest/v1/users/${config.discord.userId}`);
        if (!lanyardResponse.ok) {
          throw new Error('Failed to fetch Lanyard data');
        }
        const lanyardData = await lanyardResponse.json();
        setDiscordData(lanyardData.data);

        const githubData = await fetchGithubData(config.github.username);
        setGithubData(githubData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileCard userData={discordData} />
      <GithubRepositories repositories={githubData} />
      <SkillsGrid />
      <SocialLinks />
    </div>
  );
}