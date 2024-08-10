import React from 'react';
import config from '../../../config';

const SocialLinks = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto mt-12 p-6 bg-gradient-to-br from-zinc-900/50 to-black/30 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2 text-center">Connect with Me</h2>
            <p className="text-gray-400 text-base mb-6 text-center">Let's collaborate and create something amazing together!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {config.links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 
                                       flex items-center space-x-4 
                                       hover:bg-white/10 hover:border-sky-500/50 
                                       transition-all duration-300 ease-out
                                       transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
                        >
                            <div className="flex-shrink-0">
                                <Icon className="text-gray-400 text-4xl group-hover:text-sky-400 transition-all duration-300 
                                                 transform group-hover:scale-110 group-hover:rotate-6" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                                    {link.name}
                                </h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                                    {link.description}
                                </p>
                                {link.stats && (
                                    <p className="mt-2 text-sky-400 text-sm">
                                        {link.stats}
                                    </p>
                                )}
                            </div>
                        </a>
                    );
                })}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm">
                    Prefer email? Reach out to me at <a href={`mailto:${config.email}`} className="text-sky-400 hover:underline">{config.email || "contact@example.com"}</a>
                </p>
            </div>
        </div>
    );
};

export default SocialLinks;