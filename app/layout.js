import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://fr3zy.vercel.app'),
  title: {
    default: 'Fr3zy - Fullstack Developer Portfolio',
    template: '%s | Fr3zy',
  },
  description:
    'Experienced fullstack developer specializing in modern web technologies. View my projects, skills, and experience.',
  keywords: [
    'fullstack developer',
    'backend developer',
    'frontend developer',
    'web development',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'C#',
    'portfolio',
  ],
  authors: [{ name: 'Fr3zy' }],
  creator: 'Fr3zy',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Fr3zy',
    title: 'Fr3zy - Fullstack Developer Portfolio',
    description:
      'Experienced fullstack developer specializing in modern web technologies.',
    url: '/',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Fr3zy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fr3zy - Fullstack Developer Portfolio',
    description:
      'Experienced fullstack developer specializing in modern web technologies.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <NextTopLoader />
          <Header />

          {children}

          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-semibold backdrop-blur-md text-black rounded-3xl',
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent)]",
            )}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
