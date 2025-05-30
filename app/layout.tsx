import Header from "@/components/header";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "diego-basto.me",
  description: "My personal website to showcase a bit about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-family antialiased">
        <Providers>
          <Header/>
          <main className="grow">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
