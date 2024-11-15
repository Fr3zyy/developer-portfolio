'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiMusicNote, HiPlay, HiOutlineClock } from 'react-icons/hi';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch tracks');
    return res.json();
};

const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const playedAt = new Date(timestamp);
    const diff = now - playedAt;

    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
};

const RecentTracks = () => {
    const { data, error, isLoading } = useSWR('/api/spotify/recent-tracks', fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
    });

    const recentTracks = data?.items?.slice(0, 6) || [];

    if (error) {
        return (
            <div className="w-full max-w-3xl mx-auto p-4">
                <div className="flex items-center gap-2 mb-6">
                    <HiMusicNote className="w-5 h-5 text-red-500" />
                    <h2 className="text-xl font-semibold">Recent Tracks</h2>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                    Failed to load recent tracks
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="w-full max-w-3xl mx-auto p-4">
                <div className="flex items-center gap-2 mb-6">
                    <HiMusicNote className="w-5 h-5 text-green-500 animate-spin" />
                    <h2 className="text-xl font-semibold">Recent Tracks</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="animate-pulse bg-white/5 rounded-xl h-24 backdrop-blur-sm"
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <div className="flex items-center gap-2 mb-6">
                <HiMusicNote className="w-5 h-5 text-green-500" />
                <h2 className="text-xl font-semibold">Recent Tracks</h2>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {recentTracks.map((track, index) => (
                    <motion.div
                        key={`${track.played_at}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-secondary/10 border-[1.8px] border-zinc-900/70 p-4 rounded-xl backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300"
                    >
                        <div className="flex gap-3">
                            <div className="relative flex-shrink-0">
                                <img
                                    src={track.track.album.images[0].url}
                                    alt={track.track.name}
                                    className="w-16 h-16 rounded-lg shadow-lg"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-sm text-white truncate">
                                    {track.track.name}
                                </h3>
                                <p className="text-xs text-zinc-400 truncate">
                                    {track.track.artists.map(artist => artist.name).join(', ')}
                                </p>
                                <div className="flex items-center gap-1 mt-2 text-xs text-zinc-500">
                                    <HiOutlineClock className="w-3 h-3" />
                                    {formatTimeAgo(track.played_at)}
                                </div>
                            </div>
                        </div>

                        <a
                            href={track.track.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 rounded-xl"
                            aria-label={`Play ${track.track.name} on Spotify`}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default RecentTracks;