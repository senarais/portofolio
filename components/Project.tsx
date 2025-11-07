import { motion } from "framer-motion";
import { Howl } from "howler";
import TechIcon from "./atom/TechIcon";
import ProjectCard from "./atom/ProjectCard";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { projects } from "./atom/projectsData";

interface Props {
  onClose: () => void;
}

export default function Project({ onClose }: Props) {
  const handleClose = () => {
    // 🔊 Play close sound
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();

    onClose();
  };

  return (
    <div className="relative w-[950px] h-[500px] p-4 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden">
      {/* header */}
      <div className="absolute text-white-primary top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-xl z-10">
        <p>projects</p>

        {/* tombol close di header */}
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close about section"
        >
          <XCircleIcon className="w-10 h-10 cursor-pointer text-white-primary" />
        </motion.button>
      </div>

      {/* content wrapper */}
      <div className="mt-[45px] flex flex-col h-full -mx-4 overflow-y-auto">
        {/* top (tech stack) */}
        <div className="h-[350px] flex flex-col gap-6 items-center border-b border-gray-400 py-5 pl-15 pr-4">
          <div className="text-black-primary text-lg font-light">
            <h1 className="text-5xl text-blue-primary mb-2 font-light">
              this is my tech stack.
            </h1>
          </div>
          <div className="grid grid-cols-8 gap-6 gap-x-10">
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="html" label="HTML" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="css" label="CSS" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="javascript" label="JavaScript" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="typescript" label="TypeScript" />
            <TechIcon src="https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" alt="tailwind" label="TailwindCSS" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="bootstrap" label="Bootstrap" />
            <TechIcon src="https://img.icons8.com/color/1200/express-js.jpg" alt="express" label="Express.js" />
            <TechIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx4dAUSJQINIiIZxrmkIx31m5b7E1NPxHyg&s" alt="symfony" label="Symfony" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" alt="postgresql" label="PostgreSQL" />
            <TechIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0X7l5JspinAllel407ujuTpVC5dNGuwHFbQ&s" alt="mysql" label="MySQL" />
            <TechIcon src="https://logo.svgcdn.com/logos/supabase-icon.png" alt="supabase" label="Supabase" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" label="React" />
            <TechIcon src="https://img.icons8.com/fluent/1200/nextjs.jpg" alt="nextjs" label="Next.js" />
            <TechIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s" alt="vercel" label="Vercel" />
            <TechIcon src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" label="GitHub" />
            <TechIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFBghKkZJOBe99ne1senz07F1MV8y9iFY_w&s" alt="nodejs" label="Node.js" />
          </div>
        </div>

        {/* scrollable content */}
        <div className="h-max flex flex-col gap-10 pl-15 pr-15 pb-30 py-8">
          <h1 className="text-5xl text-blue-primary mb-2 font-light">projects</h1>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              details={project.details}
              link={project.link}
            />
          ))}
          <div className="flex flex-col gap-4">
            <h2 className="text-blue-primary font-medium text-3xl">other projects</h2>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-xl leading-relaxed">this website! built with nextjs, tailwindcss, and a couple of react libraries.</li>
              <li className="text-blue-primary text-xl leading-relaxed">
                more projects on{" "}
                <a
                  className="underline text-blue-tertiary"
                  target="_blank"
                  href="https://github.com/senarais/"
                >
                  github!
                </a>{" "}
                feel free to visit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
