import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Riverway Logistics Inc",
  description: "Smarter Freight. Seamless Operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Riverway Logistics Logo"
                width={160}
                height={80}
              />
              <span className="sr-only">Riverway Logistics Inc</span>
            </Link>
            <nav className="space-x-8 text-primary font-medium">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/technology">Technology</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-primary text-white text-center py-6 mt-10">
          © {new Date().getFullYear()} Riverway Logistics Inc. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
