import './globals.css';

export const metadata = {
    title: "Usama Ayoub - Full Stack Developer",
    description: "Portfolio of Usama Ayoub - Full Stack Developer specializing in modern web applications",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/assets/me.svg" />
        </head>
        <body>
            {children}
        </body>
    </html>
  );
}