export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center px-6">
        <a
          href="#"
          className="font-[family-name:var(--display)] text-xl font-semibold tracking-tight text-[var(--text-h)] transition-opacity hover:opacity-70"
        >
          Matheus Simoes
        </a>

        <nav
          aria-label="Principal"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8"
        >
          <a
            href="#projetos"
            className="text-sm font-medium tracking-wide text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
          >
            meus projetos
          </a>
          <a
            href="#certificados"
            className="text-sm font-medium tracking-wide text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
          >
            certificados
          </a>
        </nav>
      </div>
    </header>
  )
}
