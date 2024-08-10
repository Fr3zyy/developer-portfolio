import Image from 'next/image';
import { motion } from 'framer-motion';

const ActivityCard = ({ activity }) => {
    let imageUrl, title, subtitle, details, icon, bgColor, textColor;

    if (activity.name === "Spotify") {
        imageUrl = `https://i.scdn.co/image/${activity.assets.large_image.split(':')[1]}`;
        title = "Spotify";
        subtitle = activity.details;
        details = activity.state;
        bgColor = "from-bg-zinc-800/10 via-zinc-900 to-bg-zinc-950/10";
        textColor = "text-[#1DB954]";
    } else if (activity.name === "Visual Studio Code") {
        imageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
        title = "Visual Studio Code";
        subtitle = activity.details;
        details = activity.state;
        bgColor = "from-bg-zinc-950/10 via-zinc-900 to-bg-zinc-900/10";
        textColor = "text-[#007ACC]";
    } else {
        return null;
    }

    return (
        <motion.div 
            className={`flex w-full items-center gap-x-4 rounded-xl bg-gradient-to-br ${bgColor} backdrop-blur-sm p-4 border border-white/10 shadow-lg`}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative">
                <Image 
                    src={imageUrl}
                    alt={title}
                    width={64}
                    height={64}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="flex-grow">
                <h2 className={`font-semibold ${textColor} mb-1 flex items-center gap-x-2`}>
                    {title}
                </h2>
                <p className="text-white/90 font-medium truncate">{subtitle}</p>
                <p className="text-white/70 text-sm truncate">{details}</p>
            </div>
        </motion.div>
    );
};

const ActivityInfo = ({ activities }) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
            ))}
        </div>
    );
};

export default ActivityInfo;