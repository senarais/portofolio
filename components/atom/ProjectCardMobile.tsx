interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  details: string;
  link: string;
}

export default function ProjectCard({ title, image, description, details, link }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center text-left gap-3 pb-8 border-b border-gray-300">
      <div className="w-full flex justify-center">
        <img className="rounded-lg border border-gray-300 w-[250px]" src={image} alt={title} />
      </div>
      <div className="w-full px-2">
        <h2 className="text-2xl text-blue-primary font-semibold">{title}</h2>
        <p className="text-black-primary text-sm leading-relaxed">{description}</p>
        <p className="text-black-primary text-sm leading-relaxed">{details}</p>
        <a
          className="text-sm text-blue-primary bg-blue-secondary px-3 py-1 mt-2 inline-block rounded-md"
          target="_blank"
          href={link}
        >
          see more
        </a>
      </div>
    </div>
  );
}
