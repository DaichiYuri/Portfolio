import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Badge = ({ children }) => (
    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
      {children}
    </span>
  );

  
export default function ProjectTile({ project }) {
  return (
    <div className="bg-gray-800 lg:m-10 my-10 text-white p-4 rounded-2xl shadow-lg hover:scale-[1.03] transition-all">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={"/Portfolio"+project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg bg-white"
        />
      </div>

      {/* Project Info */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-400 text-sm">
          {project.year} • {project.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} className="bg-blue-500">{tag}</Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-2">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4 mt-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="text-2xl hover:text-gray-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
