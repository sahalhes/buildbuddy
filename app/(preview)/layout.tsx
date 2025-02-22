import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-sdk-preview-roundtrips.vercel.app"),
  title: "Pica OneTool Demo",
  description: "Unleash the Potential of Agentic AI",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-box.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className={`${GeistSans.className} flex min-h-screen bg-gradient-to-b from-emerald-900/20 to-black`}>
          <div className="max-w-[1200px] w-full mx-auto px-8">
            <Toaster position="top-center" richColors />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
