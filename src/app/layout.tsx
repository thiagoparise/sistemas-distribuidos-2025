import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Pokedex",
  description: "Creada por Thiago Parise",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <nav>
            <Link 
              href="/"
              className="text-2xl text-yellow-300 hover:underline mt-2 block text-center"
            >
              Página Principal
            </Link>
          </nav>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="text-center text-black bg-yellow-300 py-3 mt-6 w-full">
            © 2025 Thiago Parise — Todos los derechos reservados.
          </footer>
        </Providers>
      </body>
    </html>
  );
}
