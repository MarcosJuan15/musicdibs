import './globals.css';

export const metadata = {
  title: 'MusicDIBS - Plataforma de Distribución Musical',
  description: 'Distribución global, protección de derechos y tecnología blockchain para artistas',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}