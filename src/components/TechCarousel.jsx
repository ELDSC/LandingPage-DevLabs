import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiVercel, SiPostgresql, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPrisma } from 'react-icons/si'

const technologies = [
  { name: 'Vercel',     icon: <SiVercel className="w-5 h-5" />,     color: 'bg-[#000000]' },
  { name: 'Figma',      icon: <FaFigma className="w-5 h-5" />,      color: 'bg-[#F24E1E]' },
  { name: 'Git',        icon: <FaGitAlt className="w-5 h-5" />,     color: 'bg-[#F05032]' },
  { name: 'React',      icon: <FaReact className="w-5 h-5" />,      color: 'bg-[#087EA4]' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" />,  color: 'bg-[#4169E1]' },
  { name: 'Next.js',    icon: <SiNextdotjs className="w-5 h-5" />,   color: 'bg-[#000000]' },
  { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" />,   color: 'bg-[#3178C6]' },
  { name: 'Tailwind',   icon: <SiTailwindcss className="w-5 h-5" />, color: 'bg-[#06B6D4]' },
  { name: 'Node.js',    icon: <FaNodeJs className="w-5 h-5" />,      color: 'bg-[#339933]' },
  { name: 'Docker',     icon: <FaDocker className="w-5 h-5" />,      color: 'bg-[#2496ED]' },
  { name: 'MongoDB',    icon: <SiMongodb className="w-5 h-5" />,     color: 'bg-[#47A248]' },
  { name: 'Prisma',     icon: <SiPrisma className="w-5 h-5" />,      color: 'bg-[#2D3748]' },
]

export default function TechCarousel() {
  const doubled = [...technologies, ...technologies]

  return (
    <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
      <h3 className="text-center text-lg font-semibold mb-10 text-zinc-600 dark:text-zinc-400">
        Tecnologías con las que trabajamos
      </h3>
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scroll w-max">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white whitespace-nowrap ${tech.color}`}
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
