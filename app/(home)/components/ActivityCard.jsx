import { useState, useEffect } from 'react';

const ActivityCard = ({
    icon: Icon,
    title,
    image,
    imageAlt,
    mainText,
    subText,
    additionalText,
    isSpotify,
    startTime,
    endTime
}) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const duration = endTime - startTime;

    useEffect(() => {
        if (!isSpotify || !startTime || !endTime) return;

        setCurrentProgress(Date.now() - startTime);

        const interval = setInterval(() => {
            const newProgress = Date.now() - startTime;
            if (newProgress >= duration) {
                clearInterval(interval);
            } else {
                setCurrentProgress(newProgress);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isSpotify, startTime, endTime, duration]);

    const formatTime = (ms) => {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressPercentage = (currentProgress / duration) * 100;

    return (
        <div className="bg-secondary/10 border-[1.8px] border-zinc-900/70 p-4 rounded-xl backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800/50">
                {Icon}
                <span className="text-sm font-medium tracking-wide">{title}</span>
            </div>
            <div className="flex items-center gap-5 justify-center">
                {image && (
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-20 h-20 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
                <div className="flex flex-col gap-1.5 flex-1">
                    <span className="font-semibold text-primary text-lg tracking-tight">
                        {mainText}
                    </span>
                    <span className="text-sm text-muted-foreground/90">
                        {subText}
                    </span>
                    {additionalText && (
                        <span className="text-xs text-muted-foreground/80">
                            {additionalText}
                        </span>
                    )}

                    {isSpotify && startTime && endTime && (
                        <div className="mt-2 space-y-1">
                            <div className="w-full h-1 bg-secondary/20 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-linear"
                                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground/70">
                                <span>{formatTime(currentProgress)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;