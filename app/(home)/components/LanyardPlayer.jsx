import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { HiMusicNote } from "react-icons/hi";
import { SiVisualstudiocode } from "react-icons/si";
import { config } from "@/config";

const LanyardPlayer = () => {
    const [activities, setActivities] = useState({
        spotify: null,
        vscode: null
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ws = new WebSocket('wss://api.lanyard.rest/socket');

        ws.onopen = () => {
            ws.send(
                JSON.stringify({
                    op: 2,
                    d: {
                        subscribe_to_id: config.social.discord,
                    },
                })
            );
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
                const presence = data.d;
                const vscodeActivity = presence.activities?.find(
                    activity => activity.name === "Visual Studio Code"
                );

                setActivities({
                    spotify: presence.spotify,
                    vscode: vscodeActivity
                });
                setLoading(false);
            }
        };

        return () => {
            ws.close();
        };
    }, []);

    if (loading) {
        return (
            <ActivityCard
                icon={<HiMusicNote className="w-5 h-5 text-green-500 animate-spin" />}
                title="Loading..."
            />
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.spotify && (
                <ActivityCard
                    icon={<HiMusicNote className="w-5 h-5 text-green-500" />}
                    title="Now Playing on Spotify"
                    image={activities.spotify.album_art_url}
                    imageAlt={activities.spotify.album}
                    mainText={activities.spotify.song}
                    subText={`by ${activities.spotify.artist}`}
                    additionalText={`on ${activities.spotify.album}`}
                    isSpotify={true}
                    startTime={activities.spotify.timestamps.start}
                    endTime={activities.spotify.timestamps.end}
                />
            )}

            {activities.vscode && (
                <ActivityCard
                    icon={<SiVisualstudiocode className="w-5 h-5 text-sky-500" />}
                    image={`https://cdn.discordapp.com/app-assets/${activities.vscode.application_id}/${activities.vscode.assets.large_image}.png`}
                    title="Currently Developing"
                    mainText={activities.vscode.name}
                    subText={activities.vscode.details}
                    additionalText={activities.vscode.state}
                />
            )}
        </div>
    );
};

export default LanyardPlayer;