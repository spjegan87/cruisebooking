import { Link } from 'wouter';

interface CruiseTypeCardProps {
  id: number;
  name: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

export default function CruiseTypeCard({ id, name, icon, bgColor, textColor }: CruiseTypeCardProps) {
  return (
    <Link href={`/cruises?type=${name}`}>
      <div className="flex flex-col items-center group cursor-pointer">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${bgColor} group-hover:opacity-80 transition duration-300 mb-3`}>
          <i className={`fas fa-${icon} ${textColor} text-xl`}></i>
        </div>
        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm text-center">{name}</span>
      </div>
    </Link>
  );
}
