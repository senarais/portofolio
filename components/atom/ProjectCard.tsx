interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  details: string;
  link: string;
}

export default function ProjectCard({ title, image, description, details, link }: ProjectCardProps) {
  return (
    <div className="flex gap-7 pb-10 border-b border-gray-400">
      <img className="rounded-xl border-2 border-gray-400" src={image} alt={title} />
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl text-blue-primary font-medium">{title}</h2>
        <p className="text-black-primary-primary text-md">{description}</p>
        <p className="text-black-primary-primary text-md">{details}</p>
        <a className="text-md text-blue-primary bg-blue-secondary p-2 w-fit rounded-sm" target="_blank" href={link}>
          see more
        </a>
      </div>
    </div>
  );
}
