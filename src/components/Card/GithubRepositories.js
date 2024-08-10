import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import config from '../../../config';

const GithubRepositories = ({ repositories }) => {
    if (!repositories || repositories.length === 0) {
        return null;
    }

    const githubProfileUrl = `https://github.com/${config.github.username}?tab=repositories`;

    return (
        <div className="w-full max-w-screen-xl mx-auto mt-12 p-6 bg-gradient-to-br from-zinc-900/50 to-black/30 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 flex justify-center items-center">
                    <FaGithub className="mr-2 fill-white" /> Repositories
                </h2>
                <p className="text-gray-400 text-md">
                    My GitHub Projects
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {repositories.map((repo) => (
                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                        className="block bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 
                                  hover:bg-white/10 hover:border-sky-500/50 
                                  transition-all duration-300 ease-out
                                  transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20">
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white truncate max-w-[70%]">{repo.name}</h3>
                                <span className="text-xs text-gray-500">
                                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">{repo.description}</p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">{repo.language}</span>
                                <div className="flex items-center space-x-4">
                                    <span className="flex items-center text-yellow-500">
                                        <FaStar className="mr-1" /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center text-green-500">
                                        <FaCodeBranch className="mr-1" /> {repo.forks_count}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="mt-4 text-center">
                <a
                    href={githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:text-blue-600 transition-colors"
                >
                    View More
                </a>
            </div>
        </div>
    );
};

export default GithubRepositories;
