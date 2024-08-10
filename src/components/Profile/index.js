import Image from 'next/image';
import config from '../../../config';
import ActivityInfo from './components/ActivityCard';

const StatusIcon = ({ status }) => {
  let bgColor = 'bg-gray-500';

  switch (status) {
    case 'online':
      bgColor = 'bg-green-500';
      break;
    case 'idle':
      bgColor = 'bg-yellow-500';
      break;
    case 'dnd':
      bgColor = 'bg-red-500';
      break;
  }

  return (
    <div className={`absolute bottom-2 right-2 w-5 h-5 ${bgColor} rounded-full border border-white/40`}></div>
  );
};

const ProfileCard = ({ userData }) => {
  if (!userData) {
    return null;
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-12 p-6 bg-gradient-to-br from-zinc-900/50 to-black/30 backdrop-blur-sm rounded-xl border border-white/10">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0 relative">
          <Image
            src={`https://cdn.discordapp.com/avatars/${userData.discord_user.id}/${userData.discord_user.avatar}?size=256`}
            alt={userData.discord_user.username}
            width={120}
            height={120}
            className="rounded-full border-4 border-white/10"
          />
          <StatusIcon status={userData.discord_status} />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-white mb-2">{config.name}</h2>
          <p className="text-gray-400 text-lg mb-4">@{userData.discord_user.username.toLowerCase()}</p>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            {config.description}
          </p>
          <div className="space-y-3">
            <ActivityInfo activities={userData.activities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;