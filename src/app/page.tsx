export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="container flex min-h-screen items-center py-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Ticket 00 completado</span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Base técnica y visual lista para la web de Synkrofy.
              </h1>
              <p className="max-w-2xl text-base sm:text-lg">
                El proyecto ya está configurado con Next.js App Router, TypeScript,
                Tailwind CSS, Framer Motion y Prisma, respetando la paleta y el estilo
                base definidos en el documento maestro.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-foreground">
              <span className="surface-card px-4 py-3 font-medium">Next.js 16</span>
              <span className="surface-card px-4 py-3 font-medium">TypeScript</span>
              <span className="surface-card px-4 py-3 font-medium">Tailwind CSS</span>
              <span className="surface-card px-4 py-3 font-medium">Framer Motion</span>
              <span className="surface-card px-4 py-3 font-medium">Prisma</span>
            </div>
          </div>

          <div className="surface-card p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Configuración inicial
                </p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Siguiente paso: Ticket 01
                </h2>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-surface p-5">
                  <p className="text-sm font-semibold text-foreground">Paleta aplicada</p>
                  <p className="mt-2 text-sm">
                    Azul petróleo, turquesa apagado, blanco roto, antracita y grises
                    suaves listos para el sistema visual.
                  </p>
                </div>
                <div className="surface-dark p-5">
                  <p className="text-sm font-semibold text-accent">Estructura preparada</p>
                  <p className="mt-2 text-sm text-accent/80">
                    Layout global, Tailwind, Prisma y variables de entorno base ya están
                    definidos para seguir con el desarrollo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
