interface ExperienceItem {
  title: string;
  startdate: string;
  endDate?: string;
  description: string;
  url?: string;
}

interface ExperienceProps {
  title: string;
  experience: ExperienceItem[];
}

function Experience({ title, experience }: ExperienceProps) {
  return (
    <div>
      <p className="text-4xl font-bold text-white">{title}</p>

      {/* Timeline container */}
      <div className="flex flex-col relative">
        {experience.map((item, index) => (
          <Posting key={index} item={item} showLine={index !== experience.length - 1} />
        ))}
      </div>
    </div>
  );
}

interface PostingProps {
  item: ExperienceItem;
  showLine: boolean;
}

function Posting({ item, showLine }: PostingProps) {
  return (
    <div className="relative pl-10 py-2">
      {/* Vertical line */}
      {showLine && (
        <div className="absolute left-4 top-4 h-full w-0.5 bg-gray-600" />
      )}

      {/* Dot */}
      <div className="absolute left-[11px] top-4 w-3 h-3 rounded-full bg-cyan-400 border-2 border-black" />

      {/* Content */}
      <div className="text-white">
        {item.url ? (
          <a
            href={item.url}
            className="text-accent font-semibold text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        ) : (
          <p className="text-accent font-semibold text-xl">{item.title}</p>
        )}
        <p className="text-md text-gray-300">  {item.startdate}{item.endDate ? ` - ${item.endDate}` : ''}</p>
        <p className="text-md text-white mt-1">{item.description}</p>
      </div>
    </div>
  );
}

export default Experience;
