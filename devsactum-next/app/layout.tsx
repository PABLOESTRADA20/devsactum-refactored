import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Devsanctum — Red social para developers",
  description: "Plataforma social para desarrolladores. Comparte proyectos, conecta con la comunidad y crece profesionalmente.",
  keywords: ["developers", "programming", "social", "code", "community"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('ds-theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else if (theme === 'system' || !theme) {
                  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.add('light');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className="h-full overflow-hidden">
        {children}
      </body>
    </html>
  )
}
