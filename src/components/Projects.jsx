const projects = [
  {
    tag: 'Web',
    title: 'SaaS Website',
    desc: 'SaaS creado a medida para el análisis de datos integrando dashboards interactivos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    tag: 'Mobile',
    title: 'E-Commerce App',
    desc: 'Aplicación móvil de comercio electrónico con pasarela de pagos y notificaciones push.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    tag: 'Web',
    title: 'Dashboard Analytics',
    desc: 'Plataforma de analítica empresarial con reportes en tiempo real y exportación de datos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#00CED1]">
          featured work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Proyectos construidos
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-4">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#00CED1] bg-[#00CED1]/10 dark:bg-[#0047AB]/30 px-3 py-1 rounded-full">
                {project.tag}
              </span>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
