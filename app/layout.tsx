'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "RevRoad",
//   description: "RevRoad",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {!isDashboard && (
          <nav className="w-full bg-black mb-20 sm:mb-24 md:mb-6 py-4 z-20">
            <div className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-white text-2xl sm:text-3xl font-bold font-serif">
                RevRoad
              </h1>
              <Link
                href="/"
                className="text-white text-base sm:text-lg font-serif"
                aria-label="About Us"
              >
                About Us
              </Link>
            </div>
          </nav>
        )}

        {children}
      </body>
    </html>
  );
}
