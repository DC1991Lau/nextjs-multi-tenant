import Navbar from "@/components/Navbar";
import Providers from "@/components/ui/Providers";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main className="flex-1 flex">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
