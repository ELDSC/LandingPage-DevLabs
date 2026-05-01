export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">Disponibles para trabajar</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hola! somos{' '}
            <span className="text-blue-600 dark:text-blue-400">DevLabs</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-500 dark:text-zinc-400">
            Soluciones Tecnológicas
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            Creamos propuestas a medida de cada cliente, que impacten en su negocio a escala profesional por un precio más bajo.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Lima, Perú
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Mira nuestro trabajo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-zinc-100 dark:from-blue-950 dark:to-zinc-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
              alt="Equipo de desarrollo DevLabs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
